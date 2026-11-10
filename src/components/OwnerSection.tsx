import React from 'react';
import { Mail, Phone, ExternalLink, Award, CheckCircle2, ShieldCheck, Building } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface OwnerSectionProps {
  onOpenContact: (type?: string) => void;
}

export const OwnerSection: React.FC<OwnerSectionProps> = ({ onOpenContact }) => {
  const { owner, address, contact } = COMPANY_DETAILS;

  return (
    <section id="geschaeftsfuehrung" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section kicker & title */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Persönlich · Kompetent · Verlässlich
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Geschäftsführung & Inhaber
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Direkte Ansprechpartner statt anonymer Zentralen. Lernen Sie den Gründer und Geschäftsführer der SPK-Hausverwaltung GmbH kennen.
          </p>
        </div>

        {/* Main 2-column spotlight grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1: Professional Portrait of Hüseyin Zafer with office backdrop */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer frame styling */}
              <div className="relative rounded-xl overflow-hidden bg-slate-100 shadow-md border border-slate-200">
                <img
                  src={owner.image}
                  alt={`Hüseyin Zafer, Geschäftsführer der SPK-Hausverwaltung GmbH`}
                  className="w-full h-auto object-cover object-top aspect-[3/4]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback container
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Subtle bottom gradient label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white">{owner.name}</h3>
                      <p className="text-xs text-slate-300 font-medium">{owner.role}</p>
                    </div>
                    <a
                      href={owner.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
                      title="LinkedIn Profil öffnen"
                    >
                      <span className="font-bold text-[11px]">in</span>
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Office badge */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
                <span>Standort: {address.street}, {address.city}</span>
                <span className="font-medium text-slate-700">SPK-Hausverwaltung GmbH</span>
              </div>
            </div>
          </div>

          {/* Column 2: Philosophy, Credentials & Commitment */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-2 border-slate-900 pl-4 py-1">
              <blockquote className="text-lg sm:text-xl font-medium text-slate-900 italic leading-snug">
                {owner.quote}
              </blockquote>
              <cite className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mt-2 not-italic">
                — Hüseyin Zafer, Geschäftsführer
              </cite>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {owner.bio}
            </p>

            {/* Core credentials list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                      Zertifizierter Verwalter
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Prüfung nach § 26a Wohnungseigentumsgesetz (WEG) erfolgreich nachgewiesen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                      18+ Jahre Praxiserfahrung
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Fundierte Markt- & Mietrechtsexpertise in Schwerte, Dortmund und Unna.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key commitments */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unser Versprechen an Eigentümer und Mieter:
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Feste Erreichbarkeit:</strong> Direkter Draht zu Entscheidungsträgern während der Bürozeiten</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Finanzielle Transparenz:</strong> Lückenlose, nachvollziehbare Abrechnungen und Sonderkontenführung</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Technisches Netzwerk:</strong> Erprobte regionale Meister-Handwerker mit 24/7 Notdienst-Rufbereitschaft</span>
                </li>
              </ul>
            </div>

            {/* Direct contact CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContact('eigentuemer')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
              >
                Persönliches Gespräch mit Herrn Zafer vereinbaren
              </button>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="px-4 py-2.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>{contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
