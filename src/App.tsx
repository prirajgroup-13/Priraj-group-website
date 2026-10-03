import React, { useState } from 'react';
import { Background3D } from './components/Scene3D/Background3D';
import { SceneControls } from './components/Scene3D/SceneControls';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Work } from './components/Work';
import { About } from './components/About';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PricingPackage } from './types';
import { BUDGET_OPTIONS, SERVICES_DATA } from './data/content';
import { RouterProvider, useRouter } from './router/Router';
import { ServicesOverview } from './pages/ServicesOverview';
import { ServiceDetail } from './pages/ServiceDetail';

function AppShell() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Website Development');
  const [selectedPackage, setSelectedPackage] = useState<string>(BUDGET_OPTIONS[0]);
  const [viewMode, setViewMode] = useState<'cinematic' | 'architectural' | 'minimal'>('cinematic');
  const [particleDensity, setParticleDensity] = useState<'high' | 'medium' | 'low'>('high');
  const { currentPath } = useRouter();

  const mapToAllowedProjectType = (name?: string): string => {
    if (!name) return 'Website Development';
    if (name.includes('UI/UX') || name.includes('Design')) return 'UI/UX Design';
    if (name.includes('Brand')) return 'Branding & Digital Identity';
    if (name.includes('Commerce')) return 'E-commerce Development';
    if (name.includes('Application') || name.includes('Product')) return 'Web Application Development';
    if (name.includes('Custom')) return 'Custom Digital Solutions';
    return 'Website Development';
  };

  const handleOpenProjectModal = (serviceName?: string, packageName?: string) => {
    if (serviceName) {
      setSelectedService(mapToAllowedProjectType(serviceName));
    }
    if (packageName) {
      setSelectedPackage(packageName);
    }
    setProjectModalOpen(true);
  };

  const handleSelectPackage = (pkg: PricingPackage) => {
    let budgetChoice: string = BUDGET_OPTIONS[0];
    if (pkg.id === 'starter') {
      budgetChoice = 'Simple Website — ₹8,000–₹9,000';
    } else if (pkg.id === 'business') {
      budgetChoice = '3D Website — ₹15,000–₹20,000';
    } else {
      budgetChoice = "Custom / Larger Project — Let's Discuss";
    }
    handleOpenProjectModal(undefined, budgetChoice);
  };

  // Determine current view
  const renderCurrentView = () => {
    if (currentPath === '/services') {
      return <ServicesOverview onOpenProjectModal={(s) => handleOpenProjectModal(s)} />;
    }

    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').replace(/\/$/, '');
      const service = SERVICES_DATA.find((s) => s.slug === slug || s.route === currentPath);
      if (service) {
        return <ServiceDetail service={service} onOpenProjectModal={(s) => handleOpenProjectModal(s)} />;
      }
    }

    return (
      <>
        <Hero onOpenProjectModal={() => handleOpenProjectModal()} />
        <Services onSelectService={(s) => handleOpenProjectModal(s)} />
        <Pricing
          onSelectPackage={handleSelectPackage}
          onOpenGeneralProjectModal={() => handleOpenProjectModal()}
        />
        <Work onOpenProjectModal={(s) => handleOpenProjectModal(s)} />
        <About />
        <Process />
        <Contact preselectedService={selectedService} />
      </>
    );
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#ededed] selection:bg-[#d4af37]/30 selection:text-white">
      {/* 3D Background Canvas Layer (Fixed behind content) */}
      <Background3D
        viewMode={viewMode}
        particleDensity={particleDensity}
      />

      {/* Accessible DOM Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header onOpenProjectModal={() => handleOpenProjectModal()} />

        <main className="flex-1">
          {renderCurrentView()}
        </main>

        <Footer />
      </div>

      {/* Interactive 3D Viewport Controls Widget */}
      <SceneControls
        viewMode={viewMode}
        setViewMode={setViewMode}
        particleDensity={particleDensity}
        setParticleDensity={setParticleDensity}
      />

      {/* Project Consultation Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        defaultService={selectedService}
        defaultPackage={selectedPackage}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppShell />
    </RouterProvider>
  );
}
