import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DomusSection } from './components/DomusSection';
import { DomusDetailPage } from './components/DomusDetailPage';
import { GodDetailPage } from './components/GodDetailPage';
import { GodsSection } from './components/GodsSection';
import { SemideusesSection } from './components/SemideusesSection';
import { LoreSection } from './components/LoreSection';
import { ResourcesSection } from './components/ResourcesSection';
import { DiscordCTA } from './components/DiscordCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);

    // Scroll behavior: top for most sections, target block for Domus detail
    if (section === 'domus') {
      // Defer to allow render
      requestAnimationFrame(() => {
        const target = document.getElementById('domus-detail');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} setActiveSection={handleSectionChange} />

      <main>
        {activeSection === 'inicio' && (
          <>
            <Hero />
            <DomusSection />
            <ResourcesSection />
          </>
        )}

        {activeSection === 'domus' && <DomusDetailPage />}

        {activeSection === 'deuses' && <GodsSection setActiveSection={setActiveSection} />}

        {activeSection === 'semideuses' && <SemideusesSection />}

        {activeSection === 'lore' && <LoreSection />}

        {activeSection === 'recursos' && <ResourcesSection />}

        {activeSection.startsWith('deuses/') && (
          <GodDetailPage
            godId={activeSection.split('/')[1]}
            onBack={() => setActiveSection('deuses')}
            onNavigate={(id) => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection(`deuses/${id}`);
            }}
          />
        )}
      </main>

      <DiscordCTA />
      <Footer />
    </div>
  );
}
