/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OwnerSection } from './components/OwnerSection';
import { PropertyListings } from './components/PropertyListings';
import { ServicesSection } from './components/ServicesSection';
import { OpeningHoursLocation } from './components/OpeningHoursLocation';
import { ContactSection } from './components/ContactSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TenantPortalModal } from './components/TenantPortalModal';
import { LegalModal } from './components/LegalModals';
import { Footer } from './components/Footer';
import { Property } from './data/properties';

export default function App() {
  const [selectedPropertyTitle, setSelectedPropertyTitle] = useState<string>('');
  const [inquiryType, setInquiryType] = useState<string>('allgemein');
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | null>(null);

  const handleOpenContact = (type: string = 'allgemein', propertyTitle?: string) => {
    setInquiryType(type);
    if (propertyTitle) {
      setSelectedPropertyTitle(propertyTitle);
    }
    const contactElem = document.getElementById('kontakt');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPropertyForViewing = (property: Property) => {
    setSelectedPropertyTitle(`${property.title} (${property.address}, ${property.district})`);
    setInquiryType('besichtigung');
    const contactElem = document.getElementById('kontakt');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDamageReport = () => {
    setInquiryType('schaden');
    const contactElem = document.getElementById('kontakt');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 font-sans selection:bg-slate-900 selection:text-white">
      {/* 1. Header / Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 3. Featured Owner Spotlight (Hüseyin Zafer with professional office backdrop) */}
        <OwnerSection onOpenContact={handleOpenContact} />

        {/* 4. Property Listings Gallery */}
        <PropertyListings
          onSelectPropertyForViewing={handleSelectPropertyForViewing}
        />

        {/* 5. Hausverwaltung Services */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* 6. Opening Hours & Schwerte Location Section */}
        <OpeningHoursLocation />

        {/* 7. Responsive Contact & Inquiry Form */}
        <ContactSection
          initialInquiryType={inquiryType}
          selectedPropertyTitle={selectedPropertyTitle}
        />

        {/* 8. Feedback from Property Owners and Tenants */}
        <TestimonialsSection />
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenContact={handleOpenContact}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Tenant / Owner Service Portal Modal */}
      <TenantPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        onOpenDamageReport={handleOpenDamageReport}
      />

      {/* Legal Disclosures (Impressum & Datenschutz) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
