
import React, { useState, useMemo, useEffect, useRef } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
  isRecommended?: boolean;
}

const PRODUCTS: Product[] = [
  { id: '1', name: 'رغيف ساوردو كلاسيك', price: 8.00, desc: 'تخمير طبيعي لمدة 24 ساعة، دقيق عضوي فاخر.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNxyIWIBdP261S9L5WxE70aQ3q2jmrGlcAoH-GaRMyX0Dz6IF2hVnSnB3wn145zxAPWorXTQfboh7a_5_eEI9ndtZEX2ZNtXh4SaBgABFnW3VIMDU8aO_iC8m5R8o8jll5bTSJNI85r4CZSYEh8OwPv0IvTs1szt7_2N2vP6pjB21oIEbuNcHVDFTRpuvZRLD0L1VYcAaTnfOasBiiZdx4aiJYmEBc1GnuDlhK2r6vCPBvvPm-H_CRTdobQblmNNKLAw0s4KbGPNU', isRecommended: true },
  { id: '2', name: 'كرواسون الزبدة', price: 4.50, desc: 'طبقات هشة من الزبدة الفاخرة المخبوزة طازجاً.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3erHM33d2Wh8jPskngU7Lts3XDPozTTkxpfD2y2ARBjRnAQJwdJy_eoUk_ucxUXM_zrqYfgs1v27bPFIxSSTBfc8ixCdOf1GI76ALP64HDfw2AzW83Sp2-4txwEN4vG2ZaxXKvEQOsIaI71cGtruf63KV9dKWgMqUHeju9-P6q7DAHnXcY2fhCmlUhF9aGOd0J4XgAMPfSe6mOX1FcMaMMIBW9xUlYry6gq9uUD_wiT3EthSeQxwxpSX9niELwIahN44HyGe2l-o' },
  { id: '3', name: 'مافن الشوكولاتة', price: 4.00, desc: 'شوكولاتة مزدوجة غنية وطرية تذوب في الفم.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5eoNiuMejMBkF7LChjVlg75atE_NoCHk2LjNJp4OSP4NbhKBXG5DPzKWd4G-9pydJk-NbMS6bv-Y_j3j5fspK-9Xr0BYnmzu3wY5v8l3RpZtOLWen8RCtnWH0Ra-5njUlkklzJDdNaoLsfsBP6APloy8-IYTSIPqwCWY_HY8y3uTlH2R1IBiUjw4GLueJbNcB0VFbo6ZfpE4jDr9KiL7_CIFEUEzHZADe-9khdWDZkbBre_2arSldpxUOaBxmtRGF8iTKJbCscZY' },
  { id: '4', name: 'باجل السمسم', price: 3.50, desc: 'على طريقة نيويورك، مطهو بالبخار ثم مخبوز على الحجر.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuewYgzi3nOOnSfX9pojXnj8-EIbcelXSLUBaFTgVXwzkNV1KIAqzFqZtfuIdY36j0ooulxj0KkWRGsj3sLPwHDIItyX4_sFrA8bsrLZBUnjrcnO_kT931d2UxdfZWOQ-haas4ARQ-MiCwQGDBDhd7TiH_O7DSG-sa9upp2WX6rJyy9CytRZpYOiZ2DapFI3UcEIpT-mjdKjKuEEO-xr1u9jnu5N_vEEoapIGf0ak6HGgBFtGSt9ZIC5zJ1Enz76atSqKv9WLBY8s' },
  { id: '5', name: 'باقة الإفطار العائلية', price: 24.99, desc: 'مجموعة متكاملة من الساوردو والكرواسون مع القهوة الممتازة.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3erHM33d2Wh8jPskngU7Lts3XDPozTTkxpfD2y2ARBjRnAQJwdJy_eoUk_ucxUXM_zrqYfgs1v27bPFIxSSTBfc8ixCdOf1GI76ALP64HDfw2AzW83Sp2-4txwEN4vG2ZaxXKvEQOsIaI71cGtruf63KV9dKWgMqUHeju9-P6q7DAHnXcY2fhCmlUhF9aGOd0J4XgAMPfSe6mOX1FcMaMMIBW9xUlYry6gq9uUD_wiT3EthSeQxwxpSX9niELwIahN44HyGe2l-o', isRecommended: true },
  { id: '14', name: 'رغيف القوة المتعدد الحبوب', price: 10.00, desc: 'غني بالألياف والبذور الطبيعية للطاقة والنشاط الدائم.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuewYgzi3nOOnSfX9pojXnj8-EIbcelXSLUBaFTgVXwzkNV1KIAqzFqZtfuIdY36j0ooulxj0KkWRGsj3sLPwHDIItyX4_sFrA8bsrLZBUnjrcnO_kT931d2UxdfZWOQ-haas4ARQ-MiCwQGDBDhd7TiH_O7DSG-sa9upp2WX6rJyy9CytRZpYOiZ2DapFI3UcEIpT-mjdKjKuEEO-xr1u9jnu5N_vEEoapIGf0ak6HGgBFtGSt9ZIC5zJ1Enz76atSqKv9WLBY8s', isRecommended: true },
  { id: '8', name: 'خبز الزيتون وإكليل الجبل', price: 9.00, desc: 'مزيج رائع من الزيتون اليوناني وإكليل الجبل العطري.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNxyIWIBdP261S9L5WxE70aQ3q2jmrGlcAoH-GaRMyX0Dz6IF2hVnSnB3wn145zxAPWorXTQfboh7a_5_eEI9ndtZEX2ZNtXh4SaBgABFnW3VIMDU8aO_iC8m5R8o8jll5bTSJNI85r4CZSYEh8OwPv0IvTs1szt7_2N2vP6pjB21oIEbuNcHVDFTRpuvZRLD0L1VYcAaTnfOasBiiZdx4aiJYmEBc1GnuDlhK2r6vCPBvvPm-H_CRTdobQblmNNKLAw0s4KbGPNU', isRecommended: true },
];

