/**
 * Egyetlen szerkesztési pont a weboldal tartalmához.
 * Itt cserélhetők a partnerek, videók, statikus képek, vélemények és elérhetőségek.
 */

import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";
import reel5 from "@/assets/reel-5.jpg";
import reel6 from "@/assets/reel-6.jpg";
import static1 from "@/assets/static-1.jpg";
import static2 from "@/assets/static-2.jpg";
import static3 from "@/assets/static-3.jpg";
import static4 from "@/assets/static-4.jpg";
import static5 from "@/assets/static-5.jpg";
import static6 from "@/assets/static-6.jpg";
import bence from "@/assets/bence.jpg.asset.json";
import soma from "@/assets/soma.jpg.asset.json";

export const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0eEeT2UiiWG73-nuSoL1cbqsuFqhs6hjx_tBKL6Eej1l4Kc0mJSKeGWjl7PUq6wokaJX1xoap4";

export const NAV_LINKS = [
  { label: "Szolgáltatás", href: "#szolgaltatas" },
  { label: "Munkáink", href: "#munkaink" },
  { label: "Folyamat", href: "#folyamat" },
  { label: "Rólunk", href: "#rolunk" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

/** Később a `logo` mezőbe tehető egy importált logókép URL-je a név helyett. */
export type Client = { name: string; logo?: string };

export const CLIENTS: Client[] = [
  { name: "MANUPACKAGING" },
  { name: "M.PETROL" },
  { name: "SASLAK VENDÉGHÁZ" },
  { name: "REHAU" },
  { name: "CSIPKELAK VENDÉGHÁZ" },
  { name: "RDS INGATLAN" },
  { name: "IRODESIGNCSEMPE" },
  { name: "AERECO" },
  { name: "SZATMÁRI" },
  { name: "EAST MILK" },
];

export type Reel = {
  url: string;
  cover: string;
  title: string;
  client: string;
};

/** Instagram reel hivatkozások – új elem hozzáadásához elég egy sor. */
export const REELS_ROW_1: Reel[] = [
  {
    url: "https://www.instagram.com/reel/DZMvfoUgmyS/",
    cover: reel1,
    title: "Gyártósori márkafilm",
    client: "Ipari partner",
  },
  {
    url: "https://www.instagram.com/reel/Db8ptrXtgQT/",
    cover: reel2,
    title: "Éjszakai imázsvideó",
    client: "Üzemanyag",
  },
  {
    url: "https://www.instagram.com/reel/DXhdA42jMEs/",
    cover: reel3,
    title: "Vendégház bemutató",
    client: "Turizmus",
  },
];

export const REELS_ROW_2: Reel[] = [
  {
    url: "https://www.instagram.com/reel/DcUA-0_obbj/",
    cover: reel4,
    title: "Showroom reels",
    client: "Belsőépítészet",
  },
  {
    url: "https://www.instagram.com/reel/DafoAQIjbYu/",
    cover: reel5,
    title: "Ingatlan tartalom",
    client: "Ingatlan",
  },
  {
    url: "https://www.instagram.com/reel/DYbmGKCokft/",
    cover: reel6,
    title: "Műhely storytelling",
    client: "Gyártás",
  },
];

export type StaticWork = {
  src: string;
  alt: string;
  label: string;
  /** grid arány: portrait | square | landscape */
  format: "portrait" | "square" | "landscape";
};

/** Ideiglenes, AI-val készült minták – egyesével cserélhetők valós munkákra. */
export const STATIC_WORKS: StaticWork[] = [
  {
    src: static1,
    alt: "Csomagolástechnikai termékfotó",
    label: "Termékfotó",
    format: "portrait",
  },
  {
    src: static2,
    alt: "Kampánykreatív grafika",
    label: "Kampánykreatív",
    format: "square",
  },
  {
    src: static3,
    alt: "Vendégház belső tér fotó",
    label: "Enteriőr",
    format: "landscape",
  },
  {
    src: static4,
    alt: "Portré egy műhelyben",
    label: "Brand portré",
    format: "portrait",
  },
  { src: static5, alt: "Tejtermék flat lay", label: "Food", format: "square" },
  {
    src: static6,
    alt: "Ingatlan külső fotó alkonyatkor",
    label: "Ingatlan",
    format: "landscape",
  },
];

export type Review = {
  name: string;
  company?: string;
  rating: number;
  text: string;
};

/**
 * PLACEHOLDER vélemények – illusztráció, nem valós Google értékelések.
 * Cseréld le a tömb elemeit a valós Google véleményekre.
 */
export const REVIEWS: Review[] = [
  {
    name: "Minta Ügyfél",
    company: "Gyártó cég",
    rating: 5,
    text: "Ide kerül a valós Google értékelés szövege. A kártya szerkezete változatlan marad, csak a tartalom cserélődik.",
  },
  {
    name: "Minta Ügyfél",
    company: "Vendéglátás",
    rating: 5,
    text: "Ide kerül a valós Google értékelés szövege. Név, cégnév, csillagok és szöveg – minden egy helyen szerkeszthető.",
  },
  {
    name: "Minta Ügyfél",
    company: "Ingatlan",
    rating: 5,
    text: "Ide kerül a valós Google értékelés szövege. Az elrendezés tetszőleges számú véleményt kezel.",
  },
  {
    name: "Minta Ügyfél",
    company: "Kereskedelem",
    rating: 5,
    text: "Ide kerül a valós Google értékelés szövege. A karusszel automatikusan görgeti a kártyákat.",
  },
  {
    name: "Minta Ügyfél",
    company: "Szolgáltatás",
    rating: 5,
    text: "Ide kerül a valós Google értékelés szövege. Hover hatásra a mozgás megáll.",
  },
];

export const TEAM = [
  {
    name: "Vörös Bence",
    role: "Videós & fotós tartalomkészítő",
    photo: bence.url,
    bio: "Videózás, fotózás, operatőri munka és vágás – a kreatív tartalom teljes vizuális megvalósítását én viszem.",
    skills: ["Operatőr", "Vágás", "Fotó", "Színkezelés", "Forgatásvezetés"],
    phone: "06 30 368 0732",
    phoneHref: "tel:+36303680732",
  },
  {
    name: "Büi Soma",
    role: "Marketinges & Social Media Manager",
    photo: soma.url,
    bio: "A tartalmak mögötti stratégiával, social media menedzsmenttel és marketinggel foglalkozom, hogy az elkészült tartalmak ne csak jól nézzenek ki, hanem céljuk is legyen.",
    skills: ["Stratégia", "Social media", "Kampányok", "Copy", "Riportok"],
    phone: "06 30 989 1315",
    phoneHref: "tel:+36309891315",
  },
];

export const CONTACT = {
  email: "vmt.info@gmail.com",
};

/** Cseréld le a valós profilok linkjeire. */
export const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
];
