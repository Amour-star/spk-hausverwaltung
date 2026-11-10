export interface BusinessHour {
  day: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  openTime: string; // "08:30"
  closeTime: string; // "17:00"
  isOpen: boolean;
  displayHours: string;
}

export const COMPANY_DETAILS = {
  name: 'SPK-Hausverwaltung GmbH',
  shortName: 'SPK Hausverwaltung',
  owner: {
    name: 'Hüseyin Zafer',
    role: 'Geschäftsführer & Gründer',
    title: 'Zertifizierter Verwalter nach § 26a WEG & Immobilienfachwirt',
    experienceYears: 18,
    linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=H%C3%BCseyin%20Zafer%20SPK-Hausverwaltung',
    bio: 'Als Gründer und geschäftsführender Gesellschafter der SPK-Hausverwaltung GmbH steht Hüseyin Zafer für nachhaltigen Werterhalt, persönliche Betreuung und transparente Immobilienbewirtschaftung im Kreis Unna, Dortmund und dem Ruhrgebiet.',
    quote: '„Eine Immobilie ist mehr als Stein und Mörtel – sie ist ein wertvolles Lebens- und Anlagegut. Wir verwalten jedes Objekt so sorgfältig und vorausschauend, als wäre es unser eigenes.“',
    image: '/src/assets/images/huseyin_zafer_original.jpg',
  },
  address: {
    street: 'Bahnhofstraße 1',
    zip: '58239',
    city: 'Schwerte',
    state: 'Nordrhein-Westfalen',
    country: 'Deutschland',
    directionsHint: 'Zentral gelegen direkt am Bahnhof Schwerte (Ruhr) – barrierefreier Zugang, Kundenparkplätze im Hof.',
    googleMapsUrl: 'https://maps.google.com/?q=Bahnhofstra%C3%9Fe+1,+58239+Schwerte',
  },
  contact: {
    phone: '02304 9111853',
    phoneFormatted: '+49 2304 9111853',
    email: 'info@spk-hausverwaltung.de',
    emergencyPhone: '02304 9111853-99', // 24/7 Havariedienst für Notfälle
    fax: '02304 9111854',
  },
  hours: [
    { day: 'Montag', dayIndex: 1, openTime: '08:30', closeTime: '17:00', isOpen: true, displayHours: '08:30 – 17:00 Uhr' },
    { day: 'Dienstag', dayIndex: 2, openTime: '08:30', closeTime: '17:00', isOpen: true, displayHours: '08:30 – 17:00 Uhr' },
    { day: 'Mittwoch', dayIndex: 3, openTime: '08:30', closeTime: '17:00', isOpen: true, displayHours: '08:30 – 17:00 Uhr' },
    { day: 'Donnerstag', dayIndex: 4, openTime: '08:30', closeTime: '17:00', isOpen: true, displayHours: '08:30 – 17:00 Uhr' },
    { day: 'Freitag', dayIndex: 5, openTime: '08:30', closeTime: '14:00', isOpen: true, displayHours: '08:30 – 14:00 Uhr' },
    { day: 'Samstag', dayIndex: 6, openTime: '', closeTime: '', isOpen: false, displayHours: 'Geschlossen' },
    { day: 'Sonntag', dayIndex: 0, openTime: '', closeTime: '', isOpen: false, displayHours: 'Geschlossen' },
  ],
  stats: [
    { label: 'Verwaltete Einheiten', value: '1.450+' },
    { label: 'Jahre Marktpräsenz', value: '18+' },
    { label: 'Zufriedene Eigentümer', value: '98,4%' },
    { label: 'Reaktionszeit Notdienst', value: '< 45 Min.' },
  ],
};

/**
 * Returns whether the office is currently open based on current German time
 */
export function getOfficeStatus(): {
  isOpen: boolean;
  statusText: string;
  nextStatusText: string;
  todaySchedule: string;
} {
  // Current time in Germany
  const now = new Date();
  const germanTimeStr = now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' });
  const germanDate = new Date(germanTimeStr);
  
  const currentDay = germanDate.getDay(); // 0 is Sunday
  const currentHours = germanDate.getHours();
  const currentMinutes = germanDate.getMinutes();
  const currentTimeVal = currentHours * 60 + currentMinutes;

  const todaySchedule = COMPANY_DETAILS.hours.find((h) => h.dayIndex === currentDay);

  if (!todaySchedule || !todaySchedule.isOpen) {
    return {
      isOpen: false,
      statusText: 'Heute geschlossen',
      nextStatusText: 'Geöffnet wieder Montag ab 08:30 Uhr',
      todaySchedule: 'Heute geschlossen',
    };
  }

  const [openH, openM] = todaySchedule.openTime.split(':').map(Number);
  const [closeH, closeM] = todaySchedule.closeTime.split(':').map(Number);
  const openVal = openH * 60 + openM;
  const closeVal = closeH * 60 + closeM;

  if (currentTimeVal >= openVal && currentTimeVal < closeVal) {
    return {
      isOpen: true,
      statusText: 'Jetzt geöffnet',
      nextStatusText: `Geöffnet bis ${todaySchedule.closeTime} Uhr`,
      todaySchedule: todaySchedule.displayHours,
    };
  } else if (currentTimeVal < openVal) {
    return {
      isOpen: false,
      statusText: 'Öffnet in Kürze',
      nextStatusText: `Öffnet heute um ${todaySchedule.openTime} Uhr`,
      todaySchedule: todaySchedule.displayHours,
    };
  } else {
    // Already closed today
    const nextDayIndex = (currentDay + 1) % 7;
    const nextDaySchedule = COMPANY_DETAILS.hours.find((h) => h.dayIndex === nextDayIndex);
    const nextText = nextDaySchedule && nextDaySchedule.isOpen
      ? `Öffnet morgen um ${nextDaySchedule.openTime} Uhr`
      : 'Öffnet wieder Montag um 08:30 Uhr';

    return {
      isOpen: false,
      statusText: 'Derzeit geschlossen',
      nextStatusText: nextText,
      todaySchedule: todaySchedule.displayHours,
    };
  }
}
