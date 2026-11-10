import React from 'react';
import { Building2, ShieldCheck, PhoneCall, ChevronRight, MapPin, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import heroImage from '../assets/images/hero_realestate_schwerte_1794310019376.jpg';

interface HeroProps {
  onOpenContact: (type?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Moderne Wohnimmobilien in Schwerte betreut von SPK-Hausverwaltung"
          className="w-full h-full object-cover object-center brightness-75 filter"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Graceful fallback gradient container
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28">
        <div className="max-w-2xl space-y-6">
          {/* Natural human kicker with location marker */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
            <MapPin className="w-4 h-4" />
            <span>Bahnhofstraße 1 · 58239 Schwerte</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-tight">
            Ihre Werte in besten Händen. Hausverwaltung & Vermietung in Schwerte.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-pretty">
            Als inhabergeführtes Immobilienunternehmen unter Leitung von Geschäftsführer Hüseyin Zafer garantieren wir nachhaltigen Werterhalt, rechtssichere WEG- & Mietverwaltung sowie erstklassige Mietwohnungen und Gewerbeflächen im Kreis Unna und Ruhrgebiet.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#angebote"
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-md transition-colors text-center shadow-lg whitespace-nowrap"
            >
              Mietangebote entdecken
            </a>
            <button
              onClick={() => onOpenContact('eigentuemer')}
              className="px-6 py-3.5 text-sm font-medium text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-md transition-colors text-center cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Verwaltungsangebot anfordern</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Quick contact direct access */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Telefon: <strong className="text-white font-medium">{COMPANY_DETAILS.contact.phone}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Zertifizierter Verwalter (§ 26a WEG)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quantitative Rigor Strip below Hero (§1.H & §2.A) */}
      <div className="relative z-10 border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COMPANY_DETAILS.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
