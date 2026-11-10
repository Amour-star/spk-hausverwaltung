import React, { useState } from 'react';
import { Phone, Menu, X, Clock, MapPin, Building2 } from 'lucide-react';
import { COMPANY_DETAILS, getOfficeStatus } from '../data/company';

interface NavbarProps {
  onOpenContact: (type?: string, propertyTitle?: string) => void;
  onOpenPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenPortal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getOfficeStatus();

  return (
    <>
      {/* Top subtle utility strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_DETAILS.address.street}, {COMPANY_DETAILS.address.zip} {COMPANY_DETAILS.address.city}</span>
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mo–Do: 8:30–17:00 · Fr: 8:30–14:00 Uhr</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPortal}
              className="text-xs text-slate-300 hover:text-white transition-colors underline-offset-2 hover:underline cursor-pointer"
            >
              Mieter- & Eigentümer-Service
            </button>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
              className="font-medium text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{COMPANY_DETAILS.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering to Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark in single element */}
          <a href="#" className="flex items-center gap-2.5 text-slate-900 group shrink-0">
            <div className="w-9 h-9 rounded bg-slate-900 text-white flex items-center justify-center font-bold tracking-tight text-sm shadow-sm group-hover:bg-slate-800 transition-colors">
              SPK
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap">
                SPK-Hausverwaltung
              </span>
              <span className="text-[11px] tracking-wider text-slate-500 uppercase font-medium">
                GmbH · Schwerte
              </span>
            </div>
          </a>

          {/* Zone 2: 5 single-line clean navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#angebote"
              className="hover:text-slate-900 transition-colors whitespace-nowrap py-1"
            >
              Mietangebote
            </a>
            <a
              href="#leistungen"
              className="hover:text-slate-900 transition-colors whitespace-nowrap py-1"
            >
              Leistungen
            </a>
            <a
              href="#geschaeftsfuehrung"
              className="hover:text-slate-900 transition-colors whitespace-nowrap py-1"
            >
              Geschäftsführung
            </a>
            <a
              href="#oeffnungszeiten"
              className="hover:text-slate-900 transition-colors whitespace-nowrap py-1"
            >
              Öffnungszeiten & Anfahrt
            </a>
            <a
              href="#kontakt"
              className="hover:text-slate-900 transition-colors whitespace-nowrap py-1"
            >
              Kontakt
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenContact('besichtigung')}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap shadow-sm cursor-pointer"
            >
              Besichtigung anfragen
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
              aria-label="Navigation öffnen"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
              <a
                href="#angebote"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Mietangebote
              </a>
              <a
                href="#leistungen"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Leistungen
              </a>
              <a
                href="#geschaeftsfuehrung"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Geschäftsführung (Hüseyin Zafer)
              </a>
              <a
                href="#oeffnungszeiten"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Öffnungszeiten & Anfahrt
              </a>
              <a
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Kontakt & Schadensmeldung
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('besichtigung');
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors text-center"
              >
                Besichtigung vereinbaren
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 px-4 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direkt anrufen: {COMPANY_DETAILS.contact.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
