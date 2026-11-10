import React, { useState } from 'react';
import { X, MapPin, Calendar, Home, Euro, Check, FileText, ChevronRight, Phone, Shield } from 'lucide-react';
import { Property } from '../data/properties';
import { COMPANY_DETAILS } from '../data/company';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onBookViewing: (property: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onBookViewing,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 rounded-full shadow-md transition-colors cursor-pointer"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Gallery */}
        <div className="relative bg-slate-900 rounded-t-xl overflow-hidden aspect-[16/9] max-h-[380px]">
          <img
            src={property.gallery[activeImageIndex] || property.mainImage}
            alt={property.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

          {/* District label in image */}
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-300">
              {property.categoryLabel} · {property.district}
            </span>
            <h3 className="text-lg sm:text-xl font-bold">{property.title}</h3>
          </div>

          {/* Gallery thumbnails if multiple */}
          {property.gallery.length > 1 && (
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              {property.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`w-12 h-9 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === i ? 'border-amber-400 scale-105' : 'border-white/60 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Facts Bar with clean unboxed metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
            <div>
              <span className="text-xs text-slate-500 block">Kaltmiete mtl.</span>
              <span className="text-xl font-bold text-slate-900 tabular-nums">€ {property.coldRent},-</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Warmmiete mtl.</span>
              <span className="text-xl font-bold text-slate-900 tabular-nums">€ {property.totalRent},-</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Wohnfläche</span>
              <span className="text-xl font-bold text-slate-900 tabular-nums">{property.livingSpace} m²</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Zimmeranzahl</span>
              <span className="text-xl font-bold text-slate-900 tabular-nums">{property.rooms} Zi.</span>
            </div>
          </div>

          {/* Location & availability metadata */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 border-b border-slate-100 pb-4">
            <span className="flex items-center gap-1 font-medium text-slate-900">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{property.address}, {property.zip} {property.city} ({property.district})</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>Etage: {property.floor}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>Bezugsfrei ab {property.availableFrom}</span>
            </span>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Objektbeschreibung
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Features checklist */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              Ausstattung & Besonderheiten
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
              {property.features.map((feat, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cost transparency table & energy certificate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Rent details */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Kostenaufstellung
              </h5>
              <dl className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Nettokaltmiete:</dt>
                  <dd className="font-semibold text-slate-800 tabular-nums">€ {property.coldRent},00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Betriebskostenvorauszahlung:</dt>
                  <dd className="font-semibold text-slate-800 tabular-nums">€ {property.utilityCosts},00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Heizkostenvorauszahlung:</dt>
                  <dd className="font-semibold text-slate-800 tabular-nums">€ {property.heatingCosts},00</dd>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between font-bold text-sm">
                  <dt className="text-slate-900">Gesamt-Warmmiete:</dt>
                  <dd className="text-slate-900 tabular-nums">€ {property.totalRent},00</dd>
                </div>
                <div className="pt-2 text-slate-500 flex justify-between">
                  <dt>Mietkaution (3 Nettokaltmieten):</dt>
                  <dd className="tabular-nums font-medium text-slate-700">€ {property.deposit},00</dd>
                </div>
              </dl>
            </div>

            {/* Energy certificate */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Energieausweis & Gebäudedaten
              </h5>
              <dl className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Baujahr:</dt>
                  <dd className="font-semibold text-slate-800 tabular-nums">{property.constructionYear}</dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt className="text-slate-500">Energieeffizienzklasse:</dt>
                  <dd className="px-2 py-0.5 rounded font-bold text-xs bg-emerald-100 text-emerald-800">
                    Klasse {property.energyClass}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Endenergiebedarf:</dt>
                  <dd className="font-semibold text-slate-800 tabular-nums">{property.energyValue} kWh/(m²*a)</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Heizungsart:</dt>
                  <dd className="font-semibold text-slate-800 text-right">{property.heatingType}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Verwaltet durch SPK-Hausverwaltung GmbH · Provisionsfrei für Mieter (§ Bestellerprinzip)</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
              >
                Schließen
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookViewing(property);
                }}
                className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Besichtigung anfragen</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
