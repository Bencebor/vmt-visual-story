<?php
/**
 * VMT – Visual Media Team téma funkciók.
 *
 * @package vmt
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'VMT_VERSION', '1.0.0' );

/**
 * Téma támogatások és menük.
 */
function vmt_setup() {
	load_theme_textdomain( 'vmt', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'align-wide' );
	add_theme_support(
		'html5',
		array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' )
	);
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 146,
			'width'       => 527,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);

	register_nav_menus(
		array(
			'primary' => __( 'Fő navigáció (egyoldalas horgonyok)', 'vmt' ),
			'footer'  => __( 'Lábléc menü', 'vmt' ),
		)
	);
}
add_action( 'after_setup_theme', 'vmt_setup' );

/**
 * Stílusok és scriptek betöltése.
 */
function vmt_assets() {
	// Google Fonts – Sora (címsorok) + Manrope (szöveg).
	wp_enqueue_style(
		'vmt-fonts',
		'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap',
		array(),
		null
	);

	wp_enqueue_style( 'vmt-style', get_stylesheet_uri(), array( 'vmt-fonts' ), VMT_VERSION );

	wp_enqueue_script(
		'vmt-main',
		get_template_directory_uri() . '/assets/js/main.js',
		array(),
		VMT_VERSION,
		true
	);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'vmt_assets' );

/**
 * Preconnect a Google Fonts felé (gyorsabb betöltés).
 */
function vmt_resource_hints( $urls, $relation_type ) {
	if ( 'preconnect' === $relation_type ) {
		$urls[] = array(
			'href' => 'https://fonts.gstatic.com',
			'crossorigin',
		);
	}
	return $urls;
}
add_filter( 'wp_resource_hints', 'vmt_resource_hints', 10, 2 );

/**
 * Egyszerű beállítás-olvasó alapértelmezéssel.
 *
 * @param string $key     Beállítás azonosító.
 * @param string $default Alapértelmezett érték.
 * @return string
 */
function vmt_opt( $key, $default = '' ) {
	$value = get_theme_mod( $key, $default );
	return ( '' === $value || null === $value ) ? $default : $value;
}

/**
 * Kép URL a téma assets/img mappájából.
 *
 * @param string $file Fájlnév.
 * @return string
 */
function vmt_img( $file ) {
	return get_template_directory_uri() . '/assets/img/' . ltrim( $file, '/' );
}

/**
 * Sortörésekkel elválasztott lista tömbbé alakítása.
 *
 * @param string $value Több soros szöveg.
 * @return array
 */
function vmt_lines( $value ) {
	$lines = preg_split( '/\r\n|\r|\n/', (string) $value );
	$lines = array_map( 'trim', $lines );
	return array_values( array_filter( $lines, 'strlen' ) );
}

/**
 * Logó kiírása: egyedi logó, ha van, különben a beépített VMT wordmark.
 */
function vmt_logo( $classes = 'vmt-logo vmt-logo--light' ) {
	if ( has_custom_logo() ) {
		$logo_id = get_theme_mod( 'custom_logo' );
		$img     = wp_get_attachment_image( $logo_id, 'full', false, array( 'alt' => get_bloginfo( 'name' ) ) );
	} else {
		$img = sprintf(
			'<img src="%1$s" width="527" height="146" alt="%2$s" />',
			esc_url( vmt_img( 'vmt-wordmark.png' ) ),
			esc_attr__( 'VMT – Visual Media Team', 'vmt' )
		);
	}

	printf(
		'<a class="%1$s" href="%2$s" aria-label="%3$s">%4$s</a>',
		esc_attr( $classes ),
		esc_url( home_url( '/#top' ) ),
		esc_attr__( 'VMT – Visual Media Team, ugrás az oldal tetejére', 'vmt' ),
		$img // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	);
}

/**
 * Az egyoldalas szerkezet szekciói (horgony => címke).
 *
 * @return array
 */
function vmt_sections() {
	return array(
		'szolgaltatas' => __( 'Szolgáltatás', 'vmt' ),
		'munkaink'     => __( 'Munkáink', 'vmt' ),
		'folyamat'     => __( 'Folyamat', 'vmt' ),
		'rolunk'       => __( 'Rólunk', 'vmt' ),
		'kapcsolat'    => __( 'Kapcsolat', 'vmt' ),
	);
}

/**
 * Navigáció: egyedi menü, ha van, különben a beépített horgonyok.
 *
 * @param string $location Menü pozíció.
 * @param string $class    Lista CSS osztály.
 */
function vmt_nav( $location = 'primary', $class = 'vmt-menu' ) {
	if ( has_nav_menu( $location ) ) {
		wp_nav_menu(
			array(
				'theme_location' => $location,
				'container'      => false,
				'menu_class'     => $class,
				'depth'          => 1,
				'fallback_cb'    => false,
			)
		);
		return;
	}

	echo '<ul class="' . esc_attr( $class ) . '">';
	foreach ( vmt_sections() as $anchor => $label ) {
		printf(
			'<li><a href="%1$s">%2$s</a></li>',
			esc_url( home_url( '/#' . $anchor ) ),
			esc_html( $label )
		);
	}
	echo '</ul>';
}

/**
 * Foglalási (konzultációs) link.
 *
 * @return string
 */
function vmt_booking_url() {
	return vmt_opt(
		'vmt_booking_url',
		'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0eEeT2UiiWG73-nuSoL1cbqsuFqhs6hjx_tBKL6Eej1l4Kc0mJSKeGWjl7PUq6wokaJX1xoap4'
	);
}

/**
 * SVG ikonok.
 *
 * @param string $name Ikon neve.
 */
function vmt_icon( $name ) {
	$attrs = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"';

	$paths = array(
		'arrow'   => '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
		'left'    => '<path d="M15 18l-6-6 6-6"/>',
		'right'   => '<path d="M9 18l6-6-6-6"/>',
		'video'   => '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 12h20"/>',
		'camera'  => '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3.2"/>',
		'social'  => '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
		'chart'   => '<path d="M3 3v18h18"/><path d="m7 14 3-4 3 3 4-6"/>',
		'image'   => '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="1.6"/><path d="m21 15-5-5L5 21"/>',
		'handled' => '<path d="M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10Z"/>',
		'play'    => '<path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none"/>',
		'star'    => '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z" fill="currentColor" stroke="none"/>',
		'mail'    => '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
		'phone'   => '<path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3Z"/>',
	);

	if ( ! isset( $paths[ $name ] ) ) {
		return;
	}

	echo '<svg ' . $attrs . '>' . $paths[ $name ] . '</svg>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}

/**
 * Konzultációs gomb.
 *
 * @param string $label Felirat.
 * @param string $style solid|outline.
 */
function vmt_cta_button( $label = '', $style = 'solid' ) {
	$label = $label ? $label : __( 'Kérj személyre szabott marketingtervet', 'vmt' );
	printf(
		'<a class="vmt-btn vmt-btn--%1$s" href="%2$s" target="_blank" rel="noopener noreferrer">%3$s',
		esc_attr( $style ),
		esc_url( vmt_booking_url() ),
		esc_html( $label )
	);
	vmt_icon( 'arrow' );
	echo '</a>';
}

require get_template_directory() . '/inc/customizer.php';
