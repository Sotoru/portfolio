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


export type Progetto = { nome: string; contesto?: string; testo: string; stack?: string };
export type Voce = { quando?: string; cosa: string; dove?: string; testo?: string; progetti?: Progetto[] };
export type Certificazione = { nome: string; ente: string; mese: string };
export type Titolo = { nome: string; autore: string; copertina: ImageMetadata };
export type Sezione = { titolo: string; voci: Voce[]; certificazioni?: Record<string, Certificazione[]>; titoli?: Titolo[]; quadrate?: boolean };

export const carriera: Sezione[] = [
  {
    titolo: "Lavoro",
    voci: [
      // shortcut: ruolo, date e progetti segnaposto finché Paolo non li fornisce; LinkedIn pubblico mostra solo l'azienda.
      {
        quando: "Anno — oggi",
        cosa: "Ruolo",
        dove: "IBM Client Innovation Center Italy",
        progetti: [
          { nome: "Nome progetto", contesto: "Settore o cliente", testo: "Cosa hai costruito e quale problema risolveva.", stack: "Stack" },
          { nome: "Nome progetto", contesto: "Settore o cliente", testo: "Cosa hai costruito e quale problema risolveva.", stack: "Stack" },
        ],
      },
    ],
  },
  {
    titolo: "Studio",
    voci: [
      { quando: "2020", cosa: "Links Academy Java-Spring-Angular", dove: "Links Management and Technology", testo: "Corso in presenza." },
      { quando: "2016 — 2021", cosa: "Università degli Studi di Bari" },
    ],
  },
  {
    titolo: "Certificazioni",
    voci: [],
    // Raggruppate per anno, dal più recente; l'ordine delle chiavi è quello di inserimento.
    certificazioni: {
      "2026": [
        { nome: "Claude Certified Associate — Foundations", ente: "Anthropic", mese: "ago" },
        { nome: "Generative & Agentic AI Foundation", ente: "IBM", mese: "lug" },
        { nome: "Government Insights and Solutions (Bronze)", ente: "IBM", mese: "mar" },
      ],
      "2025": [
        { nome: "Azure Fundamentals", ente: "Microsoft", mese: "ott" },
        { nome: "Government Industry Jumpstart", ente: "IBM", mese: "feb" },
      ],
      "2024": [{ nome: "watsonx.ai Technical Essentials", ente: "IBM", mese: "nov" }],
      "2022": [{ nome: "Membership Certificate", ente: "Interaction Design Foundation", mese: "gen" }],
      "2021": [{ nome: "iOS Design Essentials", ente: "Apple", mese: "set" }],
      "2020": [{ nome: "Enterprise Design Thinking Practitioner", ente: "IBM", mese: "dic" }],
    },
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
    voci: [{ cosa: "Design" }, { cosa: "Domotica" }],
  },
];
