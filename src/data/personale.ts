// Contenuti delle finestre Carriera ed Extra, in tutte le lingue del sito. Studio e certificazioni vengono dal profilo LinkedIn pubblico (novembre 2026).
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


import type { Testo } from "../i18n";

export type Collegamento = { nome: Testo; href: string };
export type Piattaforma = "web" | "mobile";
/** Voce di una timeline di Carriera. da/a: anni di inizio e fine; senza "a" dura un anno. mese: numero 1-12. */
export type VoceTimeline = {
  da: number;
  a?: number;
  mese?: number;
  nome: Testo;
  contesto?: Testo;
  piattaforme?: Piattaforma[];
  testo?: Testo;
  stack?: string;
  link?: Collegamento[];
};
/** icona: nome Phosphor (es. "ph:barbell"). */
export type Voce = { cosa: Testo; icona: string };
export type Titolo = { nome: Testo; autore: string; copertina: ImageMetadata };
export type Sezione = { titolo: Testo; voci: Voce[]; timeline?: VoceTimeline[]; anniVuoti?: boolean; titoli?: Titolo[]; quadrate?: boolean };

const appStore = "App Store";
const googlePlay = "Google Play";

export const carriera: Sezione[] = [
  {
    titolo: { it: "Lavoro", en: "Work", es: "Trabajo", fr: "Travail", de: "Beruf" },
    anniVuoti: true,
    // shortcut: testi in bozza scritti dalle pagine pubbliche dei servizi; Paolo li rivede. Stack solo dove indicato da lui.
    voci: [],
    // Dal più recente: l'ordine dell'array è quello mostrato.
    timeline: [
      {
        da: 2026,
        nome: { it: "Cruscotto del Giudice", en: "Judge’s Dashboard", es: "Panel del Juez", fr: "Tableau de bord du juge", de: "Richter-Dashboard" },
        contesto: "PA Governance",
        piattaforme: ["web"],
        testo: { it: "Cruscotto per il lavoro quotidiano dei magistrati.", en: "A dashboard for judges’ day-to-day work.", es: "Panel para el trabajo diario de los magistrados.", fr: "Tableau de bord pour le travail quotidien des magistrats.", de: "Dashboard für die tägliche Arbeit von Richterinnen und Richtern." },
      },
      {
        da: 2025,
        nome: { it: "ANA · Anagrafe Nazionale Assistiti", en: "ANA · National Patient Registry", es: "ANA · Registro Nacional de Asegurados", fr: "ANA · Registre national des assurés", de: "ANA · Nationales Patientenregister" },
        contesto: "PA Governance",
        piattaforme: ["web"],
        testo: { it: "La base dati unica degli assistiti del Servizio Sanitario Nazionale: iscrizione, medico, esenzioni e libretto sanitario, per cittadini e operatori delle ASL.", en: "The single database of everyone covered by Italy’s National Health Service: enrolment, family doctor, exemptions and health record, for citizens and local health authority staff.", es: "La base de datos única de los asegurados del Servicio Nacional de Salud italiano: alta, médico, exenciones y cartilla sanitaria, para ciudadanos y personal de las ASL.", fr: "La base de données unique des assurés du Service national de santé italien : inscription, médecin, exonérations et carnet de santé, pour les citoyens et les agents des ASL.", de: "Die zentrale Datenbank aller Versicherten des italienischen Gesundheitsdienstes: Anmeldung, Hausarzt, Befreiungen und Gesundheitsheft, für Bürger und Mitarbeitende der ASL." },
        stack: "React",
        link: [{ nome: "anagrafesanitaria.gov.it", href: "https://www.anagrafesanitaria.gov.it/" }],
      },
      {
        da: 2024,
        a: 2025,
        nome: "OTELLO · Vat Refund",
        contesto: "PA Governance",
        piattaforme: ["web", "mobile"],
        testo: { it: "Il tax free digitale dell'Agenzia delle Dogane: chi vive fuori dall'UE vede le proprie fatture, chiede il visto doganale e lo ottiene all'uscita con un QR code.", en: "Italian Customs’ digital tax-free service: non-EU residents see their invoices, request the customs stamp and get it at the exit with a QR code.", es: "El tax free digital de la Agencia de Aduanas italiana: quien vive fuera de la UE ve sus facturas, solicita el visado aduanero y lo obtiene a la salida con un código QR.", fr: "La détaxe numérique des douanes italiennes : les résidents hors UE consultent leurs factures, demandent le visa douanier et l’obtiennent à la sortie avec un QR code.", de: "Das digitale Tax-free-Verfahren des italienischen Zolls: Wer außerhalb der EU lebt, sieht seine Rechnungen, beantragt den Zollstempel und erhält ihn bei der Ausreise per QR-Code." },
        stack: "React · React Native",
        link: [
          { nome: "Web app", href: "https://vatrefund.adm.gov.it/" },
          { nome: appStore, href: "https://apps.apple.com/it/app/vat-refund/id6739423105" },
          { nome: googlePlay, href: "https://play.google.com/store/apps/details?id=it.gov.adm.vatrefund" },
        ],
      },
      {
        da: 2023,
        a: 2024,
        nome: { it: "Fascicolo Sanitario Elettronico · Monitoraggio", en: "Electronic Health Record · Monitoring", es: "Historia Clínica Electrónica · Monitorización", fr: "Dossier médical électronique · Suivi", de: "Elektronische Patientenakte · Monitoring" },
        contesto: "PA Governance",
        piattaforme: ["web"],
        testo: { it: "Gli indicatori pubblici sull'uso del Fascicolo Sanitario Elettronico da parte di cittadini, medici e aziende sanitarie, regione per regione.", en: "Public indicators on how citizens, doctors and health authorities use Italy’s Electronic Health Record, region by region.", es: "Los indicadores públicos sobre el uso de la Historia Clínica Electrónica italiana por parte de ciudadanos, médicos y servicios sanitarios, región por región.", fr: "Les indicateurs publics sur l’usage du dossier médical électronique italien par les citoyens, les médecins et les établissements de santé, région par région.", de: "Öffentliche Kennzahlen zur Nutzung der italienischen elektronischen Patientenakte durch Bürger, Ärzte und Gesundheitseinrichtungen, Region für Region." },
        link: [{ nome: { it: "I numeri del Fascicolo", en: "The record in numbers", es: "Las cifras de la historia", fr: "Les chiffres du dossier", de: "Die Akte in Zahlen" }, href: "https://monitopen.fse.salute.gov.it/usage" }],
      },
      {
        da: 2021,
        a: 2023,
        nome: "Gioco Legale",
        contesto: "PA Governance",
        piattaforme: ["mobile"],
        testo: { it: "L'app dell'Agenzia delle Dogane e dei Monopoli contro il gioco illegale: verifica delle giocate, autoesclusione dal gioco a distanza, segnalazioni e Lotteria degli scontrini.", en: "The Italian Customs and Monopolies Agency’s app against illegal gambling: bet checks, self-exclusion from online gambling, reports and the receipt lottery.", es: "La app de la Agencia de Aduanas y Monopolios italiana contra el juego ilegal: verificación de apuestas, autoexclusión del juego online, denuncias y la lotería de los tiques.", fr: "L’application de l’Agence des douanes et des monopoles italienne contre le jeu illégal : vérification des paris, auto-exclusion du jeu en ligne, signalements et loterie des tickets de caisse.", de: "Die App der italienischen Zoll- und Monopolbehörde gegen illegales Glücksspiel: Prüfung von Wetten, Selbstsperre beim Online-Glücksspiel, Meldungen und Kassenbon-Lotterie." },
        link: [
          { nome: appStore, href: "https://apps.apple.com/it/app/gioco-legale/id1582792360" },
          { nome: googlePlay, href: "https://play.google.com/store/apps/details?id=it.gov.agenziadoganemonopoli.giocosicuro" },
        ],
      },
      {
        da: 2021,
        nome: { it: "Tracciamento Tabacchi", en: "Tobacco Tracking", es: "Trazabilidad del tabaco", fr: "Traçabilité du tabac", de: "Tabak-Rückverfolgung" },
        contesto: "PA Governance",
        piattaforme: ["mobile"],
        testo: { it: "Il sistema europeo di tracciamento dei prodotti del tabacco: ogni confezione ha un identificativo univoco seguito lungo tutta la filiera, contro contrabbando e vendita illecita. App per uso interno, non pubblicata negli store.", en: "The European tobacco tracking system: every pack has a unique identifier followed along the whole supply chain, against smuggling and illicit sales. Internal app, not published on the stores.", es: "El sistema europeo de trazabilidad de los productos del tabaco: cada paquete tiene un identificador único que se sigue a lo largo de toda la cadena, contra el contrabando y la venta ilegal. App de uso interno, no publicada en las tiendas.", fr: "Le système européen de traçabilité des produits du tabac : chaque paquet porte un identifiant unique suivi tout au long de la filière, contre la contrebande et la vente illicite. Application interne, non publiée sur les stores.", de: "Das europäische Rückverfolgungssystem für Tabakprodukte: Jede Packung hat eine eindeutige Kennung, die entlang der gesamten Lieferkette verfolgt wird, gegen Schmuggel und illegalen Verkauf. Interne App, nicht in den Stores veröffentlicht." },
        link: [{ nome: { it: "Portale SETT", en: "SETT portal", es: "Portal SETT", fr: "Portail SETT", de: "SETT-Portal" }, href: "https://www.adm.gov.it/portale/portale-sett" }],
      },
      {
        da: 2020,
        nome: "Carige Mobile",
        contesto: "BMT Bank",
        piattaforme: ["mobile"],
        testo: { it: "L'app di Banca Carige per conti, carte, bonifici, pagamenti e trading dallo smartphone.", en: "Banca Carige’s app for accounts, cards, transfers, payments and trading from your phone.", es: "La app de Banca Carige para cuentas, tarjetas, transferencias, pagos y trading desde el móvil.", fr: "L’application de Banca Carige pour les comptes, cartes, virements, paiements et le trading depuis le smartphone.", de: "Die App der Banca Carige für Konten, Karten, Überweisungen, Zahlungen und Trading vom Smartphone." },
        stack: "Ionic · Angular",
      },
      { da: 2020, nome: { it: "Dashboard web", en: "Web dashboard", es: "Panel web", fr: "Tableau de bord web", de: "Web-Dashboard" }, contesto: "BMT Bank", piattaforme: ["web"], testo: { it: "Dashboard web per Banca Carige.", en: "Web dashboard for Banca Carige.", es: "Panel web para Banca Carige.", fr: "Tableau de bord web pour Banca Carige.", de: "Web-Dashboard für die Banca Carige." }, stack: "Angular" },
    ],
  },
  {
    titolo: { it: "Studio", en: "Education", es: "Formación", fr: "Études", de: "Ausbildung" },
    voci: [],
    timeline: [
      { da: 2020, nome: "Links Academy Java-Spring-Angular", contesto: "Links Management and Technology", testo: { it: "Corso in presenza.", en: "In-person course.", es: "Curso presencial.", fr: "Formation en présentiel.", de: "Präsenzkurs." } },
      { da: 2016, a: 2021, nome: { it: "Università degli Studi di Bari", en: "University of Bari", es: "Universidad de Bari", fr: "Université de Bari", de: "Universität Bari" } },
    ],
  },
  {
    titolo: { it: "Certificazioni", en: "Certifications", es: "Certificaciones", fr: "Certifications", de: "Zertifizierungen" },
    voci: [],
    timeline: [
      { da: 2026, mese: 8, nome: "Claude Certified Associate — Foundations", contesto: "Anthropic" },
      { da: 2026, mese: 7, nome: "Generative & Agentic AI Foundation", contesto: "IBM" },
      { da: 2026, mese: 3, nome: "Government Insights and Solutions (Bronze)", contesto: "IBM" },
      { da: 2025, mese: 10, nome: "Azure Fundamentals", contesto: "Microsoft" },
      { da: 2025, mese: 2, nome: "Government Industry Jumpstart", contesto: "IBM" },
      { da: 2024, mese: 11, nome: "watsonx.ai Technical Essentials", contesto: "IBM" },
      { da: 2022, mese: 1, nome: "Membership Certificate", contesto: "Interaction Design Foundation" },
      { da: 2021, mese: 9, nome: "iOS Design Essentials", contesto: "Apple" },
      { da: 2020, mese: 12, nome: "Enterprise Design Thinking Practitioner", contesto: "IBM" },
    ],
  },
];

