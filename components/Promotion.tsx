
import React, { useState, useEffect, useCallback, useRef } from 'react';

interface Offer {
  id: string;
  productId: string;
  title: string;
  highlight: string;
  description: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
  image: string;
  color: string;
}

const OFFERS: Offer[] = [
  {
    id: 'off1',
    productId: '5',
    title: 'باقة',
    highlight: 'الصباح',
    description: 'ابدأ يومك بنشاط مع رغيفين ساوردو، 4 كرواسون، و2 قهوة كبيرة.',
    oldPrice: '$32.00',
    newPrice: '$24.99',
    discount: 'وفر 25%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3erHM33d2Wh8jPskngU7Lts3XDPozTTkxpfD2y2ARBjRnAQJwdJy_eoUk_ucxUXM_zrqYfgs1v27bPFIxSSTBfc8ixCdOf1GI76ALP64HDfw2AzW83Sp2-4txwEN4vG2ZaxXKvEQOsIaI71cGtruf63KV9dKWgMqUHeju9-P6q7DAHnXcY2fhCmlUhF9aGOd0J4XgAMPfSe6mOX1FcMaMMIBW9xUlYry6gq9uUD_wiT3EthSeQxwxpSX9niELwIahN44HyGe2l-o',
    color: '#ee9d2b'
  },
  {
    id: 'off2',
    productId: '15',
    title: 'طقم',
    highlight: 'شاي المساء',
    description: 'مثالي للمشاركة. يتضمن 4 تارت فواكه، 4 مافن مشكل، وشاي أعشاب فاخر.',
    oldPrice: '$38.00',
    newPrice: '$29.99',
    discount: 'لفترة محدودة',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5eoNiuMejMBkF7LChjVlg75atE_NoCHk2LjNJp4OSP4NbhKBXG5DPzKWd4G-9pydJk-NbMS6bv-Y_j3j5fspK-9Xr0BYnmzu3wY5v8l3RpZtOLWen8RCtnWH0Ra-5njUlkklzJDdNaoLsfsBP6APloy8-IYTSIPqwCWY_HY8y3uTlH2R1IBiUjw4GLueJbNcB0VFbo6ZfpE4jDr9KiL7_CIFEUEzHZADe-9khdWDZkbBre_2arSldpxUOaBxmtRGF8iTKJbCscZY',
    color: '#8b5e3c'
  }
];

interface PromotionProps {
  onOrderClick: (productId: string) => void;
}

const Promotion: React.FC<PromotionProps> = ({ onOrderClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % OFFERS.length);
    }, 5000);
  }, []);

  const handleManualNav = (index: number) => {
    setActiveIndex(index);
    startTimer();
  };

  const nextSlide = () => handleManualNav((activeIndex + 1) % OFFERS.length);
  const prevSlide = () => handleManualNav((activeIndex - 1 + OFFERS.length) % OFFERS.length);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  return (
    <section id="offers" className="max-w-[1200px] mx-auto px-6 pb-24 scroll-mt-24">
      <div className="relative">
        <div className="bg-[#221a10] rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5 min-h-[550px] md:min-h-[500px]">
          {OFFERS.map((offer, idx) => (
            <div 
              key={offer.id}
              className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-2 transition-all duration-700 ease-in-out ${
                idx === activeIndex ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-12 -z-10'
              }`}
            >
              <div className="p-8 md:p-16 flex flex-col justify-center relative z-10 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase">عرض خاص</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tighter">
                  {offer.title} <span style={{ color: offer.color }} className="italic">{offer.highlight}</span>
                </h2>
                
                <p className="text-[#cbbba9] text-base md:text-lg mb-8 max-w-md leading-relaxed font-bold">
                  {offer.description}
                </p>
                
                <div className="flex items-center gap-6 mb-10">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-xs font-bold line-through">{offer.oldPrice}</span>
                    <span className="text-5xl font-black text-white tracking-tighter">{offer.newPrice}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-xl">
                    <span className="text-white font-black text-[10px] uppercase tracking-widest">{offer.discount}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => onOrderClick(offer.productId)}
                  className="bg-primary text-white hover:scale-105 transition-all font-black h-16 px-10 rounded-2xl w-full sm:w-fit shadow-xl uppercase tracking-widest text-xs active:scale-95 flex items-center justify-center gap-3"
                >
                  احصل على العرض
                  <span className="material-symbols-outlined text-sm">arrow_left</span>
                </button>
              </div>

              <div className="relative h-64 lg:h-auto overflow-hidden order-1 lg:order-2">
                <img src={offer.image} className="absolute inset-0 w-full h-full object-cover" alt={offer.title} />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#221a10] via-transparent to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-30 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white pointer-events-auto hover:bg-primary transition-all active:scale-90"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white pointer-events-auto hover:bg-primary transition-all active:scale-90"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
