import React from 'react';
import { Building, KeyRound, Wrench, ReceiptText, ShieldCheck, Users, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: (type?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const services = [
    {
      index: '01',
      title: 'WEG-Verwaltung nach neuem WEG-Recht',
      subtitle: 'Für Wohnungseigentümergemeinschaften',
      description: 'Rechtssichere und strukturierte Durchführung von Eigentümerversammlungen, zügige Umsetzung von Beschlüssen und vorausschauende Instandhaltungsplanung zur langfristigen Wertsicherung Ihres Gemeinschaftseigentums.',
      points: [
        'Vorbereitung & Leitung ordentlicher sowie außerordentlicher Versammlungen',
        'Präzise Beschlusssammlung & transparente Protokollführung',
        'Erstellung von Wirtschaftsplänen & rechtssicheren Jahresabrechnungen',
        'Zertifizierte Verwalterqualität nach § 26a WEG',
      ],
      type: 'eigentuemer',
    },
    {
      index: '02',
      title: 'Mietverwaltung & Sondereigentum (SEV)',
      subtitle: 'Rundum-sorglos-Paket für Vermieter',
      description: 'Wir entlasten Sie vollständig von allen Pflichten des Vermieteralltags. Von der sorgfältigen Bonitätsprüfung neuer Mieter über Mietverträge bis zur verlässlichen Mieteingangs- und Kautionsüberwachung.',
      points: [
        'Professionelle Mietersuche & SCHUFA-Bonitätsprüfung',
        'Rechtssichere Mietverträge nach aktueller Rechtsprechung',
        'Mahnwesen, Kautionskontenführung & Mietanpassungen',
        'Wohnungsübergaben & -abnahmen mit lückenlosem Protokoll',
      ],
      type: 'eigentuemer',
    },
    {
      index: '03',
      title: 'Technisches Gebäudemanagement & 24/7 Notdienst',
      subtitle: 'Werterhalt & schnelle Schadensbehebung',
      description: 'Regelmäßige Objektbegehungen, präventive Wartungskonzepte und unser eingespieltes Meisterhandwerker-Netzwerk in Schwerte und Umgebung garantieren sofortige Hilfe bei Havarien und faire Instandsetzungspreise.',
      points: [
        'Regelmäßige Objektinspektionen zur Mängelfrüherkennung',
        'Einholung von Vergleichsangeboten & Bauüberwachung',
        '24-Stunden-Havariedienst für Rohrbruch, Heizungsausfall und Notfälle',
        'Prüfung von TÜV-, Brandschutz- & Verkehrssicherungspflichten',
      ],
      type: 'eigentuemer',
    },
    {
      index: '04',
      title: 'Kaufmännisches Abrechnungswesen & Finanzwesen',
      subtitle: 'Transparenz bis auf den letzten Cent',
      description: 'Fehlerfreie und termingerechte Betriebskostenabrechnungen schützen vor Mieterstreitigkeiten. Wir führen getrennte Treuhandkonten bei renommierten Banken und erstellen transparente Vermögensberichte.',
      points: [
        'Pünktliche Heiz- & Betriebskostenabrechnung nach BetrKV',
        'Laufende Buchhaltung aller Einnahmen und Ausgaben',
        'Mündelsichere Anlage der Instandhaltungsrücklagen',
        'Umfassende Jahresberichte für Steuerberater und Eigentümer',
      ],
      type: 'eigentuemer',
    },
  ];

  return (
    <section id="leistungen" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Ganzheitliche Immobilienbetreuung
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Unsere Kernleistungen für Eigentümer & Mieter
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Moderne Verwalterpraxis mit digitaler Effizienz und persönlicher Verantwortung vor Ort in Schwerte.
          </p>
        </div>

        {/* 2x2 Services Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => (
            <div
              key={srv.index}
              className="p-8 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-400 tracking-wider">
                    {srv.index}.
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {srv.subtitle}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {srv.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-200/70 text-xs text-slate-700">
                  {srv.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenContact(srv.type)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-slate-700 transition-colors cursor-pointer group"
                >
                  <span>Unverbindliches Angebot anfragen</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
