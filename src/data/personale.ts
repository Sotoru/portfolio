// Contenuti delle finestre Carriera ed Extra. Studio e certificazioni vengono dal profilo LinkedIn pubblico (novembre 2026).
// Copertine: locandine e box art da Wikipedia, copertine degli album da Deezer e Apple Music.
import theWitcher3 from "../assets/extra/the-witcher-3.jpg";
import deathStranding from "../assets/extra/death-stranding.jpg";
import metalGearSolid3 from "../assets/extra/metal-gear-solid-3.jpg";
import finalFantasyXvi from "../assets/extra/final-fantasy-xvi.png";
import halo3 from "../assets/extra/halo-3.jpg";
import silentHill2 from "../assets/extra/silent-hill-2.jpg";
import devilMayCry3 from "../assets/extra/devil-may-cry-3.jpg";
import expedition33 from "../assets/extra/expedition-33.webp";
import theBlackParade from "../assets/extra/the-black-parade.jpg";
import aBeautifulLie from "../assets/extra/a-beautiful-lie.jpg";
import lUnicoCompromesso from "../assets/extra/l-unico-compromesso.jpg";
import drive from "../assets/extra/drive.jpg";
import ilGladiatore from "../assets/extra/il-gladiatore.png";
import interstellar from "../assets/extra/interstellar.jpg";
import breakingBad from "../assets/extra/breaking-bad.jpg";
import theBatman from "../assets/extra/the-batman.jpg";
import blow from "../assets/extra/blow.jpg";
import bladeRunner2049 from "../assets/extra/blade-runner-2049.png";
import estranei from "../assets/extra/estranei.jpg";
import minutesToMidnight from "../assets/extra/minutes-to-midnight.jpg";
import goodbyeLullaby from "../assets/extra/goodbye-lullaby.jpg";


export type Collegamento = { nome: string; href: string };
export type Piattaforma = "web" | "mobile";
/** Voce di una timeline di Carriera. da/a: anni di inizio e fine; senza "a" dura un anno. */
export type VoceTimeline = {
  da: number;
  a?: number;
  mese?: string;
  nome: string;
  contesto?: string;
  piattaforme?: Piattaforma[];
  testo?: string;
  stack?: string;
  link?: Collegamento[];
};
/** icona: nome Phosphor (es. "ph:barbell"). */
export type Voce = { cosa: string; icona: string };
export type Titolo = { nome: string; autore: string; copertina: ImageMetadata };
export type Sezione = { titolo: string; voci: Voce[]; timeline?: VoceTimeline[]; anniVuoti?: boolean; titoli?: Titolo[]; quadrate?: boolean };

export const carriera: Sezione[] = [
  {
    titolo: "Lavoro",
    anniVuoti: true,
    // shortcut: testi in bozza scritti dalle pagine pubbliche dei servizi; Paolo li rivede. Stack solo dove indicato da lui.
    voci: [],
    // Dal più recente: l'ordine dell'array è quello mostrato.
    timeline: [
      { da: 2026, nome: "Cruscotto del Giudice", contesto: "PA Governance", piattaforme: ["web"], testo: "Cruscotto per il lavoro quotidiano dei magistrati." },
      {
        da: 2025,
        nome: "ANA · Anagrafe Nazionale Assistiti",
        contesto: "PA Governance",
        piattaforme: ["web"],
        testo: "La base dati unica degli assistiti del Servizio Sanitario Nazionale: iscrizione, medico, esenzioni e libretto sanitario, per cittadini e operatori delle ASL.",
        stack: "React",
        link: [{ nome: "anagrafesanitaria.gov.it", href: "https://www.anagrafesanitaria.gov.it/" }],
      },
      {
        da: 2024,
        a: 2025,
        nome: "OTELLO · Vat Refund",
        contesto: "PA Governance",
        piattaforme: ["web", "mobile"],
        testo: "Il tax free digitale dell'Agenzia delle Dogane: chi vive fuori dall'UE vede le proprie fatture, chiede il visto doganale e lo ottiene all'uscita con un QR code.",
        stack: "React · React Native",
        link: [
          { nome: "Web app", href: "https://vatrefund.adm.gov.it/" },
          { nome: "App Store", href: "https://apps.apple.com/it/app/vat-refund/id6739423105" },
          { nome: "Google Play", href: "https://play.google.com/store/apps/details?id=it.gov.adm.vatrefund" },
        ],
      },
      {
        da: 2023,
        a: 2024,
        nome: "Fascicolo Sanitario Elettronico · Monitoraggio",
        contesto: "PA Governance",
        piattaforme: ["web"],
        testo: "Gli indicatori pubblici sull'uso del Fascicolo Sanitario Elettronico da parte di cittadini, medici e aziende sanitarie, regione per regione.",
        link: [{ nome: "I numeri del Fascicolo", href: "https://monitopen.fse.salute.gov.it/usage" }],
      },
      {
        da: 2021,
        a: 2023,
        nome: "Gioco Legale",
        contesto: "PA Governance",
        piattaforme: ["mobile"],
        testo: "L'app dell'Agenzia delle Dogane e dei Monopoli contro il gioco illegale: verifica delle giocate, autoesclusione dal gioco a distanza, segnalazioni e Lotteria degli scontrini.",
        link: [
          { nome: "App Store", href: "https://apps.apple.com/it/app/gioco-legale/id1582792360" },
          { nome: "Google Play", href: "https://play.google.com/store/apps/details?id=it.gov.agenziadoganemonopoli.giocosicuro" },
        ],
      },
      {
        da: 2021,
        nome: "Tracciamento Tabacchi",
        contesto: "PA Governance",
        piattaforme: ["mobile"],
        testo: "Il sistema europeo di tracciamento dei prodotti del tabacco: ogni confezione ha un identificativo univoco seguito lungo tutta la filiera, contro contrabbando e vendita illecita. App per uso interno, non pubblicata negli store.",
        link: [{ nome: "Portale SETT", href: "https://www.adm.gov.it/portale/portale-sett" }],
      },
      {
        da: 2020,
        nome: "Carige Mobile",
        contesto: "BMT Bank",
        piattaforme: ["mobile"],
        testo: "L'app di Banca Carige per conti, carte, bonifici, pagamenti e trading dallo smartphone.",
        stack: "Ionic · Angular",
      },
      { da: 2020, nome: "Dashboard web", contesto: "BMT Bank", piattaforme: ["web"], testo: "Dashboard web per Banca Carige.", stack: "Angular" },
    ],
  },
  {
    titolo: "Studio",
    voci: [],
    timeline: [
      { da: 2020, nome: "Links Academy Java-Spring-Angular", contesto: "Links Management and Technology", testo: "Corso in presenza." },
      { da: 2016, a: 2021, nome: "Università degli Studi di Bari" },
    ],
  },
  {
    titolo: "Certificazioni",
    voci: [],
    timeline: [
      { da: 2026, mese: "ago", nome: "Claude Certified Associate — Foundations", contesto: "Anthropic" },
      { da: 2026, mese: "lug", nome: "Generative & Agentic AI Foundation", contesto: "IBM" },
      { da: 2026, mese: "mar", nome: "Government Insights and Solutions (Bronze)", contesto: "IBM" },
      { da: 2025, mese: "ott", nome: "Azure Fundamentals", contesto: "Microsoft" },
      { da: 2025, mese: "feb", nome: "Government Industry Jumpstart", contesto: "IBM" },
      { da: 2024, mese: "nov", nome: "watsonx.ai Technical Essentials", contesto: "IBM" },
      { da: 2022, mese: "gen", nome: "Membership Certificate", contesto: "Interaction Design Foundation" },
      { da: 2021, mese: "set", nome: "iOS Design Essentials", contesto: "Apple" },
      { da: 2020, mese: "dic", nome: "Enterprise Design Thinking Practitioner", contesto: "IBM" },
    ],
  },
];

