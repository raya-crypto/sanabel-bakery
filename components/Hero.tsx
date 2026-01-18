
import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-8">
      <div 
        className="relative w-full rounded-[3rem] overflow-hidden bg-cover bg-center min-h-[500px] md:min-h-[700px] flex flex-col items-center justify-center text-center p-8 gap-8 border border-gray-100 shadow-xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAs-kSJAs_mB-kyVesW9eHaxRTc2oWR3EvvpFxIRdGFw2OcD0Hf8jpmo0mlVK18BuTilySgJVzm-3xDp9ze-LFYRIVjoxeK1Ln8A_iM4Ko2Ge3VspcITHDp_IKbVqqJYt2qzKdTYGbXG649tbDtM1CRH0aQk5unv6Y7dtjlTqkeIuTrHeEI4824o3v-CBiSFWB8Z-7BNCHTeGzcCl2Wv1Ea1cD8PouwHzblKeeVS84JAwDdhsT_5Vbwne1VHgOXaW3P0DqqaP-UdMs")`
        }}
      >
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out z-10">
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-white/20">
            صناعة يدوية منذ 2024
          </span>
          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.85]">
            خبز <br/> <span className="text-primary italic">طازج</span>
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-medium max-w-xl mx-auto leading-relaxed opacity-90 drop-shadow-md">
            مخبوزات طبيعية ومعجنات هشة، صُنعت بأجود أنواع الدقيق العضوي وبكثير من الشغف.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 z-10">
          <button 
            onClick={onExploreClick}
            className="bg-primary text-white font-black h-16 px-12 rounded-2xl shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-xs"
          >
            اطلب مفضلاتك الآن
          </button>
          <button 
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 font-black h-16 px-12 rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 uppercase tracking-widest text-xs"
          >
            فلسفتنا في الخبز
          </button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white/50 text-4xl font-light">keyboard_double_arrow_down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
