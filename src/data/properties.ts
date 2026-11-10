export interface Property {
  id: string;
  title: string;
  category: 'apartment' | 'commercial' | 'penthouse' | 'family';
  categoryLabel: string;
  address: string;
  district: string;
  city: string;
  zip: string;
  coldRent: number; // Kaltmiete in €
  utilityCosts: number; // Nebenkosten in €
  heatingCosts: number; // Heizkosten in €
  totalRent: number; // Warmmiete in €
  deposit: number; // Kaution in € (usually 3x Kaltmiete)
  livingSpace: number; // m²
  rooms: number;
  floor: string;
  availableFrom: string;
  constructionYear: number;
  energyClass: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E';
  energyValue: number; // kWh/(m²*a)
  heatingType: string;
  mainImage: string;
  gallery: string[];
  features: string[];
  description: string;
  highlight: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 'spk-miete-101',
    title: 'Lichtdurchflutete 3-Zimmer-Wohnung mit Süd-Balkon',
    category: 'apartment',
    categoryLabel: 'Mietwohnung',
    address: 'Postplatz 4',
    district: 'Schwerte-Mitte',
    city: 'Schwerte',
    zip: '58239',
    coldRent: 790,
    utilityCosts: 180,
    heatingCosts: 110,
    totalRent: 1080,
    deposit: 2370,
    livingSpace: 84.5,
    rooms: 3,
    floor: '2. Obergeschoss (mit Aufzug)',
    availableFrom: '01.06.2026',
    constructionYear: 2021,
    energyClass: 'A',
    energyValue: 42.5,
    heatingType: 'Fernwärme / Fußbodenheizung',
    mainImage: '/src/assets/images/property_modern_apartment_1794310019580.jpg',
    gallery: [
      '/src/assets/images/property_modern_apartment_1794310019580.jpg',
      '/src/assets/images/hero_realestate_schwerte_1794310019376.jpg',
    ],
    features: [
      'Großer Süd-Balkon mit Weitblick',
      'Hochwertiges Eichenparkett in allen Wohnräumen',
      'Moderne Einbauküche (optional übernehmbar)',
      'Tageslichtbad mit bodentiefer Regendusche',
      'Personenaufzug & stufenloser Zugang',
      'Tiefgaragenstellplatz optional (+ € 70,-)',
      'Eigener geräumiger Kellerraum',
      'Glasfaser-Internetanschluss bis in die Wohnung',
    ],
    description: 'Diese exklusive 3-Zimmer-Mietwohnung im Herzen von Schwerte überzeugt durch ihren durchdachten Grundriss, erstklassige Ausstattung und helle, sonnendurchflutete Räume. Vom großzügigen Wohn- und Essbereich gelangen Sie direkt auf den sonnigen Südbalkon. Die Verwaltung und Betreuung erfolgt direkt und zuverlässig durch die SPK-Hausverwaltung GmbH.',
    highlight: 'Erstklassige Innenstadtlage nahe Bahnhofstraße & Marktplatz',
  },
  {
    id: 'spk-gewerbe-201',
    title: 'Repräsentative Gewerbe- & Praxisfläche in zentraler Lauflage',
    category: 'commercial',
    categoryLabel: 'Gewerbe / Praxis',
    address: 'Bahnhofstraße 1',
    district: 'Bahnhofsviertel',
    city: 'Schwerte',
    zip: '58239',
    coldRent: 1450,
    utilityCosts: 320,
    heatingCosts: 190,
    totalRent: 1960,
    deposit: 4350,
    livingSpace: 135.0,
    rooms: 4,
    floor: 'Erdgeschoss (barrierefrei)',
    availableFrom: 'Sofort bezugsfrei',
    constructionYear: 2019,
    energyClass: 'B',
    energyValue: 68.0,
    heatingType: 'Zentralheizung / Wärmepumpe mit Deckenklimatisierung',
    mainImage: '/src/assets/images/property_commercial_office_1794310018939.jpg',
    gallery: [
      '/src/assets/images/property_commercial_office_1794310018939.jpg',
      '/src/assets/images/hero_realestate_schwerte_1794310019376.jpg',
    ],
    features: [
      'Bodentiefe Schaufensterfront zur Bahnhofstraße',
      'Barrierefreier rollstuhlgerechter Kundenzugang',
      'Flexible Raumteilung für Kanzlei, Praxis oder Agentur',
      'Getrennte Damen- und Herren-Sanitäranlagen',
      'Vorbereitete Teeküche / Personalraum',
      'EDV-Verkabelung (CAT 7) & Serverschrank',
      '4 feste Mitarbeiter-Parkplätze direkt am Gebäude',
      'Hohe Werbewirksamkeit & hervorragende ÖPNV-Anbindung',
    ],
    description: 'Direkt an der stark frequentierten Bahnhofstraße 1 in Schwerte gelegen, bietet diese moderne Gewerbeeinheit ideale Bedingungen für freie Berufe, Steuerberater, Notare, Ärzte oder Dienstleister. Hervorragende Sichtbarkeit, modernste Gebäudetechnik und direkter Zugang zum Schwerter Hauptbahnhof.',
    highlight: 'Top-Adresse Bahnhofstraße 1 – Hohe Passantenfrequenz & 2 Min. zum Bahnhof',
  },
  {
    id: 'spk-miete-102',
    title: 'Moderne 2-Zimmer-Neubauwohnung im Parkquartier',
    category: 'apartment',
    categoryLabel: 'Mietwohnung',
    address: 'Ruhrtalweg 18',
    district: 'Schwerte-Ergste',
    city: 'Schwerte',
    zip: '58239',
    coldRent: 620,
    utilityCosts: 140,
    heatingCosts: 85,
    totalRent: 845,
    deposit: 1860,
    livingSpace: 62.0,
    rooms: 2,
    floor: '1. Obergeschoss',
    availableFrom: '01.07.2026',
    constructionYear: 2022,
    energyClass: 'A+',
    energyValue: 28.4,
    heatingType: 'Sole-Wasser-Wärmepumpe mit Solarthermie',
    mainImage: '/src/assets/images/hero_realestate_schwerte_1794310019376.jpg',
    gallery: [
      '/src/assets/images/hero_realestate_schwerte_1794310019376.jpg',
      '/src/assets/images/property_modern_apartment_1794310019580.jpg',
    ],
    features: [
      'Niedrigenergiestandard KfW 40 Plus',
      'Großer überdachter West-Balkon',
      'Elektrische Rollläden an allen Fenstern',
      'Video-Gegensprechanlage & Sicherheitstür',
      'Fahrradkeller mit E-Bike-Ladestationen',
      'PKW-Außenstellplatz inklusive',
      'Ruhige grüne Wohnlage unweit der Ruhrwiesen',
    ],
    description: 'Ideal für Singles oder Paare: Diese moderne 2-Zimmer-Wohnung in Schwerte-Ergste verbindet idyllische Natur am Ruhrufer mit zeitgemäßem Wohnkomfort und extrem niedrigen Energiekosten dank modernster Wärmepumpentechnik.',
    highlight: 'KfW 40 Plus Niedrigenergie – minimale Heiznebenkosten',
  },
  {
    id: 'spk-penthouse-301',
    title: 'Exklusives Penthouse mit 45 m² Dachterrasse & Panoramablick',
    category: 'penthouse',
    categoryLabel: 'Penthouse',
    address: 'Goethestraße 12',
    district: 'Schwerte-Holzen',
    city: 'Schwerte',
    zip: '58239',
    coldRent: 1350,
    utilityCosts: 240,
    heatingCosts: 130,
    totalRent: 1720,
    deposit: 4050,
    livingSpace: 124.0,
    rooms: 4,
    floor: 'Staffelgeschoss / Penthouse (Aufzug direkt in die Wohnung)',
    availableFrom: '01.08.2026',
    constructionYear: 2023,
    energyClass: 'A',
    energyValue: 38.0,
    heatingType: 'Pellet-Heizung & Fußbodenheizung',
    mainImage: '/src/assets/images/property_modern_apartment_1794310019580.jpg',
    gallery: [
      '/src/assets/images/property_modern_apartment_1794310019580.jpg',
      '/src/assets/images/hero_realestate_schwerte_1794310019376.jpg',
    ],
    features: [
      'Schlüsselloser Aufzug direkt in das Wohnungsvoyer',
      'Umlaufende 45 m² Dachterrasse mit Ruhrblick',
      'En-Suite-Masterbad mit freistehender Badewanne',
      'Separates Gäste-Duschbad',
      'Offener Kaminanschluss im Wohnbereich',
      'Zwei Tiefgaragenstellplätze nebeneinander',
      'Exklusive Sanitärobjekte von Markenherstellern',
    ],
    description: 'Höchster Wohnanspruch in begehrter Villenlage von Schwerte-Holzen. Die Penthousewohnung begeistert mit spektakulärem Rundumblick, repräsentativem Wohn-Essbereich und höchster Privatsphäre.',
    highlight: 'Penthouse-Luxus pur mit direktem Penthouse-Aufzug und Ruhrblick',
  },
  {
    id: 'spk-miete-103',
    title: 'Familienfreundliche 4-Zimmer-Gartenwohnung',
    category: 'family',
    categoryLabel: 'Familienwohnung',
    address: 'Wandhofener Straße 34',
    district: 'Schwerte-Wandhofen',
    city: 'Schwerte',
    zip: '58239',
    coldRent: 940,
    utilityCosts: 210,
    heatingCosts: 125,
    totalRent: 1275,
    deposit: 2820,
    livingSpace: 102.5,
    rooms: 4,
    floor: 'Erdgeschoss mit privatem Gartenanteil (ca. 120 m²)',
    availableFrom: '15.06.2026',
    constructionYear: 2020,
    energyClass: 'A',
    energyValue: 45.0,
    heatingType: 'Gas-Brennwert mit Solarunterstützung',
    mainImage: '/src/assets/images/hero_realestate_schwerte_1794310019376.jpg',
    gallery: [
      '/src/assets/images/hero_realestate_schwerte_1794310019376.jpg',
      '/src/assets/images/property_modern_apartment_1794310019580.jpg',
    ],
    features: [
      'Alleiniges Sondernutzungsrecht am sonnigen Garten',
      'Zwei Kinderzimmer bzw. Home-Office Arbeitszimmer',
      'Wohnküche mit Schiebetür zur Gartenterrasse',
      'Gäste-WC & großes Familienbadezimmer',
      'Hauswirtschaftsraum mit Waschmaschinenanschluss',
      'Inklusive Carport & Geräteschuppen',
      'Ruhige Spielstraße / familienfreundliche Nachbarschaft',
    ],
    description: 'Traumhaftes Zuhause für Familien: Große 4-Zimmer-Erdgeschosswohnung mit eigenem eingezäuntem Garten in Schwerte-Wandhofen. Schulen, Kindergärten und Natur sind in wenigen Gehminuten erreichbar.',
    highlight: 'Privater 120 m² Garten & ruhige Spielstraßenlage in Wandhofen',
  },
];
