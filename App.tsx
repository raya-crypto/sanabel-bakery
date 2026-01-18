
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import Promotion from './components/Promotion';
import Story from './components/Story';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BakeryAssistant from './components/BakeryAssistant';
import OrderModal from './components/OrderModal';
import MenuExplorer from './components/MenuExplorer';
import StoryModal from './components/StoryModal';

const App: React.FC = () => {
  const [isAssistantOpen, setAssistantOpen] = useState(false);
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const [isMenuExplorerOpen, setMenuExplorerOpen] = useState(false);
  const [isStoryModalOpen, setStoryModalOpen] = useState(false);
  const [initialProductId, setInitialProductId] = useState<string | undefined>(undefined);

  const openOrderModal = (productId?: string) => {
    setInitialProductId(productId);
    setOrderModalOpen(true);
    // Note: We NO LONGER close MenuExplorer here. 
    // This allows the user to stay in the menu after closing the modal.
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white">
      <Header onOrderClick={() => openOrderModal()} />
      <main className="flex-grow">
        <Hero onExploreClick={() => setMenuExplorerOpen(true)} />
        <MenuGrid 
          onOrderClick={(id) => openOrderModal(id)} 
          onExploreFullMenu={() => setMenuExplorerOpen(true)}
        />
        <Promotion onOrderClick={() => openOrderModal('5')} />
        <Story onReadMore={() => setStoryModalOpen(true)} />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      
      {/* Floating AI Assistant Button */}
      <button 
        onClick={() => setAssistantOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-5 rounded-full shadow-[0_10px_40px_rgba(238,157,43,0.4)] hover:scale-110 active:scale-90 transition-all z-40 flex items-center justify-center group"
      >
        <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">smart_toy</span>
      </button>

      {isAssistantOpen && (
        <BakeryAssistant onClose={() => setAssistantOpen(false)} />
      )}

      {/* Order Modal has the highest priority and z-index */}
      {isOrderModalOpen && (
        <OrderModal 
          initialProductId={initialProductId} 
          onClose={() => setOrderModalOpen(false)} 
        />
      )}

      {isMenuExplorerOpen && (
        <MenuExplorer 
          onClose={() => setMenuExplorerOpen(false)} 
          onBuyItem={(id) => openOrderModal(id)}
        />
      )}

      {isStoryModalOpen && (
        <StoryModal onClose={() => setStoryModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
