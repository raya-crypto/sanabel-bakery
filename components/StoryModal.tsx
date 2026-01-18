
import React from 'react';

interface StoryModalProps {
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[120] bg-[#221a10]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div className="bg-[#fcfaf8] w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-500 max-h-[90vh] text-right">
        
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJJRRd3I9Xo30q8K6a1cNqrAv5cK1gz0P70QH2VGmuVYrh2DZD36q9HhNWGqh2x-D6Fkec-yYiuVKTWSMwPRVKYwy5NcbrQc9EgZcQZtTLNd_dW5MtLim-b6BvXkXjY_ZSq0tGymJfZNotYEAruhMUrHocJ1hoWlsZa5VRNM8ael-YY5TLPmagatxv2pwpYIXGvlW9TIqmSgFgJhb850BWV4rnM8ni_YbV-eppUIXARZa5z1JA1uNEyIjg6V49m6uPj8IxbZhyz8A" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="أيدي خباز محترف" 
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#221a10]/40 to-transparent"></div>
        </div>

        <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar relative">
          <button 
            onClick={onClose}
            className="absolute top-6 left-6 md:top-10 md:left-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-primary transition-colors z-20"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <span className="text-primary font-black text-xs tracking-[0.3em] uppercase mb-4 block">تراث سنابل</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">الشغف في كل <br/> <span className="text-primary italic">رغيف</span></h2>
          
          <div className="space-y-6 text-secondary-text-light text-lg leading-relaxed font-medium">
            <p>
              بدأ كل شيء في مطبخ منزلي صغير مع جرة واحدة من الخميرة الطبيعية وحلم بإعادة المذاق "الحقيقي" للخبز إلى حياتنا اليومية.
            </p>
            <p>
              في سنابل، نؤمن أن الخبز ليس مجرد طعام، بل هو حرفة. لهذا السبب نتجنب الاختصارات الصناعية؛ لا خميرة تجارية، لا مواد حافظة، ولا استعجال.
            </p>
            <p className="bg-primary/5 p-6 rounded-2xl border-r-4 border-primary italic font-bold text-gray-800">
              "نحن لا نصنع الخبز، بل نزرعه ونخمره ونحترم الإيقاع الطبيعي للعجين." — فلسفة المؤسس
            </p>
            <p>
              اليوم، يقف مخبز سنابل كمنارة لعشاق المنتجات الحرفية. من الباجل المخبوز على الحجر إلى الكرواسون الهش، كل قطعة تروي قصة 24 ساعة من التخمير والنزاهة العضوية.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col gap-4">
             <div className="flex items-center gap-4 justify-end">
                <div className="text-right">
                    <h4 className="font-bold text-gray-900">عضوي معتمد</h4>
                    <p className="text-xs text-gray-400">جميع أنواع الدقيق لدينا هي من الدرجة العضوية الممتازة.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">verified</span>
                </div>
             </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ee9d2b; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default StoryModal;
