<?php
/**
 * Testreszabó (Customizer) beállítások.
 *
 * Megjelenés → Testreszabás → VMT tartalom
 *
 * @package vmt
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Beállítás + vezérlő regisztrálása egy lépésben.
 */
function vmt_add_field( $wp_customize, $id, $label, $section, $default = '', $type = 'text', $sanitize = 'sanitize_text_field' ) {
	$wp_customize->add_setting(
		$id,
		array(
			'default'           => $default,
			'sanitize_callback' => $sanitize,
			'transport'         => 'refresh',
		)
	);

	$wp_customize->add_control(
		$id,
		array(
			'label'   => $label,
			'section' => $section,
			'type'    => $type,
		)
	);
}

/**
 * Testreszabó regisztráció.
 *
 * @param WP_Customize_Manager $wp_customize Customizer példány.
 */
function vmt_customize_register( $wp_customize ) {

	$wp_customize->add_panel(
		'vmt_panel',
		array(
			'title'    => __( 'VMT tartalom', 'vmt' ),
			'priority' => 20,
		)
	);

	/* ---------- Hero ---------- */
	$wp_customize->add_section(
		'vmt_hero',
		array(
			'title' => __( 'Főcím (hero)', 'vmt' ),
			'panel' => 'vmt_panel',
		)
	);

	vmt_add_field( $wp_customize, 'vmt_hero_eyebrow', __( 'Kis felirat', 'vmt' ), 'vmt_hero', 'Visual Media Team — tartalom & social media marketing' );
	vmt_add_field( $wp_customize, 'vmt_hero_title', __( 'Főcím', 'vmt' ), 'vmt_hero', 'Tartalom, ami dolgozik a cégedért.' );
	vmt_add_field( $wp_customize, 'vmt_hero_lead', __( 'Kiemelt mondat', 'vmt' ), 'vmt_hero', 'Videó. Fotó. Social media. Marketing. Egy csapatban, havi rendszerességgel.', 'textarea', 'sanitize_textarea_field' );
	vmt_add_field( $wp_customize, 'vmt_hero_text', __( 'Bevezető szöveg', 'vmt' ), 'vmt_hero', 'Kis- és középvállalkozásoknak készítünk személyre szabott tartalmakat és marketingrendszert az ötlettől a megvalósításig.', 'textarea', 'sanitize_textarea_field' );

	$wp_customize->add_setting(
		'vmt_hero_image',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Media_Control(
			$wp_customize,
			'vmt_hero_image',
			array(
				'label'       => __( 'Hero háttérkép', 'vmt' ),
				'description' => __( 'Ha üresen hagyod, a témába épített kép jelenik meg.', 'vmt' ),
				'section'     => 'vmt_hero',
				'mime_type'   => 'image',
			)
		)
	);

	vmt_add_field( $wp_customize, 'vmt_hero_video', __( 'Hero videó URL (opcionális, mp4)', 'vmt' ), 'vmt_hero', '', 'url', 'esc_url_raw' );

	/* ---------- Kapcsolat ---------- */
	$wp_customize->add_section(
		'vmt_contact',
		array(
			'title' => __( 'Kapcsolat és foglalás', 'vmt' ),
			'panel' => 'vmt_panel',
		)
	);

	vmt_add_field( $wp_customize, 'vmt_booking_url', __( 'Időpontfoglalás linkje', 'vmt' ), 'vmt_contact', 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0eEeT2UiiWG73-nuSoL1cbqsuFqhs6hjx_tBKL6Eej1l4Kc0mJSKeGWjl7PUq6wokaJX1xoap4', 'url', 'esc_url_raw' );
	vmt_add_field( $wp_customize, 'vmt_email', __( 'E-mail cím', 'vmt' ), 'vmt_contact', 'vmt.info@gmail.com', 'email', 'sanitize_email' );
	vmt_add_field( $wp_customize, 'vmt_instagram', __( 'Instagram link', 'vmt' ), 'vmt_contact', '', 'url', 'esc_url_raw' );
	vmt_add_field( $wp_customize, 'vmt_tiktok', __( 'TikTok link', 'vmt' ), 'vmt_contact', '', 'url', 'esc_url_raw' );
	vmt_add_field( $wp_customize, 'vmt_facebook', __( 'Facebook link', 'vmt' ), 'vmt_contact', '', 'url', 'esc_url_raw' );

	/* ---------- Csapat ---------- */
	$wp_customize->add_section(
		'vmt_team',
		array(
			'title' => __( 'Csapat', 'vmt' ),
			'panel' => 'vmt_panel',
		)
	);

	vmt_add_field( $wp_customize, 'vmt_person1_name', __( '1. személy neve', 'vmt' ), 'vmt_team', 'Vörös Bence' );
	vmt_add_field( $wp_customize, 'vmt_person1_role', __( '1. személy pozíciója', 'vmt' ), 'vmt_team', 'Videós & fotós tartalomkészítő' );
	vmt_add_field( $wp_customize, 'vmt_person1_bio', __( '1. személy bemutatkozása', 'vmt' ), 'vmt_team', 'Videózás, fotózás, operatőri munka és vágás – a kreatív tartalom teljes vizuális megvalósítását én viszem.', 'textarea', 'sanitize_textarea_field' );
	vmt_add_field( $wp_customize, 'vmt_person1_phone', __( '1. személy telefonszáma', 'vmt' ), 'vmt_team', '06 30 368 0732' );

	$wp_customize->add_setting( 'vmt_person1_photo', array( 'sanitize_callback' => 'absint' ) );
	$wp_customize->add_control(
		new WP_Customize_Media_Control(
			$wp_customize,
			'vmt_person1_photo',
			array(
				'label'     => __( '1. személy fotója', 'vmt' ),
				'section'   => 'vmt_team',
				'mime_type' => 'image',
			)
		)
	);

	vmt_add_field( $wp_customize, 'vmt_person2_name', __( '2. személy neve', 'vmt' ), 'vmt_team', 'Büi Soma' );
	vmt_add_field( $wp_customize, 'vmt_person2_role', __( '2. személy pozíciója', 'vmt' ), 'vmt_team', 'Marketinges & Social Media Manager' );
	vmt_add_field( $wp_customize, 'vmt_person2_bio', __( '2. személy bemutatkozása', 'vmt' ), 'vmt_team', 'A tartalmak mögötti stratégiával, social media menedzsmenttel és marketinggel foglalkozom, hogy az elkészült tartalmak ne csak jól nézzenek ki, hanem céljuk is legyen.', 'textarea', 'sanitize_textarea_field' );
	vmt_add_field( $wp_customize, 'vmt_person2_phone', __( '2. személy telefonszáma', 'vmt' ), 'vmt_team', '06 30 989 1315' );

	$wp_customize->add_setting( 'vmt_person2_photo', array( 'sanitize_callback' => 'absint' ) );
	$wp_customize->add_control(
		new WP_Customize_Media_Control(
			$wp_customize,
			'vmt_person2_photo',
			array(
				'label'     => __( '2. személy fotója', 'vmt' ),
				'section'   => 'vmt_team',
				'mime_type' => 'image',
			)
		)
	);

	/* ---------- Számok ---------- */
	$wp_customize->add_section(
		'vmt_stats',
		array(
			'title' => __( 'Számok', 'vmt' ),
			'panel' => 'vmt_panel',
		)
	);

	vmt_add_field( $wp_customize, 'vmt_stat1_value', __( '1. szám', 'vmt' ), 'vmt_stats', '1038' );
	vmt_add_field( $wp_customize, 'vmt_stat1_label', __( '1. szám felirata', 'vmt' ), 'vmt_stats', 'elkészített videó' );
	vmt_add_field( $wp_customize, 'vmt_stat2_value', __( '2. szám', 'vmt' ), 'vmt_stats', '2595' );
	vmt_add_field( $wp_customize, 'vmt_stat2_label', __( '2. szám felirata', 'vmt' ), 'vmt_stats', 'statikus tartalom' );
	vmt_add_field( $wp_customize, 'vmt_stat3_value', __( '3. szám', 'vmt' ), 'vmt_stats', '26' );
	vmt_add_field( $wp_customize, 'vmt_stat3_label', __( '3. szám felirata', 'vmt' ), 'vmt_stats', 'együttműködő vállalkozás' );

	/* ---------- Partnerek ---------- */
	$wp_customize->add_section(
		'vmt_partners',
		array(
			'title'       => __( 'Partnerek', 'vmt' ),
			'description' => __( 'Soronként egy cégnév.', 'vmt' ),
			'panel'       => 'vmt_panel',
		)
	);

	vmt_add_field(
		$wp_customize,
		'vmt_partners_list',
		__( 'Partnerek listája', 'vmt' ),
		'vmt_partners',
		"MANUPACKAGING\nM.PETROL\nSASLAK VENDÉGHÁZ\nREHAU\nCSIPKELAK VENDÉGHÁZ\nRDS INGATLAN\nIRODESIGNCSEMPE\nAERECO\nSZATMÁRI\nEAST MILK",
		'textarea',
		'sanitize_textarea_field'
	);

	/* ---------- Videók ---------- */
	$wp_customize->add_section(
		'vmt_reels',
		array(
			'title'       => __( 'Videós munkák (Instagram reel linkek)', 'vmt' ),
			'description' => __( 'Soronként egy reel: link | cím | ügyfél', 'vmt' ),
			'panel'       => 'vmt_panel',
		)
	);

	vmt_add_field(
		$wp_customize,
		'vmt_reels_list',
		__( 'Reel lista', 'vmt' ),
		'vmt_reels',
		"https://www.instagram.com/reel/DZMvfoUgmyS/ | Gyártósori márkafilm | Ipari partner\nhttps://www.instagram.com/reel/Db8ptrXtgQT/ | Éjszakai imázsvideó | Üzemanyag\nhttps://www.instagram.com/reel/DXhdA42jMEs/ | Vendégház bemutató | Turizmus\nhttps://www.instagram.com/reel/DcUA-0_obbj/ | Showroom reels | Belsőépítészet\nhttps://www.instagram.com/reel/DafoAQIjbYu/ | Ingatlan tartalom | Ingatlan\nhttps://www.instagram.com/reel/DYbmGKCokft/ | Műhely storytelling | Gyártás",
		'textarea',
		'sanitize_textarea_field'
	);

	/* ---------- Vélemények ---------- */
	$wp_customize->add_section(
		'vmt_reviews',
		array(
			'title'       => __( 'Vélemények', 'vmt' ),
			'description' => __( 'Soronként egy vélemény: név | cég | csillagok (1-5) | szöveg', 'vmt' ),
			'panel'       => 'vmt_panel',
		)
	);

	vmt_add_field(
		$wp_customize,
		'vmt_reviews_list',
		__( 'Vélemények listája', 'vmt' ),
		'vmt_reviews',
		"Minta Ügyfél | Gyártó cég | 5 | Ide kerül a valós Google értékelés szövege.\nMinta Ügyfél | Vendéglátás | 5 | Ide kerül a valós Google értékelés szövege.\nMinta Ügyfél | Ingatlan | 5 | Ide kerül a valós Google értékelés szövege.\nMinta Ügyfél | Kereskedelem | 5 | Ide kerül a valós Google értékelés szövege.",
		'textarea',
		'sanitize_textarea_field'
	);

	/* ---------- Színek ---------- */
	$wp_customize->add_setting(
		'vmt_brand_color',
		array(
			'default'           => '#2f5fb0',
			'sanitize_callback' => 'sanitize_hex_color',
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'vmt_brand_color',
			array(
				'label'   => __( 'Márkaszín', 'vmt' ),
				'section' => 'colors',
			)
		)
	);

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->get_setting( 'blogname' )->transport = 'postMessage';
	}
}
add_action( 'customize_register', 'vmt_customize_register' );

/**
 * A testreszabóban választott márkaszín érvényesítése.
 */
function vmt_customizer_css() {
	$brand = get_theme_mod( 'vmt_brand_color', '#2f5fb0' );

	if ( ! $brand || '#2f5fb0' === $brand ) {
		return;
	}

	printf(
		'<style id="vmt-customizer-css">:root{--brand:%1$s;--brand-hover:%1$s;}</style>',
		esc_attr( $brand )
	);
}
add_action( 'wp_head', 'vmt_customizer_css' );
