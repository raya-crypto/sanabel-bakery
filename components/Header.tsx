
import React from 'react';

interface HeaderProps {
  onOrderClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f3eee7] bg-white/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="text-primary flex items-center justify-center">
            <span className="material-symbols-outlined !text-3xl">bakery_dining</span>
          </div>
          <h1 className="text-xl font-bold leading-tight tracking-tight">مخبز سنابل</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#menu" onClick={(e) => scrollToSection(e, 'menu')} className="text-sm font-bold hover:text-primary transition-colors cursor-pointer">القائمة</a>
          <a href="#offers" onClick={(e) => scrollToSection(e, 'offers')} className="text-sm font-bold hover:text-primary transition-colors cursor-pointer">العروض</a>
          <a href="#story" onClick={(e) => scrollToSection(e, 'story')} className="text-sm font-bold hover:text-primary transition-colors cursor-pointer">قصتنا</a>
          <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="text-sm font-bold hover:text-primary transition-colors cursor-pointer">آراء العملاء</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-sm font-bold hover:text-primary transition-colors cursor-pointer">اتصل بنا</a>
        </nav>

        <button 
          onClick={onOrderClick}
          className="bg-primary text-white text-sm font-black px-6 py-2 rounded-xl shadow-md hover:opacity-90 transition-opacity"
        >
          اطلب الآن
        </button>
      </div>
    </header>
  );
};

export default Header;
