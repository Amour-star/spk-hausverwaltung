import React from 'react';
import { Clock, MapPin, Phone, Navigation, Train, Car, Check, Calendar } from 'lucide-react';
import { COMPANY_DETAILS, getOfficeStatus } from '../data/company';

export const OpeningHoursLocation: React.FC = () => {
  const status = getOfficeStatus();
  
  // Get current day of week in Germany (0 is Sunday, 1 is Monday...)
  const now = new Date();
  const currentDayIndex = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' })).getDay();

  return (
    <section id="oeffnungszeiten" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Erreichbarkeit & Standort
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Öffnungszeiten & Anfahrt in Schwerte
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Besuchen Sie unsere Geschäftsstelle an der Bahnhofstraße 1 oder erreichen Sie uns telefonisch während der Servicezeiten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Opening Hours Schedule Table */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <Clock className="w-5 h-5 text-slate-700" />
                  <span>Büro- & Telefonzeiten</span>
                </div>
                {/* Live indicator badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium ${
                    status.isOpen
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      status.isOpen ? 'bg-emerald-500' : 'bg-slate-400'
                    }`}
                  />
                  <span>{status.statusText}</span>
                </span>
              </div>

              {/* Weekly schedule */}
              <div className="divide-y divide-slate-100 mt-4 text-xs sm:text-sm">
                {COMPANY_DETAILS.hours.map((schedule) => {
                  const isToday = schedule.dayIndex === currentDayIndex;
                  return (
                    <div
                      key={schedule.day}
                      className={`py-3 flex items-center justify-between transition-colors ${
                        isToday
                          ? 'bg-amber-50/70 font-semibold text-slate-900 px-3 -mx-3 rounded-md'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{schedule.day}</span>
                        {isToday && (
                          <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-100/80 px-1.5 py-0.5 rounded">
                            Heute
                          </span>
                        )}
                      </div>
                      <span className={`tabular-nums ${schedule.isOpen ? 'text-slate-800' : 'text-slate-400 italic'}`}>
                        {schedule.displayHours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Note & Direct phone */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <p className="text-xs text-slate-500 leading-relaxed">
                Persönliche Termine zur Vor-Ort-Besichtigung oder Beiratsberatung sind nach Vereinbarung auch außerhalb der regulären Öffnungszeiten möglich.
              </p>
              <a
                href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-slate-700" />
                <span>Zentrale anrufen: {COMPANY_DETAILS.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Right: Location & Arrival Guide */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <MapPin className="w-5 h-5 text-slate-700" />
                  <span>Standort & Anbindung</span>
                </div>
                <a
                  href={COMPANY_DETAILS.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-slate-700 underline underline-offset-4"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>In Google Maps öffnen</span>
                </a>
              </div>

              {/* Address Box */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1">
                <strong className="block text-slate-900 font-bold text-base">
                  {COMPANY_DETAILS.name}
                </strong>
                <span>{COMPANY_DETAILS.address.street}</span>
                <br />
                <span>{COMPANY_DETAILS.address.zip} {COMPANY_DETAILS.address.city} (NRW)</span>
                <p className="text-xs text-slate-500 pt-2 border-t border-slate-200/80 mt-2">
                  {COMPANY_DETAILS.address.directionsHint}
                </p>
              </div>

              {/* Directions Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wide">
                    <Train className="w-4 h-4 text-slate-700" />
                    <span>Öffentliche Verkehrsmittel</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bahnhof Schwerte (Ruhr) liegt direkt gegenüber (ca. 120 Meter Fußweg). Direkte Regionalbahn- und RE-Verbindungen von Dortmund Hbf (ca. 14 Min.), Hagen, Hamm und Iserlohn.
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wide">
                    <Car className="w-4 h-4 text-slate-700" />
                    <span>Anfahrt & Parken</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Schnelle Anbindung über die A1 (Ausfahrt Schwerte) und B236. Ausgeschilderte Kundenparkplätze befinden sich im Innenhof direkt hinter dem Haus.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Mini Map Card */}
            <div className="p-4 rounded-lg bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs space-y-1 text-center sm:text-left">
                <span className="font-semibold text-amber-400 block uppercase tracking-wider text-[11px]">
                  Besuch in unserer Geschäftsstelle
                </span>
                <span className="text-slate-300">
                  Gerne empfangen wir Sie persönlich an der Bahnhofstraße 1 in 58239 Schwerte.
                </span>
              </div>
              <a
                href={COMPANY_DETAILS.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors whitespace-nowrap shadow-sm"
              >
                Route planen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
