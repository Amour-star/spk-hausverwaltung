import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
  onOpenContact: (type?: string) => void;
  onOpenPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenContact, onOpenPortal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded bg-white text-slate-900 flex items-center justify-center font-bold text-xs">
                SPK
              </div>
              <span className="font-bold text-base tracking-tight text-white">
                SPK-Hausverwaltung GmbH
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Zertifizierte Haus- und Mietverwaltung im Kreis Unna, Dortmund und dem Ruhrgebiet. Persönlich geführt durch Geschäftsführer Hüseyin Zafer mit Sitz an der Bahnhofstraße 1 in Schwerte.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_DETAILS.owner.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded text-xs transition-colors border border-slate-800"
              >
                <span className="font-bold text-[11px] text-blue-400">in</span>
                <span>Hüseyin Zafer auf LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Mirror */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#angebote" className="hover:text-white transition-colors">
                  Mietobjekte Schwerte
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-white transition-colors">
                  WEG- & Mietverwaltung
                </a>
              </li>
              <li>
                <a href="#geschaeftsfuehrung" className="hover:text-white transition-colors">
                  Geschäftsführung (Hüseyin Zafer)
                </a>
              </li>
              <li>
                <a href="#oeffnungszeiten" className="hover:text-white transition-colors">
                  Öffnungszeiten & Anfahrt
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPortal}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Mieter- & Eigentümer-Service
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Zentrale Schwerte
            </h4>
            <div className="space-y-2 text-xs">
              <p>
                {COMPANY_DETAILS.address.street}
                <br />
                {COMPANY_DETAILS.address.zip} {COMPANY_DETAILS.address.city}
              </p>
              <p>
                Tel:{' '}
                <a
                  href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                  className="text-white hover:underline tabular-nums font-medium"
                >
                  {COMPANY_DETAILS.contact.phone}
                </a>
              </p>
              <p>
                E-Mail:{' '}
                <a
                  href={`mailto:${COMPANY_DETAILS.contact.email}`}
                  className="text-slate-300 hover:underline"
                >
                  {COMPANY_DETAILS.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Hours summary & emergency */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Bürozeiten
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p>Mo–Do: 08:30 – 17:00 Uhr</p>
              <p>Freitag: 08:30 – 14:00 Uhr</p>
              <p className="text-slate-500">Sa & So: Geschlossen</p>
              <div className="pt-2 border-t border-slate-900">
                <span className="text-[11px] block text-amber-400 font-medium">
                  24/7 Havariedienst aktiv
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SPK-Hausverwaltung GmbH. Alle Rechte vorbehalten.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
            <a
              href="#top"
              className="hover:text-slate-300 transition-colors"
            >
              Nach oben ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