// Titoli nella versione distribuita in ciascun paese, dove cambia (fonti: Wikipedia, TMDB, Osservatorio europeo dell'audiovisivo).
export const extra: Sezione[] = [
  {
    titolo: { it: "Musica", en: "Music", es: "Música", fr: "Musique", de: "Musik" },
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
    titolo: { it: "Film e serie TV", en: "Films and TV series", es: "Películas y series", fr: "Films et séries", de: "Filme und Serien" },
    voci: [],
    titoli: [
      { nome: "Drive", autore: "Nicolas Winding Refn", copertina: drive },
      { nome: { it: "Il gladiatore", en: "Gladiator", es: "Gladiator", fr: "Gladiator", de: "Gladiator" }, autore: "Ridley Scott", copertina: ilGladiatore },
      { nome: "Interstellar", autore: "Christopher Nolan", copertina: interstellar },
      { nome: "Breaking Bad", autore: "Vince Gilligan", copertina: breakingBad },
      { nome: "The Batman", autore: "Matt Reeves", copertina: theBatman },
      { nome: "Blow", autore: "Ted Demme", copertina: blow },
      { nome: "Blade Runner 2049", autore: "Denis Villeneuve", copertina: bladeRunner2049 },
      { nome: { it: "Estranei", en: "All of Us Strangers", es: "Desconocidos", fr: "Sans jamais nous connaître", de: "All of Us Strangers" }, autore: "Andrew Haigh", copertina: estranei },
    ],
  },
  {
    titolo: { it: "Videogiochi", en: "Video games", es: "Videojuegos", fr: "Jeux vidéo", de: "Videospiele" },
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
    titolo: { it: "Altri interessi", en: "Other interests", es: "Otros intereses", fr: "Autres centres d’intérêt", de: "Weitere Interessen" },
    voci: [
      { cosa: "Design", icona: "ph:pen-nib" },
      { cosa: { it: "Domotica", en: "Home automation", es: "Domótica", fr: "Domotique", de: "Hausautomation" }, icona: "ph:house-line" },
      { cosa: { it: "Nutrizione", en: "Nutrition", es: "Nutrición", fr: "Nutrition", de: "Ernährung" }, icona: "ph:carrot" },
      { cosa: { it: "Palestra", en: "Gym", es: "Gimnasio", fr: "Musculation", de: "Fitnessstudio" }, icona: "ph:barbell" },
    ],
  },
];
