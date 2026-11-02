// Contenuti delle finestre Carriera ed Extra. Studio e certificazioni vengono dal profilo LinkedIn pubblico (novembre 2026).

export type Progetto = { nome: string; contesto?: string; testo: string; stack?: string };
export type Voce = { quando?: string; cosa: string; dove?: string; testo?: string; progetti?: Progetto[] };
export type Certificazione = { nome: string; ente: string; mese: string };
export type Sezione = { titolo: string; voci: Voce[]; certificazioni?: Record<string, Certificazione[]> };

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

// shortcut: testi segnaposto per il layout, non contenuti reali; vanno sostituiti con quelli forniti da Paolo.
export const extra: Sezione[] = [
  {
    titolo: "Fuori dal codice",
    voci: [
      { cosa: "Interesse", testo: "Una o due righe su una passione." },
      { cosa: "Ispirazione", testo: "Un libro, una persona o un luogo che ti ha formato." },
      { cosa: "Da raccontare", testo: "Qualcosa che non entra in un curriculum." },
    ],
  },
];
