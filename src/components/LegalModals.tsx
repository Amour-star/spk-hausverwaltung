import React from 'react';
import { X, Shield } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200"
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

        <div className="p-6 sm:p-8 space-y-6 text-slate-700 text-xs sm:text-sm">
          {type === 'impressum' ? (
            <>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Gesetzliche Anbieterkennzeichnung (§ 5 TMG / § 55 RStV)
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Impressum</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <strong className="block text-slate-900 font-semibold">{COMPANY_DETAILS.name}</strong>
                  <span>{COMPANY_DETAILS.address.street}</span>
                  <br />
                  <span>{COMPANY_DETAILS.address.zip} {COMPANY_DETAILS.address.city}</span>
                  <br />
                  <span>Deutschland</span>
                </div>

                <div>
                  <strong className="block text-slate-900 font-semibold">Vertreten durch die Geschäftsführung:</strong>
                  <span>Hüseyin Zafer (Geschäftsführer)</span>
                </div>

                <div>
                  <strong className="block text-slate-900 font-semibold">Kontakt:</strong>
                  <span>Telefon: {COMPANY_DETAILS.contact.phone}</span>
                  <br />
                  <span>E-Mail: {COMPANY_DETAILS.contact.email}</span>
                  <br />
                  <span>Internet: www.spk-hausverwaltung.de</span>
                </div>

                <div>
                  <strong className="block text-slate-900 font-semibold">Registereintrag:</strong>
                  <span>Eintragung im Handelsregister</span>
                  <br />
                  <span>Registergericht: Amtsgericht Hagen / Iserlohn</span>
                  <br />
                  <span>Registernummer: HRB 11482</span>
                </div>

                <div>
                  <strong className="block text-slate-900 font-semibold">Gewerbeerlaubnis & Aufsichtsbehörde:</strong>
                  <span>Erlaubnis nach § 34c Abs. 1 Satz 1 Nr. 1 und Nr. 4 GewO (Wohnimmobilienverwalter und Immobilienmakler)</span>
                  <br />
                  <span>Zuständige Aufsichtsbehörde: Kreis Unna / Ordnungsamt Schwerte</span>
                  <br />
                  <span>Zertifizierter Verwalter nach § 26a WEG</span>
                </div>

                <div>
                  <strong className="block text-slate-900 font-semibold">Vermögensschaden-Haftpflichtversicherung:</strong>
                  <span>Besteht bei der Allianz Versicherungs-AG mit gesetzlich geforderter Mindestdeckungssumme für Wohnimmobilienverwalter nach § 34c GewO i.V.m. § 15 MaBV.</span>
                </div>

                <div>
                  <strong className="block text-slate-900 font-semibold">Verbraucherstreitbeilegung:</strong>
                  <span>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  DSGVO & Bundesdatenschutzgesetz
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Datenschutzerklärung</h3>
              </div>

              <div className="space-y-4">
                <p>
                  Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen Daten bei der Erhebung, Verarbeitung und Nutzung anlässlich Ihres Besuchs auf unserer Website ist uns ein wichtiges Anliegen.
                </p>

                <div>
                  <strong className="block text-slate-900 font-semibold">1. Verantwortliche Stelle:</strong>
                  <span>{COMPANY_DETAILS.name}</span>
                  <br />
                  <span>{COMPANY_DETAILS.address.street}, {COMPANY_DETAILS.address.zip} {COMPANY_DETAILS.address.city}</span>
                  <br />
                  <span>Geschäftsführer: Hüseyin Zafer</span>
                  <br />
                  <span>E-Mail: {COMPANY_DETAILS.contact.email}</span>
                </div>

                <div>
                  <strong className="block text-slate-900 font-semibold">2. Erhebung von Daten bei Kontaktaufnahme:</strong>
                  <span>
                    Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert (Art. 6 Abs. 1 lit. b DSGVO). Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </span>
                </div>

                <div>
                  <strong className="block text-slate-900 font-semibold">3. Mieterselbstauskunft und Bewerbungsdaten:</strong>
                  <span>
                    Daten im Rahmen von Wohnungsbewerbungen werden ausschließlich für die Anbahnung des Mietverhältnisses verwendet und nach Abschluss des Vergabeverfahrens gemäß den gesetzlichen Fristen gelöscht.
                  </span>
                </div>

                <div>
                  <strong className="block text-slate-900 font-semibold">4. Ihre Rechte:</strong>
                  <span>
                    Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                  </span>
                </div>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-slate-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