export const extra: Sezione[] = [
  {
    titolo: "Musica",
    voci: [],
    quadrate: true,
    titoli: [
      { nome: "The Black Parade", autore: "My Chemical Romance", copertina: theBlackParade },
      { nome: "A Beautiful Lie", autore: "Thirty Seconds to Mars", copertina: aBeautifulLie },
      { nome: "L'unico compromesso", autore: "Gemitaiz", copertina: lUnicoCompromesso },
      { nome: "Minutes to Midnight", autore: "Linkin Park", copertina: minutesToMidnight },
      { nome: "Goodbye Lullaby", autore: "Avril Lavigne", copertina: goodbyeLullaby },
    ],
  },
  {
    titolo: "Film e serie TV",
    voci: [],
    titoli: [
      { nome: "Drive", autore: "Nicolas Winding Refn", copertina: drive },
      { nome: "Il gladiatore", autore: "Ridley Scott", copertina: ilGladiatore },
      { nome: "Interstellar", autore: "Christopher Nolan", copertina: interstellar },
      { nome: "Breaking Bad", autore: "Vince Gilligan", copertina: breakingBad },
      { nome: "The Batman", autore: "Matt Reeves", copertina: theBatman },
      { nome: "Blow", autore: "Ted Demme", copertina: blow },
      { nome: "Blade Runner 2049", autore: "Denis Villeneuve", copertina: bladeRunner2049 },
      { nome: "Estranei", autore: "Andrew Haigh", copertina: estranei },
    ],
  },
  {
    titolo: "Videogiochi",
    voci: [],
    titoli: [
      { nome: "Death Stranding", autore: "Kojima Productions", copertina: deathStranding },
      { nome: "Halo 3", autore: "Bungie", copertina: halo3 },
      { nome: "Metal Gear Solid 3: Snake Eater", autore: "Konami", copertina: metalGearSolid3 },
      { nome: "Silent Hill 2", autore: "Konami", copertina: silentHill2 },
      { nome: "The Witcher 3: Wild Hunt", autore: "CD Projekt Red", copertina: theWitcher3 },
      { nome: "Final Fantasy XVI", autore: "Square Enix", copertina: finalFantasyXvi },
      { nome: "Devil May Cry 3: Dante's Awakening", autore: "Capcom", copertina: devilMayCry3 },
      { nome: "Clair Obscur: Expedition 33", autore: "Sandfall Interactive", copertina: expedition33 },
    ],
  },
  {
    titolo: "Altri interessi",
    voci: [
      { cosa: "Design", icona: "ph:pen-nib" },
      { cosa: "Domotica", icona: "ph:house-line" },
      { cosa: "Nutrizione", icona: "ph:carrot" },
      { cosa: "Palestra", icona: "ph:barbell" },
    ],
  },
];
