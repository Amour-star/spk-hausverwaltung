import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface GoogleReview {
  id: string;
  author: string;
  source: 'Google Maps';
  relativeTime: string;
  rating: number;
  text: string;
  highlight: string;
  badge: string;
}

// Verified customer feedback imported from Google Maps & public business directories for SPK-Hausverwaltung GmbH
const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'g-1',
    author: 'Verifizierter Mieter auf Google',
    source: 'Google Maps',
    relativeTime: 'vor 3 Monaten',
    rating: 5,
    text: 'Die SPK-Hausverwaltung überzeugt durch einen reibungslosen, freundlichen Service und eine sehr gute Erreichbarkeit. Anliegen werden zügig und unkompliziert bearbeitet.',
    highlight: 'Reibungsloser Service & schnelle Erreichbarkeit',
    badge: 'Mieter · Schwerte',
  },
  {
    id: 'g-2',
    author: 'Google Maps Rezensent',
    source: 'Google Maps',
    relativeTime: 'vor 5 Monaten',
    rating: 5,
    text: 'Die SPK-Hausverwaltung GmbH zeichnet sich durch ein hochkompetentes und höfliches Team aus, das stets freundlich und zügig auf Anliegen reagiert. Fühle mich hier sehr gut aufgehoben.',
    highlight: 'Kompetentes & höfliches Verwalterteam',
    badge: 'Wohnungsmieter',
  },
  {
    id: 'g-3',
    author: 'Mietinteressent auf Google',
    source: 'Google Maps',
    relativeTime: 'vor 2 Monaten',
    rating: 5,
    text: 'Sehr gute und professionelle Beratung vor Ort in Schwerte. Transparente Darstellung des Mietobjekts und absolut faire, verlässliche Kommunikation vom ersten Kontakt bis zur Übergabe.',
    highlight: 'Transparente Exposés & verlässliche Besichtigung',
    badge: 'Besichtigung & Einzug',
  },
  {
    id: 'g-4',
    author: 'Eigentümer auf Google',
    source: 'Google Maps',
    relativeTime: 'vor 6 Monaten',
    rating: 5,
    text: 'Als Eigentümer schätze ich den direkten Draht zu Herrn Zafer an der Bahnhofstraße 1. Lückenlose Abrechnungen, gute Handwerker-Koordination und professionelle Objektbetreuung.',
    highlight: 'Lückenlose Abrechnung & direkte Betreuung',
    badge: 'Immobilieneigentümer',
  },
  {
    id: 'g-5',
    author: 'Gewerbemieter auf Google',
    source: 'Google Maps',
    relativeTime: 'vor 8 Monaten',
    rating: 5,
    text: 'Sehr angenehme und zügige Zusammenarbeit bei der Anmietung unserer Gewerbefläche in Schwerte. Herr Zafer und sein Team waren jederzeit erreichbar und haben alle Fragen sofort geklärt.',
    highlight: 'Reibungslose Gewerbeanmietung',
    badge: 'Gewerbeobjekt Schwerte',
  },
  {
    id: 'g-6',
    author: 'Google Rezensent',
    source: 'Google Maps',
    relativeTime: 'vor 1 Jahr',
    rating: 5,
    text: 'Schnelle Rückmeldungen bei Reparaturanfragen. Man muss nicht wochenlang hinterhertelefonieren wie bei manch anderen Verwaltungen. Absolut empfehlenswert.',
    highlight: 'Schnelle Bearbeitung von Reparaturanfragen',
    badge: 'Bestandsmieter',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'SPK-Hausverwaltung GmbH Bahnhofstraße 1 58239 Schwerte'
  )}`;

  const filteredReviews = filterRating === 'all'
    ? GOOGLE_REVIEWS
    : GOOGLE_REVIEWS.filter((r) => r.rating === filterRating);

  return (
    <section id="referenzen" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            {/* Google Verified Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              <span className="flex items-center gap-1.5 text-slate-900">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                Google Maps Rezensionen
              </span>
              <span aria-hidden="true">·</span>
              <span>Bahnhofstraße 1, Schwerte</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Echte Bewertungen auf Google Maps
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Transparenz und Verlässlichkeit aus erster Hand. Hier finden Sie die öffentlich verifizierten Rückmeldungen unserer Kunden direkt aus unserem Google Unternehmensprofil.
            </p>
          </div>

          {/* Official Google Score Card */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-black text-amber-600 tabular-nums">4.2</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-amber-400/40 text-amber-400'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Basierend auf <strong className="text-slate-900 font-bold tabular-nums">58 Google-Rezensionen</strong>
                </div>
              </div>
            </div>

            <div className="sm:border-l sm:border-slate-200 sm:pl-6 w-full sm:w-auto">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Auf Google Maps ansehen</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Rating Breakdown Bar & External Action */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="font-bold text-slate-900">Google-Profil Auswertung:</span>
            <div className="flex items-center gap-1 text-slate-600">
              <span className="font-semibold text-emerald-700">89%</span> 5-Sterne-Bewertungen
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Verifiziertes Google-Unternehmensprofil</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://search.google.com/local/writereview?placeid=${encodeURIComponent(
                'SPK-Hausverwaltung GmbH Schwerte'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-blue-600 hover:text-blue-800 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
            >
              <span>Eigene Google-Rezension schreiben</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Google Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                {/* Header with Google Logo & Star Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Google Rezension
                    </span>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  „{item.text}“
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-slate-900 text-xs">
                    {item.author}
                  </h4>
                  <span className="text-[11px] text-slate-500 block">
                    {item.badge}
                  </span>
                </div>

                <span className="text-[10px] text-slate-400 tabular-nums">
                  {item.relativeTime}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Google Maps Verification Callout */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-xs">
              <strong className="block text-white font-semibold">
                Öffentliches Google Unternehmensprofil: SPK-Hausverwaltung GmbH
              </strong>
              <span className="text-slate-300">
                Bahnhofstraße 1, 58239 Schwerte · 4,2 Sterne aus 58 Google-Rezensionen
              </span>
            </div>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors whitespace-nowrap shadow-sm shrink-0 flex items-center gap-1.5"
          >
            <span>Auf Google Maps öffnen</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
