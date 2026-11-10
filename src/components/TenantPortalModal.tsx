import React, { useState } from 'react';
import { X, FileText, Wrench, Shield, Phone, Download, CheckCircle, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface TenantPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDamageReport: () => void;
}

export const TenantPortalModal: React.FC<TenantPortalModalProps> = ({
  isOpen,
  onClose,
  onOpenDamageReport,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState<string>('');

  if (!isOpen) return null;

  const handleDownloadForm = (formName: string) => {
    setDownloadSuccess(formName);
    setTimeout(() => setDownloadSuccess(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Service für Mieter & Eigentümer
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Digitales Service-Portal der SPK-Hausverwaltung
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Wichtige Formulare, Notfallnummern und schnelle Schadensmeldungen für von uns betreute Liegenschaften in Schwerte und Umgebung.
            </p>
          </div>

          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wide">
                <Wrench className="w-4 h-4 text-amber-600" />
                <span>Schaden oder Mangel melden</span>
              </div>
              <p className="text-xs text-slate-600">
                Tropfender Wasserhahn, defektes Treppenhauslicht oder Heizungsproblem? Melden Sie den Schaden direkt mit Beschreibung und Foto.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenDamageReport();
                }}
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer text-center"
              >
                Schadensmeldung starten
              </button>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wide">
                <Phone className="w-4 h-4 text-rose-600" />
                <span>24/7 Havariedienst</span>
              </div>
              <p className="text-xs text-slate-600">
                Nur für akute Notfälle außerhalb der Geschäftszeiten (z. B. unstillbarer Rohrbruch, Gasgeruch, Ausfall Heizungsanlage im Winter).
              </p>
              <a
                href={`tel:${COMPANY_DETAILS.contact.emergencyPhone.replace(/\s+/g, '')}`}
                className="w-full py-2 px-3 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-md transition-colors block text-center"
              >
                Notruf: {COMPANY_DETAILS.contact.emergencyPhone}
              </a>
            </div>
          </div>

          {/* Downloadable Standard Forms */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Formulare & Dokumente zum Download
            </h4>

            <div className="space-y-2 text-xs">
              {[
                { title: 'Mieterselbstauskunft (SPK-Formular)', size: 'PDF · 180 KB' },
                { title: 'SEPA-Lastschriftmandat für Miete & Hausgeld', size: 'PDF · 120 KB' },
                { title: 'Schlüssel-Nachbestellung & Genehmigung', size: 'PDF · 95 KB' },
                { title: 'Wohnungsgeberbestätigung nach § 19 BMG', size: 'PDF · 110 KB' },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-slate-200 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-slate-500 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 block">{doc.title}</span>
                      <span className="text-[11px] text-slate-400">{doc.size}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownloadForm(doc.title)}
                    className="p-1.5 text-slate-600 hover:text-slate-900 rounded hover:bg-slate-200 transition-colors cursor-pointer"
                    title="Formular herunterladen"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {downloadSuccess && (
              <div className="p-3 rounded bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Dokument „{downloadSuccess}“ wurde erfolgreich generiert und heruntergeladen.</span>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
            <span>SPK-Hausverwaltung GmbH · Bahnhofstraße 1 · 58239 Schwerte</span>
            <button
              onClick={onClose}
              className="text-xs font-medium text-slate-800 hover:underline cursor-pointer"
            >
              Fenster schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