interface CartItem {
  id: string;
  quantity: number;
}

interface OrderModalProps {
  initialProductId?: string;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ initialProductId, onClose }) => {
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment' | 'success'>('cart');
  const [activeProductId, setActiveProductId] = useState(initialProductId || PRODUCTS[0].id);
  const [cart, setCart] = useState<CartItem[]>(initialProductId ? [{ id: initialProductId, quantity: 1 }] : []);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (initialProductId) {
      setActiveProductId(initialProductId);
      setCart(prev => prev.some(i => i.id === initialProductId) ? prev : [...prev, { id: initialProductId, quantity: 1 }]);
    }
  }, [initialProductId]);

  const recommendedItems = useMemo(() => PRODUCTS.filter(p => p.isRecommended), []);
  const activeProduct = useMemo(() => PRODUCTS.find(p => p.id === activeProductId) || PRODUCTS[0], [activeProductId]);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      const p = PRODUCTS.find(prod => prod.id === item.id);
      return total + (p ? p.price * item.quantity : 0);
    }, 0).toFixed(2);
  }, [cart]);

  const isFormValid = useMemo(() => {
    return formData.name.trim().length > 2 && formData.phone.trim().length > 7 && formData.address.trim().length > 5;
  }, [formData]);

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === id);
      if (existing) {
        const newQty = Math.max(0, existing.quantity + delta);
        if (newQty === 0) return prev.filter(i => i.id !== id);
        return prev.map(i => i.id === id ? { ...i, quantity: newQty } : i);
      } else if (delta > 0) {
        return [...prev, { id, quantity: delta }];
      }
      return prev;
    });
  };

  const handlePayPalPay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 3000);
  };

  const activeInCart = cart.find(i => i.id === activeProductId);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300 text-right">
      <div className="bg-white w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        
        {/* Step Indicator Header */}
        {step !== 'success' && (
          <div className="bg-[#221a10] p-6 text-white border-b border-white/5">
            <div className="flex justify-between items-center mb-6">
              <button onClick={onClose} className="text-white/40 hover:text-white transition-all">
                <span className="material-symbols-outlined">close</span>
              </button>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-black tracking-tight">إتمام الطلب</h3>
                <span className="material-symbols-outlined text-primary text-2xl">shopping_cart_checkout</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between px-2">
              {[
                { id: 'cart', label: 'السلة', icon: 'shopping_basket' },
                { id: 'shipping', label: 'التوصيل', icon: 'local_shipping' },
                { id: 'payment', label: 'الدفع', icon: 'payments' }
              ].reverse().map((s, idx) => (
                <React.Fragment key={s.id}>
                  <div className={`flex flex-col items-center gap-1.5 ${step === s.id ? 'text-primary' : 'text-white/30'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${step === s.id ? 'border-primary bg-primary/10 scale-110' : 'border-white/10'}`}>
                      <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{s.label}</span>
                  </div>
                  {idx < 2 && (
                    <div className={`h-[2px] flex-1 mx-2 rounded-full transition-all ${
                      (idx === 1 && (step === 'shipping' || step === 'payment')) || (idx === 0 && step === 'payment') 
                      ? 'bg-primary' : 'bg-white/10'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {step === 'cart' && (
            <div className="p-6 md:p-8 space-y-8 animate-in slide-in-from-left-4 duration-500">
              
              {/* Enhanced Suggestions Row */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 px-1 justify-end">
                  <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-400">اقتراحاتنا لك اليوم</h4>
                  <span className="material-symbols-outlined text-primary text-lg fill-1">auto_awesome</span>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 justify-start flex-row-reverse">
                  {recommendedItems.map(p => (
                    <button 
                      key={p.id} 
                      onClick={() => setActiveProductId(p.id)}
                      className={`flex-none w-28 text-center transition-all ${activeProductId === p.id ? 'scale-105' : 'opacity-50 hover:opacity-100'}`}
                    >
                      <div className={`aspect-square rounded-2xl overflow-hidden mb-2 border-2 transition-all ${activeProductId === p.id ? 'border-primary shadow-xl shadow-primary/20' : 'border-gray-100'}`}>
                        <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
                      </div>
                      <span className="text-[10px] font-black uppercase truncate block px-1 text-gray-700">{p.name}</span>
                      <span className="text-[9px] font-bold text-primary">${p.price.toFixed(2)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selection Interface */}
              <div className="bg-gray-50 rounded-[2.5rem] p-6 border border-gray-100 shadow-inner">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex-1 text-right">
                    <h5 className="font-black text-xl text-gray-900 leading-tight mb-1">{activeProduct.name}</h5>
                    <p className="text-primary font-black text-base">${activeProduct.price.toFixed(2)}</p>
                    <p className="text-[11px] text-gray-400 mt-3 line-clamp-2 leading-relaxed font-medium">{activeProduct.desc}</p>
                  </div>
                  <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-md border-4 border-white bg-white shrink-0">
                    <img src={activeProduct.image} className="w-full h-full object-cover" alt={activeProduct.name} />
                  </div>
                </div>

                <div className="flex items-center justify-between bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                  <button 
                    onClick={() => updateQuantity(activeProductId, activeInCart ? 0 : 1)} 
                    className={`h-12 px-10 rounded-xl font-black text-[12px] uppercase tracking-widest transition-all ${activeInCart ? 'bg-red-50 text-red-500' : 'bg-primary text-white shadow-lg'}`}
                  >
                    {activeInCart ? 'إزالة من السلة' : 'أضف للطلب'}
                  </button>
                  <div className="flex items-center gap-4 px-3">
                    <button onClick={() => updateQuantity(activeProductId, 1)} className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-green-600 transition-colors border border-gray-100">
                      <span className="material-symbols-outlined text-xl">add</span>
                    </button>
                    <span className="font-black text-xl w-8 text-center text-gray-900">{activeInCart?.quantity || 0}</span>
                    <button onClick={() => updateQuantity(activeProductId, -1)} className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors border border-gray-100">
                      <span className="material-symbols-outlined text-xl">remove</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Total and Checkout Action */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <button 
                  disabled={cart.length === 0}
                  onClick={() => setStep('shipping')}
                  className="h-16 px-12 bg-[#221a10] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[12px] shadow-xl hover:bg-black transition-all flex items-center gap-3 disabled:opacity-30 disabled:grayscale"
                >
                  الخطوة التالية
                  <span className="material-symbols-outlined text-sm rotate-180">arrow_forward</span>
                </button>
                <div className="text-right">
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">الإجمالي المستحق</p>
                  <p className="text-4xl font-black text-gray-900 tracking-tighter">${cartTotal}</p>
                </div>
              </div>
            </div>
          )}

          {step === 'shipping' && (
            <div className="p-6 md:p-8 space-y-6 animate-in slide-in-from-left-4 duration-500">
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[12px] font-black uppercase tracking-widest text-gray-400 px-1 flex justify-between">
                    <span>الاسم الكامل للتوصيل *</span>
                  </label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="مثال: أحمد خالد"
                    className="w-full h-14 bg-gray-50 border-gray-100 rounded-2xl px-6 font-bold text-sm focus:ring-primary focus:border-primary transition-all text-right" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-black uppercase tracking-widest text-gray-400 px-1">رقم التواصل (الجوال) *</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="05xxxxxxxx"
                    className="w-full h-14 bg-gray-50 border-gray-100 rounded-2xl px-6 font-bold text-sm focus:ring-primary focus:border-primary transition-all text-right" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-black uppercase tracking-widest text-gray-400 px-1">عنوان التوصيل بالتفصيل *</label>
                  <textarea 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="الحي، اسم الشارع، رقم المنزل أو المعلم البارز..."
                    className="w-full h-32 bg-gray-50 border-gray-100 rounded-2xl p-6 font-bold text-sm focus:ring-primary focus:border-primary resize-none transition-all text-right" 
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <button 
                  onClick={() => setStep('payment')}
                  disabled={!isFormValid}
                  className={`flex-[2] h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-[12px] shadow-xl transition-all flex items-center justify-center gap-3 ${
                    isFormValid ? 'bg-[#221a10] text-white hover:bg-black scale-105' : 'bg-gray-100 text-gray-300 cursor-not-allowed opacity-60'
                  }`}
                >
                  المتابعة للدفع
                  <span className="material-symbols-outlined text-sm">payments</span>
                </button>
                <button onClick={() => setStep('cart')} className="flex-1 h-16 rounded-2xl border-2 border-gray-100 font-black uppercase tracking-widest text-[11px] text-gray-400 hover:bg-gray-50 transition-all">العودة للسلة</button>
              </div>
            </div>
          )}

          {step === 'payment' && (
            <div className="p-10 md:p-12 space-y-8 animate-in slide-in-from-left-4 duration-500">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-primary/20">
                  <span className="material-symbols-outlined text-4xl">verified_user</span>
                </div>
                <h4 className="text-2xl font-black tracking-tight text-gray-900">تأكيد الدفع والطلب</h4>
                <p className="text-[13px] text-gray-400 max-w-sm mx-auto font-medium leading-relaxed">أنت الآن في المرحلة الأخيرة. سيتم تحويلك لبوابة PayPal الآمنة لإتمام عملية الشراء.</p>
              </div>

              <div className="bg-gray-50 rounded-[3rem] p-8 border border-gray-100 shadow-inner">
                <div className="flex justify-between items-center mb-8 px-2">
                  <span className="text-4xl font-black text-gray-900 tracking-tighter">${cartTotal}</span>
                  <span className="text-[12px] font-black uppercase text-gray-400 tracking-widest">المجموع النهائي</span>
                </div>
                
                <button 
                  onClick={handlePayPalPay}
                  disabled={isProcessing}
                  className="w-full h-16 bg-[#ffc439] hover:bg-[#f4bb33] transition-all rounded-2xl shadow-xl flex items-center justify-center gap-4 relative overflow-hidden group active:scale-95 border-b-4 border-[#e2af32]"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-[#003087] border-t-transparent rounded-full animate-spin" />
                      <span className="text-[#003087] font-black text-sm uppercase tracking-widest">جاري معالجة الدفع...</span>
                    </div>
                  ) : (
                    <>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-7" alt="PayPal" />
                      <span className="text-[#003087] font-black text-sm uppercase tracking-[0.2em] ml-1">دفع آمن بواسطة PayPal</span>
                    </>
                  )}
                </button>
                <div className="mt-6 flex items-center justify-center gap-4 opacity-40 grayscale">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-4" alt="Visa" />
                </div>
              </div>

              <button 
                onClick={() => setStep('shipping')}
                className="w-full text-center text-[11px] font-black uppercase tracking-widest text-gray-300 hover:text-primary transition-colors flex items-center justify-center gap-2"
              >
                تغيير عنوان التوصيل
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
          )}

          {step === 'success' && (
            <div className="p-16 text-center flex flex-col items-center gap-10 bg-white animate-in zoom-in-95 duration-700 h-full justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="w-32 h-32 bg-green-50 text-green-500 rounded-full flex items-center justify-center border border-green-100 shadow-inner relative z-10 animate-bounce">
                  <span className="material-symbols-outlined text-7xl font-black">check_circle</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-black text-gray-900 tracking-tight">تم استلام طلبك!</h3>
                <p className="text-gray-400 text-base max-w-sm mx-auto leading-relaxed">شكراً لثقتك بنا يا <span className="text-primary font-black">{formData.name}</span>. مخبوزاتك الطازجة يتم تجهيزها الآن لتصلك في أقرب وقت.</p>
                <div className="bg-gray-50 px-8 py-5 rounded-[2rem] border border-dashed border-gray-200 mt-8 font-mono text-[12px] text-gray-500 flex flex-col items-center gap-2 shadow-sm">
                   <span className="font-black text-gray-300 tracking-widest uppercase">رقم تتبع الطلب</span>
                   <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">SNBL-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                </div>
              </div>
              <button onClick={onClose} className="bg-[#221a10] text-white font-black h-18 px-20 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-[12px] border-b-4 border-black">العودة للمتجر الرئيسي</button>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ee9d2b; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default OrderModal;
