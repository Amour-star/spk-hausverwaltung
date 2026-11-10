import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Upload, AlertCircle, Building2, Calendar } from 'lucide-react';
import { COMPANY_DETAILS, getOfficeStatus } from '../data/company';

interface ContactSectionProps {
  initialInquiryType?: string;
  selectedPropertyTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialInquiryType = 'allgemein',
  selectedPropertyTitle,
}) => {
  const [inquiryType, setInquiryType] = useState<string>(initialInquiryType);
  const [propertyTitle, setPropertyTitle] = useState<string>(selectedPropertyTitle || '');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
    hasPets: 'no',
    employmentStatus: 'angestellt',
    urgency: 'normal',
    privacyAccepted: false,
  });

  const [fileName, setFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    id: string;
    timestamp: string;
    name: string;
    type: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (initialInquiryType) {
      setInquiryType(initialInquiryType);
    }
    if (selectedPropertyTitle) {
      setPropertyTitle(selectedPropertyTitle);
      if (initialInquiryType !== 'besichtigung') {
        setInquiryType('besichtigung');
      }
    }
  }, [initialInquiryType, selectedPropertyTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Bitte geben Sie Ihren vollständigen Namen an.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Bitte geben Sie eine Rückruf-Telefonnummer an.');
      return;
    }
    if (!formData.privacyAccepted) {
      setErrorMsg('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic server processing
    setTimeout(() => {
      const ticketNum = `SPK-${Math.floor(100000 + Math.random() * 900000)}`;
      const nowStr = new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

      setSubmittedTicket({
        id: ticketNum,
        timestamp: nowStr,
        name: formData.fullName,
        type:
          inquiryType === 'besichtigung'
            ? 'Besichtigungsanfrage'
            : inquiryType === 'eigentuemer'
            ? 'Verwaltungsangebot'
            : inquiryType === 'schaden'
            ? 'Schadensmeldung'
            : 'Allgemeine Anfrage',
      });
      setIsSubmitting(false);
    }, 700);
  };

  const officeStatus = getOfficeStatus();

  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Direkter Kontakt
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Kontaktieren Sie die SPK-Hausverwaltung
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Ob Mietinteressent, Wohnungseigentümer oder Mieteranliegen – wir bearbeiten Ihre Nachricht während unserer Bürozeiten umgehend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct details & contact card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-6">
              <h3 className="text-base font-bold text-slate-900">
                Kontaktdaten & Zentrale Schwerte
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">SPK-Hausverwaltung GmbH</strong>
                    <span>{COMPANY_DETAILS.address.street}</span>
                    <br />
                    <span>{COMPANY_DETAILS.address.zip} {COMPANY_DETAILS.address.city}</span>
                    <span className="block text-xs text-slate-500 mt-1">
                      (Direkt am Bahnhof Schwerte / NRW)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Telefonische Zentrale</strong>
                    <a
                      href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                      className="text-slate-900 font-bold hover:underline text-base tabular-nums"
                    >
                      {COMPANY_DETAILS.contact.phone}
                    </a>
                    <span className="block text-xs text-slate-500">
                      Montag bis Donnerstag: 8:30–17:00 Uhr · Freitag: 8:30–14:00 Uhr
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">E-Mail</strong>
                    <a
                      href={`mailto:${COMPANY_DETAILS.contact.email}`}
                      className="text-slate-700 hover:text-slate-900 hover:underline"
                    >
                      {COMPANY_DETAILS.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Live status banner */}
              <div className="p-3.5 rounded-lg bg-white border border-slate-200 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      officeStatus.isOpen ? 'bg-emerald-500' : 'bg-slate-400'
                    }`}
                  />
                  <span className="font-semibold text-slate-900">{officeStatus.statusText}</span>
                </div>
                <span className="text-slate-500">{officeStatus.nextStatusText}</span>
              </div>
            </div>

            {/* Emergency Info for Tenants */}
            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50 text-xs text-amber-900 space-y-2">
              <strong className="block font-bold uppercase tracking-wider text-amber-950">
                24/7 Notfalldienst für Mieter
              </strong>
              <p className="leading-relaxed">
                Bei dringenden Notfällen außerhalb der Geschäftszeiten (z. B. Rohrbruch, totaler Heizungsausfall bei Minusgraden) wählen Sie bitte unsere Notfall-Durchwahl:{' '}
                <strong className="font-bold">{COMPANY_DETAILS.contact.emergencyPhone}</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Responsive Contact Form */}
          <div className="lg:col-span-7">
            {submittedTicket ? (
              <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-5 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    Vielen Dank, {submittedTicket.name}!
                  </h3>
                  <p className="text-sm text-slate-600">
                    Ihre {submittedTicket.type} wurde erfolgreich an das Team der SPK-Hausverwaltung GmbH übermittelt.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white border border-slate-200 text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Vorgangsnummer:</span>
                    <span className="font-bold font-mono text-slate-900">{submittedTicket.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Eingangszeit:</span>
                    <span className="text-slate-700">{submittedTicket.timestamp} Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Zuständigkeit:</span>
                    <span className="text-slate-700">Geschäftsleitung / Vermietungsteam</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500">
                  Wir prüfen Ihre Unterlagen und melden uns telefonisch oder per E-Mail innerhalb unserer Bürozeiten bei Ihnen.
                </p>

                <button
                  onClick={() => {
                    setSubmittedTicket(null);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      preferredDate: '',
                      message: '',
                      hasPets: 'no',
                      employmentStatus: 'angestellt',
                      urgency: 'normal',
                      privacyAccepted: false,
                    });
                    setFileName('');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  Weitere Nachricht verfassen
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-5"
              >
                {/* Purpose Selector (Segmented buttons) */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                    Anlass Ihrer Kontaktaufnahme
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { key: 'besichtigung', label: 'Besichtigung' },
                      { key: 'eigentuemer', label: 'Eigentümer' },
                      { key: 'schaden', label: 'Schadensmeldung' },
                      { key: 'allgemein', label: 'Allgemein' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.key}
                        onClick={() => setInquiryType(item.key)}
                        className={`py-2 px-2.5 text-xs font-medium rounded-md transition-colors text-center cursor-pointer ${
                          inquiryType === item.key
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* If property was selected, show reference */}
                {inquiryType === 'besichtigung' && (
                  <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                    <label className="text-xs font-medium text-slate-700 block">
                      Betreffendes Mietobjekt:
                    </label>
                    <input
                      type="text"
                      value={propertyTitle}
                      onChange={(e) => setPropertyTitle(e.target.value)}
                      placeholder="z.B. 3-Zimmer-Wohnung Postplatz 4, Schwerte"
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                )}

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      Vor- und Nachname *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="z.B. Sabine Müller"
                      className="w-full text-xs bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      Telefonnummer (für Rückruf) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="z.B. 0171 1234567"
                      className="w-full text-xs bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@beispiel.de"
                      className="w-full text-xs bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      {inquiryType === 'besichtigung'
                        ? 'Wunschtermin / Zeitfenster'
                        : inquiryType === 'eigentuemer'
                        ? 'Objektadresse / Einheiten'
                        : 'Gewünschte Rückrufzeit'}
                    </label>
                    <input
                      type="text"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      placeholder={
                        inquiryType === 'besichtigung'
                          ? 'z.B. Wochentags ab 15 Uhr'
                          : inquiryType === 'eigentuemer'
                          ? 'z.B. 8 Wohneinheiten in Schwerte'
                          : 'z.B. Vormittags'
                      }
                      className="w-full text-xs bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Ihre Nachricht / Details zum Anliegen
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      inquiryType === 'besichtigung'
                        ? 'Teilen Sie uns gerne kurz mit, wie viele Personen einziehen möchten und ab wann Sie suchen...'
                        : inquiryType === 'schaden'
                        ? 'Bitte beschreiben Sie den Mangel möglichst genau (Ort, Art des Schadens)...'
                        : 'Wie können wir Ihnen behilflich sein?'
                    }
                    className="w-full text-xs bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                {/* File attachment simulation (e.g. Selbstauskunft or damage photo) */}
                <div className="p-3 bg-white rounded-lg border border-dashed border-slate-300 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Upload className="w-4 h-4 text-slate-400" />
                      <span>
                        {fileName ? (
                          <strong className="text-slate-900">{fileName}</strong>
                        ) : (
                          'Dateianhang (Selbstauskunft, Foto, PDF – optional)'
                        )}
                      </span>
                    </div>
                    <label className="px-2.5 py-1 text-[11px] font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded cursor-pointer transition-colors">
                      Datei wählen
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFileName(e.target.files[0].name);
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>

                {/* Error message */}
                {errorMsg && (
                  <div className="p-3 rounded-md bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Privacy checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy-check"
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="mt-0.5 rounded text-slate-900 focus:ring-slate-900"
                  />
                  <label htmlFor="privacy-check" className="text-xs text-slate-600 leading-tight">
                    Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage durch die SPK-Hausverwaltung GmbH verarbeitet werden. (Widerruf jederzeit möglich).
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Wird übertragen...' : 'Nachricht jetzt sicher absenden'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
