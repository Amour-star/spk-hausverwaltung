import React, { useState, useMemo } from 'react';
import { MapPin, ArrowRight, SlidersHorizontal, Eye, Calendar, Sparkles } from 'lucide-react';
import { Property, PROPERTIES } from '../data/properties';
import { PropertyModal } from './PropertyModal';

interface PropertyListingsProps {
  onSelectPropertyForViewing: (property: Property) => void;
}

export const PropertyListings: React.FC<PropertyListingsProps> = ({
  onSelectPropertyForViewing,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [maxRent, setMaxRent] = useState<number>(2000);
  const [minRooms, setMinRooms] = useState<number>(0);
  const [selectedPropertyForModal, setSelectedPropertyForModal] = useState<Property | null>(null);

  // Filter listings
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      if (selectedCategory !== 'all' && prop.category !== selectedCategory) {
        return false;
      }
      if (prop.coldRent > maxRent) {
        return false;
      }
      if (minRooms > 0 && prop.rooms < minRooms) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, maxRent, minRooms]);

  return (
    <section id="angebote" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Mietangebote Schwerte & Umgebung
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Aktuelle Wohn- & Gewerbeobjekte
            </h2>
            <p className="text-slate-600 mt-1 text-sm sm:text-base max-w-xl">
              Gepflegte, provisionsfreie Mietwohnungen und repräsentative Gewerbeflächen – direkt betreut durch die SPK-Hausverwaltung GmbH.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            <span className="font-bold text-slate-900 tabular-nums">{filteredProperties.length}</span> von {PROPERTIES.length} Objekten verfügbar
          </div>
        </div>

        {/* Filter Bar adhering to Zero-Pill rule: segmented button controls (§1.A) */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Alle Angebote ({PROPERTIES.length})
              </button>
              <button
                onClick={() => setSelectedCategory('apartment')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'apartment'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Mietwohnungen
              </button>
              <button
                onClick={() => setSelectedCategory('commercial')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'commercial'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Gewerbe & Praxis
              </button>
              <button
                onClick={() => setSelectedCategory('penthouse')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'penthouse'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Penthouse
              </button>
              <button
                onClick={() => setSelectedCategory('family')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'family'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Familienwohnungen
              </button>
            </div>

            {/* Room selector & reset */}
            <div className="flex items-center gap-3">
              <label className="text-xs text-slate-600 font-medium whitespace-nowrap">
                Min. Zimmer:
              </label>
              <select
                value={minRooms}
                onChange={(e) => setMinRooms(Number(e.target.value))}
                className="text-xs bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-900"
              >
                <option value={0}>Beliebig</option>
                <option value={2}>Ab 2 Zimmer</option>
                <option value={3}>Ab 3 Zimmer</option>
                <option value={4}>Ab 4 Zimmer</option>
              </select>

              {(selectedCategory !== 'all' || minRooms > 0 || maxRent < 2000) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setMinRooms(0);
                    setMaxRent(2000);
                  }}
                  className="text-xs text-slate-500 hover:text-slate-900 underline underline-offset-2 cursor-pointer"
                >
                  Filter zurücksetzen
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col group"
              >
                {/* Property Card Image */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={property.mainImage}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Clean unboxed category label inside bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                      {property.categoryLabel}
                    </span>
                    <p className="text-xs text-slate-200 truncate font-medium">
                      {property.district} · {property.city}
                    </p>
                  </div>
                </div>

                {/* Property Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Clean unboxed metadata with typographic dot separator (§1.A) */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1.5">
                      <span>{property.livingSpace} m²</span>
                      <span aria-hidden="true">·</span>
                      <span>{property.rooms} Zimmer</span>
                      <span aria-hidden="true">·</span>
                      <span>{property.floor.split(' ')[0]}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-slate-800">
                      {property.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                      {property.highlight}
                    </p>
                  </div>

                  {/* Price info & Actions */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[11px] text-slate-500 block">Kaltmiete mtl.</span>
                        <span className="text-lg font-extrabold text-slate-900 tabular-nums">
                          € {property.coldRent},-
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-slate-500 block">Warmmiete mtl.</span>
                        <span className="text-sm font-semibold text-slate-700 tabular-nums">
                          € {property.totalRent},-
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedPropertyForModal(property)}
                        className="w-full py-2 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                      <button
                        onClick={() => onSelectPropertyForViewing(property)}
                        className="w-full py-2 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>Besichtigung</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-200 max-w-md mx-auto space-y-3">
            <p className="text-sm text-slate-700 font-semibold">Keine Objekte gefunden</p>
            <p className="text-xs text-slate-500">
              Aktuell entspricht kein Objekt Ihren Filterkriterien. Gerne nehmen wir Ihr Gesuch auf!
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setMinRooms(0);
                setMaxRent(2000);
              }}
              className="px-4 py-2 text-xs font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
            >
              Alle Filter zurücksetzen
            </button>
          </div>
        )}

        {/* Modal for detail view */}
        <PropertyModal
          property={selectedPropertyForModal}
          onClose={() => setSelectedPropertyForModal(null)}
          onBookViewing={(property) => onSelectPropertyForViewing(property)}
        />
      </div>
    </section>
  );
};
