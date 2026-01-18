
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface BakeryAssistantProps {
  onClose: () => void;
}

const BakeryAssistant: React.FC<BakeryAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'أهلاً بك في سنابل! أنا هنا لأساعدك في اختيار ألذ المخبوزات. هل ترغب في توصية خاصة اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const model = 'gemini-3-flash-preview';
      
      const context = `
        أنت "مساعد سنابل الذكي" لمخبز سنابل (Handcrafted Artisan Bakery).
        مهمتك هي مساعدة الزوار باللغة العربية بأسلوب راقٍ ومشهي.
        
        قائمة المنتجات المتاحة واقتراحاتنا:
        - رغيف الساوردو الكلاسيكي ($8.00): فخر مخبزنا، مخمر 24 ساعة، عضوي بالكامل.
        - كرواسون الزبدة ($4.50): هش، ذهبي، وبنكهة الزبدة الفرنسية الأصيلة.
        - مافن الشوكولاتة ($4.00): وجبة خفيفة غنية بالشوكولاتة البلجيكية.
        - باجل السمسم ($3.50): مثالي للفطور، مخبوز على الطريقة التقليدية.
        - باقة الإفطار العائلية ($24.99): العرض الأوفر والأكثر طلباً للعائلات.
        - خبز الحبوب المتعددة ($10.00): خيار صحي جداً لمن يهتم بالرشاقة والطاقة.
        
        إرشادات الرد:
        1. كن ودوداً جداً (كأنك جار طيب).
        2. عند السؤال عن "اقتراح" أو "توصية"، اقترح منتجاً واحداً أو باقة بناءً على حاجة المستخدم.
        3. تحدث دائماً بالعربية الفصحى البسيطة أو بلهجة بيضاء مهذبة.
        4. لا تستخدم لغات أخرى أبداً.
      `;

      const chatHistory = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n');
      const prompt = `${context}\nتاريخ المحادثة:\n${chatHistory}\nالمستخدم: ${userMessage}\nالمساعد:`;

      const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
      });

      const aiResponse = response.text || "عذراً، يبدو أن الفرن مشغول قليلاً. هل يمكنك المحاولة مرة أخرى؟";
      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "حدث خطأ بسيط في العجينة! يرجى المحاولة بعد لحظات." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-start p-4 pointer-events-none">
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col pointer-events-auto border border-gray-100 h-[550px] animate-in slide-in-from-left-8 duration-300">
        <div className="bg-[#221a10] p-6 flex justify-between items-center text-white border-b border-white/5">
          <button onClick={onClose} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="font-black text-sm">مساعد سنابل</span>
              <span className="text-[9px] text-primary font-bold uppercase tracking-widest flex items-center gap-1">
                متصل الآن <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </span>
            </div>
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
              <span className="material-symbols-outlined text-primary fill-1">smart_toy</span>
            </div>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 bg-[#fcfaf8] custom-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[85%] p-4 rounded-3xl text-[13px] leading-relaxed ${
                msg.role === 'user' ? 'bg-primary text-white rounded-tl-none shadow-lg shadow-primary/10 font-bold' : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tr-none font-medium'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-end">
              <div className="bg-white/50 backdrop-blur-sm p-3 rounded-2xl flex items-center gap-2">
                 <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                 </div>
                 <span className="text-[10px] text-gray-400 font-bold">جاري تحضير الرد...</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-5 bg-white border-t border-gray-100">
          <div className="flex gap-3 items-center">
            <button 
              onClick={handleSend}
              className="bg-primary text-white w-12 h-12 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center shadow-lg shadow-primary/20 active:scale-90"
            >
              <span className="material-symbols-outlined rotate-180">send</span>
            </button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اطلب توصية أو اسأل عن منتج..."
              className="flex-1 text-right text-sm border-gray-100 bg-gray-50 rounded-2xl h-12 focus:ring-primary focus:border-primary transition-all font-medium placeholder:text-gray-300"
            />
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

export default BakeryAssistant;
