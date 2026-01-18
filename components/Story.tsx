
import React from 'react';

interface StoryProps {
  onReadMore: () => void;
}

const Story: React.FC<StoryProps> = ({ onReadMore }) => {
  return (
    <section id="story" className="bg-[#f8f5f2] py-24 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-right">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJJRRd3I9Xo30q8K6a1cNqrAv5cK1gz0P70QH2VGmuVYrh2DZD36q9HhNWGqh2x-D6Fkec-yYiuVKTWSMwPRVKYwy5NcbrQc9EgZcQZtTLNd_dW5MtLim-b6BvXkXjY_ZSq0tGymJfZNotYEAruhMUrHocJ1hoWlsZa5VRNM8ael-YY5TLPmagatxv2pwpYIXGvlW9TIqmSgFgJhb850BWV4rnM8ni_YbV-eppUIXARZa5z1JA1uNEyIjg6V49m6uPj8IxbZhyz8A" 
              className="w-full h-full object-cover"
              alt="خباز يعجن الدجين"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 hidden md:block w-64 h-64 bg-white p-4 rounded-[2rem] shadow-2xl border-4 border-[#f8f5f2]">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMdWXA3Bx4ceedNyFM6eHNCI7K3t9IxNpEhDjgkrplNwWmpopVuWK-A7aIhKGf1goXE3tkkawJ43XgamiKD5a5wWxXX3ZfOBCZSxseKZtwUBcG8xMvtXnR8wvE4aDRenZkT912eNuJi7a03olBPkv_N2-cVRDX_fjrIThuLa85rbjIw5tPxjHP-wDzWUBFiQLigPnlwrNGIiX58uxSz8-2WaJM0Hej-8Ly0stxsQ6Ix2AWH2RUyRLTxHOKdgm_my0xB4VIdP2M4-A" 
              className="w-full h-full object-cover rounded-2xl"
              alt="تفاصيل الخبز الحرفي"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 order-1 lg:order-2">
          <div>
            <span className="text-primary font-black text-xs tracking-[0.4em] uppercase block mb-4">تراثنا الأصيل</span>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter">مخبوزات يدوية <br/> صُنعت <span className="text-primary italic">بكل حب</span></h2>
          </div>
          <div className="space-y-6 text-xl text-secondary-text-light leading-relaxed font-medium">
            <p>
              بدأ مخبز سنابل بمهمة واحدة: إعادة المذاق الحقيقي للمخبوزات المطهوة على الحجر إلى موائدكم. نحن نؤمن أن الخبز الرائع ليس مجرد طعام، بل هو فن يحتاج للعناية.
            </p>
            <p className="text-gray-800 font-bold">
              نستخدم دقيقاً عضوياً 100% وزبدة محلية طازجة لنضمن أن كل لقمة هي رحلة في عالم الجودة والتميز.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div>
              <span className="text-4xl font-black text-primary block tracking-tighter">100%</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">دقيق عضوي</span>
            </div>
            <div className="border-r border-gray-200 pr-8">
              <span className="text-4xl font-black text-primary block tracking-tighter">24 س</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">تخمير طبيعي</span>
            </div>
            <div className="border-r border-gray-200 pr-8">
              <span className="text-4xl font-black text-primary block tracking-tighter">صفر</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">مواد حافظة</span>
            </div>
          </div>

          <button 
            onClick={onReadMore}
            className="bg-[#221a10] text-white font-black h-16 px-12 rounded-2xl shadow-xl hover:bg-primary hover:scale-105 transition-all w-fit mt-6 uppercase tracking-widest text-xs"
          >
            اقرأ قصتنا الكاملة
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;
