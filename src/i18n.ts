// Lingue del sito: l'italiano è su "/", le altre su "/<codice>/".
export const lingue = ["it", "en", "es", "fr", "de"] as const;
export type Lingua = (typeof lingue)[number];
export const lingueEstere = lingue.filter((l) => l !== "it");
export const nomiLingue: Record<Lingua, string> = { it: "Italiano", en: "English", es: "Español", fr: "Français", de: "Deutsch" };

/** Testo uguale in tutte le lingue (stringa) o tradotto in ognuna. */
export type Testo = string | Record<Lingua, string>;
export const tr = (t: Testo, l: Lingua) => (typeof t === "string" ? t : t[l]);

/** Indirizzo di una pagina in una lingua; `pagina` è il resto del percorso, es. "pedagogicpoint/". */
export const indirizzo = (l: Lingua, pagina = "") => (l === "it" ? "/" : `/${l}/`) + pagina;

const ui = {
  homeTitolo: { it: "Paolo Laddomada · Portfolio", en: "Paolo Laddomada · Portfolio", es: "Paolo Laddomada · Portafolio", fr: "Paolo Laddomada · Portfolio", de: "Paolo Laddomada · Portfolio" },
  homeDescrizione: {
    it: "Portfolio di Paolo Laddomada, Front End Developer.",
    en: "Portfolio of Paolo Laddomada, Front End Developer.",
    es: "Portafolio de Paolo Laddomada, Front End Developer.",
    fr: "Portfolio de Paolo Laddomada, développeur front-end.",
    de: "Portfolio von Paolo Laddomada, Front-End-Entwickler.",
  },
  tema: { it: "Tema", en: "Theme", es: "Tema", fr: "Thème", de: "Darstellung" },
  temaChiaro: { it: "Tema chiaro", en: "Light theme", es: "Tema claro", fr: "Thème clair", de: "Helles Design" },
  temaSistema: { it: "Tema di sistema", en: "System theme", es: "Tema del sistema", fr: "Thème du système", de: "Systemdesign" },
  temaScuro: { it: "Tema scuro", en: "Dark theme", es: "Tema oscuro", fr: "Thème sombre", de: "Dunkles Design" },
  copiata: { it: "Copiata", en: "Copied", es: "Copiado", fr: "Copié", de: "Kopiert" },
  nuovaScheda: {
    it: "(si apre in una nuova scheda)",
    en: "(opens in a new tab)",
    es: "(se abre en una pestaña nueva)",
    fr: "(s’ouvre dans un nouvel onglet)",
    de: "(öffnet in neuem Tab)",
  },
  codice: { it: "Codice di questo progetto", en: "Source code of this project", es: "Código de este proyecto", fr: "Code de ce projet", de: "Code dieses Projekts" },
  suGithub: { it: "su GitHub", en: "on GitHub", es: "en GitHub", fr: "sur GitHub", de: "auf GitHub" },
  lingua: { it: "Lingua", en: "Language", es: "Idioma", fr: "Langue", de: "Sprache" },
  carriera: { it: "Carriera.", en: "Career.", es: "Carrera.", fr: "Carrière.", de: "Laufbahn." },
  carrieraSopra: { it: "Percorso", en: "Journey", es: "Trayectoria", fr: "Parcours", de: "Werdegang" },
  carrieraSotto: {
    it: "Esperienze, studio e certificazioni.",
    en: "Experience, education and certifications.",
    es: "Experiencia, formación y certificaciones.",
    fr: "Expérience, études et certifications.",
    de: "Erfahrung, Ausbildung und Zertifizierungen.",
  },
  extra: { it: "Fuori dal codice.", en: "Beyond the code.", es: "Más allá del código.", fr: "Au-delà du code.", de: "Abseits des Codes." },
  extraSopra: { it: "Extra", en: "Extra", es: "Extra", fr: "Extra", de: "Extra" },
  extraSotto: {
    it: "Musica, film, videogiochi e altri interessi.",
    en: "Music, films, video games and other interests.",
    es: "Música, películas, videojuegos y otros intereses.",
    fr: "Musique, films, jeux vidéo et autres centres d’intérêt.",
    de: "Musik, Filme, Videospiele und weitere Interessen.",
  },
  chiudi: { it: "Chiudi", en: "Close", es: "Cerrar", fr: "Fermer", de: "Schließen" },
  tornaIndietro: { it: "Torna indietro", en: "Go back", es: "Volver", fr: "Retour", de: "Zurück" },
  navigazione: { it: "Navigazione", en: "Navigation", es: "Navegación", fr: "Navigation", de: "Navigation" },
  vaiAlSito: { it: "Vai al sito", en: "Visit site", es: "Ir al sitio", fr: "Voir le site", de: "Zur Website" },
  sezioniProgetto: { it: "Sezioni del progetto", en: "Project sections", es: "Secciones del proyecto", fr: "Sections du projet", de: "Projektabschnitte" },
  panoramica: { it: "Panoramica", en: "Overview", es: "Resumen", fr: "Aperçu", de: "Überblick" },
  interfaccia: { it: "Interfaccia", en: "Interface", es: "Interfaz", fr: "Interface", de: "Oberfläche" },
  linguaggio: { it: "Linguaggio", en: "Language", es: "Lenguaje", fr: "Langage", de: "Designsprache" },
  componenti: { it: "Componenti", en: "Components", es: "Componentes", fr: "Composants", de: "Komponenten" },
  titoloInterfaccia: {
    it: "L’interfaccia, da vicino.",
    en: "The interface, up close.",
    es: "La interfaz, de cerca.",
    fr: "L’interface, de près.",
    de: "Die Oberfläche aus der Nähe.",
  },
  titoloLinguaggio: {
    it: "Il linguaggio del progetto.",
    en: "The project’s design language.",
    es: "El lenguaje del proyecto.",
    fr: "Le langage du projet.",
    de: "Die Designsprache des Projekts.",
  },
  titoloComponenti: { it: "Dalla pagina alla story.", en: "From page to story.", es: "De la página a la story.", fr: "De la page à la story.", de: "Von der Seite zur Story." },
  introComponenti: {
    it: "Scegli un componente e provalo: sono le story vere di Storybook.",
    en: "Pick a component and try it: these are the real Storybook stories.",
    es: "Elige un componente y pruébalo: son las stories reales de Storybook.",
    fr: "Choisissez un composant et essayez-le : ce sont les vraies stories Storybook.",
    de: "Wähle eine Komponente und probiere sie aus: Das sind die echten Storybook-Stories.",
  },
  prossimo: { it: "Prossimo progetto", en: "Next project", es: "Siguiente proyecto", fr: "Projet suivant", de: "Nächstes Projekt" },
  tipografia: { it: "Tipografia", en: "Typography", es: "Tipografía", fr: "Typographie", de: "Typografie" },
  palette: { it: "Palette", en: "Palette", es: "Paleta", fr: "Palette", de: "Palette" },
  tipografiaSb: {
    it: "Tipografia in Storybook",
    en: "Typography in Storybook",
    es: "Tipografía en Storybook",
    fr: "Typographie dans Storybook",
    de: "Typografie in Storybook",
  },
  coloriSb: { it: "Colori in Storybook", en: "Colors in Storybook", es: "Colores en Storybook", fr: "Couleurs dans Storybook", de: "Farben in Storybook" },
  caricamento: { it: "Caricamento…", en: "Loading…", es: "Cargando…", fr: "Chargement…", de: "Wird geladen…" },
  sbInArrivo: {
    it: "Storybook in arrivo: le story saranno provabili qui.",
    en: "Storybook coming soon: you’ll be able to try the stories here.",
    es: "Storybook muy pronto: aquí podrás probar las stories.",
    fr: "Storybook bientôt disponible : vous pourrez tester les stories ici.",
    de: "Storybook folgt bald: Hier kannst du dann die Stories ausprobieren.",
  },
  interagisci: {
    it: "Interagisci con il componente o aprilo in Storybook.",
    en: "Interact with the component or open it in Storybook.",
    es: "Interactúa con el componente o ábrelo en Storybook.",
    fr: "Interagissez avec le composant ou ouvrez-le dans Storybook.",
    de: "Interagiere mit der Komponente oder öffne sie in Storybook.",
  },
  anteprimaNo: {
    it: "Anteprima non ancora disponibile.",
    en: "Preview not available yet.",
    es: "Vista previa aún no disponible.",
    fr: "Aperçu pas encore disponible.",
    de: "Vorschau noch nicht verfügbar.",
  },
  apriStory: { it: "Apri la story", en: "Open the story", es: "Abrir la story", fr: "Ouvrir la story", de: "Story öffnen" },
  e: { it: "e", en: "and", es: "y", fr: "et", de: "und" },
  carosello: { it: "carosello", en: "carousel", es: "carrusel", fr: "carrousel", de: "Karussell" },
  precedenti: { it: "precedenti", en: "previous", es: "anteriores", fr: "précédents", de: "vorherige" },
  successivi: { it: "successivi", en: "next", es: "siguientes", fr: "suivants", de: "nächste" },
  titoli: { it: "titoli", en: "titles", es: "títulos", fr: "titres", de: "Titel" },
  copertinaDi: { it: "Copertina di", en: "Cover of", es: "Portada de", fr: "Couverture de", de: "Cover von" },
  anni: { it: "{n} anni", en: "{n} years", es: "{n} años", fr: "{n} ans", de: "{n} Jahre" },
  tecnologie: { it: "Tecnologie", en: "Technologies", es: "Tecnologías", fr: "Technologies", de: "Technologien" },
  web: { it: "Web", en: "Web", es: "Web", fr: "Web", de: "Web" },
  mobile: { it: "Mobile", en: "Mobile", es: "Móvil", fr: "Mobile", de: "Mobil" },
} satisfies Record<string, Record<Lingua, string>>;

// Parole che ruotano nell'etichetta in home: la prima è il titolo vero, tutte iniziano con la stessa lettera.
export const parole: Record<Lingua, string[]> = {
  it: ["Portfolio", "Progetti", "Paolo", "Prototipi", "Percorso"],
  en: ["Portfolio", "Projects", "Paolo", "Prototypes", "Path"],
  es: ["Portafolio", "Proyectos", "Paolo", "Prototipos", "Perfil"],
  fr: ["Portfolio", "Projets", "Paolo", "Prototypes", "Parcours"],
  de: ["Portfolio", "Projekte", "Paolo", "Prototypen", "Profil"],
};

/** Lingua della pagina (dal parametro di percorso) e funzione per i testi dell'interfaccia. */
export function i18n(params: Record<string, string | undefined>) {
  const l = (lingue.includes(params.lang as Lingua) ? params.lang : "it") as Lingua;
  return { l, t: (chiave: keyof typeof ui) => ui[chiave][l] };
}
