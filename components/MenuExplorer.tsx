
import React, { useState, useMemo } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tags: string[];
  desc: string;
  category: 'Bread' | 'Pastry' | 'Bundle';
  isRecommended?: boolean;
}

const ALL_PRODUCTS: Product[] = [
  { id: '1', name: 'رغيف ساوردو كلاسيك', price: 8.00, category: 'Bread', tags: ['حرفي', 'طبيعي'], isRecommended: true, desc: 'مخمر طبيعياً لمدة 24 ساعة باستخدام بادئنا المنزلي ودقيق القمح العضوي الفاخر.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNxyIWIBdP261S9L5WxE70aQ3q2jmrGlcAoH-GaRMyX0Dz6IF2hVnSnB3wn145zxAPWorXTQfboh7a_5_eEI9ndtZEX2ZNtXh4SaBgABFnW3VIMDU8aO_iC8m5R8o8jll5bTSJNI85r4CZSYEh8OwPv0IvTs1szt7_2N2vP6pjB21oIEbuNcHVDFTRpuvZRLD0L1VYcAaTnfOasBiiZdx4aiJYmEBc1GnuDlhK2r6vCPBvvPm-H_CRTdobQblmNNKLAw0s4KbGPNU' },
  { id: '2', name: 'كرواسون الزبدة', price: 4.50, category: 'Pastry', tags: ['الأكثر مبيعاً', 'فرنسي'], desc: 'طبقات فوق طبقات من الزبدة الفاخرة المخبوزة حتى اللون الذهبي والقوام الهش.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3erHM33d2Wh8jPskngU7Lts3XDPozTTkxpfD2y2ARBjRnAQJwdJy_eoUk_ucxUXM_zrqYfgs1v27bPFIxSSTBfc8ixCdOf1GI76ALP64HDfw2AzW83Sp2-4txwEN4vG2ZaxXKvEQOsIaI71cGtruf63KV9dKWgMqUHeju9-P6q7DAHnXcY2fhCmlUhF9aGOd0J4XgAMPfSe6mOX1FcMaMMIBW9xUlYry6gq9uUD_wiT3EthSeQxwxpSX9niELwIahN44HyGe2l-o' },
  { id: '3', name: 'مافن الشوكولاتة', price: 4.00, category: 'Pastry', tags: ['حلويات', 'غني'], desc: 'مصنوع من قطع شوكولاتة بلجيكية داكنة 70% مع لمسة خفيفة من الإسبريسو.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5eoNiuMejMBkF7LChjVlg75atE_NoCHk2LjNJp4OSP4NbhKBXG5DPzKWd4G-9pydJk-NbMS6bv-Y_j3j5fspK-9Xr0BYnmzu3wY5v8l3RpZtOLWen8RCtnWH0Ra-5njUlkklzJDdNaoLsfsBP6APloy8-IYTSIPqwCWY_HY8y3uTlH2R1IBiUjw4GLueJbNcB0VFbo6ZfpE4jDr9KiL7_CIFEUEzHZADe-9khdWDZkbBre_2arSldpxUOaBxmtRGF8iTKJbCscZY' },
  { id: '4', name: 'باجل السمسم', price: 3.50, category: 'Bread', tags: ['نيويورك', 'يومي'], desc: 'مغلي في ماء الشعير ومخبوز على الحجر للحصول على القشرة المثالية والملمس الطري.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuewYgzi3nOOnSfX9pojXnj8-EIbcelXSLUBaFTgVXwzkNV1KIAqzFqZtfuIdY36j0ooulxj0KkWRGsj3sLPwHDIItyX4_sFrA8bsrLZBUnjrcnO_kT931d2UxdfZWOQ-haas4ARQ-MiCwQGDBDhd7TiH_O7DSG-sa9upp2WX6rJyy9CytRZpYOiZ2DapFI3UcEIpT-mjdKjKuEEO-xr1u9jnu5N_vEEoapIGf0ak6HGgBFtGSt9ZIC5zJ1Enz76atSqKv9WLBY8s' },
  { id: '6', name: 'كرواسون اللوز', price: 5.50, category: 'Pastry', tags: ['مميز', 'حلو'], desc: 'كرواسون مخبوز مرتين ومحشو بكريمة اللوز الغنية ومزين برقائق اللوز المحمصة.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs-kSJAs_mB-kyVesW9eHaxRTc2oWR3EvvpFxIRdGFw2OcD0Hf8jpmo0mlVK18BuTilySgJVzm-3xDp9ze-LFYRIVjoxeK1Ln8A_iM4Ko2Ge3VspcITHDp_IKbVqqJYt2qzKdTYGbXG649tbDtM1CRH0aQk5unv6Y7dtjlTqkeIuTrHeEI4824o3v-CBiSFWB8Z-7BNCHTeGzcCl2Wv1Ea1cD8PouwHzblKeeVS84JAwDdhsT_5Vbwne1VHgOXaW3P0DqqaP-UdMs' },
  { id: '8', name: 'رغيف الزيتون وإكليل الجبل', price: 9.00, category: 'Bread', tags: ['مالح', 'حرفي'], isRecommended: true, desc: 'ساوردو مستوحى من مطبخ البحر المتوسط مع زيتون كالاماتا وإكليل الجبل الطازج.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNxyIWIBdP261S9L5WxE70aQ3q2jmrGlcAoH-GaRMyX0Dz6IF2hVnSnB3wn145zxAPWorXTQfboh7a_5_eEI9ndtZEX2ZNtXh4SaBgABFnW3VIMDU8aO_iC8m5R8o8jll5bTSJNI85r4CZSYEh8OwPv0IvTs1szt7_2N2vP6pjB21oIEbuNcHVDFTRpuvZRLD0L1VYcAaTnfOasBiiZdx4aiJYmEBc1GnuDlhK2r6vCPBvvPm-H_CRTdobQblmNNKLAw0s4KbGPNU' },
  { id: '12', name: 'ساوردو القمح الكامل', price: 9.50, category: 'Bread', tags: ['عضوي', 'صحي'], desc: 'ساوردو حبوب كاملة 100%. غني بالألياف وله مذاق عميق وقشرة بنية مميزة.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNxyIWIBdP261S9L5WxE70aQ3q2jmrGlcAoH-GaRMyX0Dz6IF2hVnSnB3wn145zxAPWorXTQfboh7a_5_eEI9ndtZEX2ZNtXh4SaBgABFnW3VIMDU8aO_iC8m5R8o8jll5bTSJNI85r4CZSYEh8OwPv0IvTs1szt7_2N2vP6pjB21oIEbuNcHVDFTRpuvZRLD0L1VYcAaTnfOasBiiZdx4aiJYmEBc1GnuDlhK2r6vCPBvvPm-H_CRTdobQblmNNKLAw0s4KbGPNU' },
  { id: '14', name: 'رغيف القوة المتعدد الحبوب', price: 10.00, category: 'Bread', tags: ['بذور', 'صحي'], isRecommended: true, desc: 'مليء ببذور اليقطين وعباد الشمس والكتان. خبز مغذي جداً.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuewYgzi3nOOnSfX9pojXnj8-EIbcelXSLUBaFTgVXwzkNV1KIAqzFqZtfuIdY36j0ooulxj0KkWRGsj3sLPwHDIItyX4_sFrA8bsrLZBUnjrcnO_kT931d2UxdfZWOQ-haas4ARQ-MiCwQGDBDhd7TiH_O7DSG-sa9upp2WX6rJyy9CytRZpYOiZ2DapFI3UcEIpT-mjdKjKuEEO-xr1u9jnu5N_vEEoapIGf0ak6HGgBFtGSt9ZIC5zJ1Enz76atSqKv9WLBY8s' },
  { id: '15', name: 'باقة شاي المساء', price: 29.99, category: 'Bundle', tags: ['محدود', 'فاخر'], desc: 'المجموعة المثالية للمشاركة: 4 مافن، 4 تارت، وتشكيلة من الشاي الفاخر.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3erHM33d2Wh8jPskngU7Lts3XDPozTTkxpfD2y2ARBjRnAQJwdJy_eoUk_ucxUXM_zrqYfgs1v27bPFIxSSTBfc8ixCdOf1GI76ALP64HDfw2AzW83Sp2-4txwEN4vG2ZaxXKvEQOsIaI71cGtruf63KV9dKWgMqUHeju9-P6q7DAHnXcY2fhCmlUhF9aGOd0J4XgAMPfSe6mOX1FcMaMMIBW9xUlYry6gq9uUD_wiT3EthSeQxwxpSX9niELwIahN44HyGe2l-o' },
  { id: '5', name: 'باقة الإفطار العائلية', price: 24.99, category: 'Bundle', tags: ['عرض خاص', 'عائلي'], desc: 'تجربة الإفطار القصوى: رغيفين ساوردو، 4 كرواسون، و2 قهوة فاخرة.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3erHM33d2Wh8jPskngU7Lts3XDPozTTkxpfD2y2ARBjRnAQJwdJy_eoUk_ucxUXM_zrqYfgs1v27bPFIxSSTBfc8ixCdOf1GI76ALP64HDfw2AzW83Sp2-4txwEN4vG2ZaxXKvEQOsIaI71cGtruf63KV9dKWgMqUHeju9-P6q7DAHnXcY2fhCmlUhF9aGOd0J4XgAMPfSe6mOX1FcMaMMIBW9xUlYry6gq9uUD_wiT3EthSeQxwxpSX9niELwIahN44HyGe2l-o' },
];

interface MenuExplorerProps {
  onClose: () => void;
  onBuyItem: (id: string) => void;
}

const MenuExplorer: React.FC<MenuExplorerProps> = ({ onClose, onBuyItem }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Bread' | 'Pastry' | 'Bundle'>('All');

  const filteredProducts = useMemo(() => {
    if (activeTab === 'All') return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter(p => p.category === activeTab);
  }, [activeTab]);

  const tabLabels: Record<string, string> = {
    'All': 'الكل',
    'Bread': 'المخبوزات',
    'Pastry': 'الحلويات',
    'Bundle': 'الباقات'
  };

  return (
    <div className="fixed inset-0 z-[110] bg-white flex flex-col animate-in slide-in-from-bottom duration-500 overflow-hidden text-right">
      {/* Premium Header */}
      <div className="bg-[#221a10] text-white p-6 md:px-12 md:py-10 flex flex-col gap-8 sticky top-0 z-10 shadow-2xl">
        <div className="flex justify-between items-center">
          <button 
            onClick={onClose}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all hover:-rotate-90 duration-500 group"
          >
            <span className="material-symbols-outlined text-3xl text-white/50 group-hover:text-white">close</span>
          </button>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter">قائمة المأكولات</h2>
              <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] opacity-80 mt-1">طازجة من الفرن إلى مائدتكم</p>
            </div>
            <div className="bg-primary p-4 rounded-[1.5rem] shadow-xl shadow-primary/20">
              <span className="material-symbols-outlined text-4xl font-light">menu_book</span>
            </div>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar justify-start md:justify-end flex-row-reverse">
          {['All', 'Bread', 'Pastry', 'Bundle'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-10 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap ${
                activeTab === tab 
                ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105' 
                : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-[#fcfaf8] custom-scrollbar">
        <div className="max-w-[1400px] mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
              {filteredProducts.map((p) => (
                <div 
                  key={p.id} 
                  className={`bg-white rounded-[3rem] overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(238,157,43,0.12)] transition-all duration-700 group border flex flex-col h-[550px] ${
                    p.isRecommended ? 'border-primary/40 ring-4 ring-primary/5' : 'border-gray-100'
                  }`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                    />
                    
                    {p.isRecommended && (
                       <div className="absolute top-5 left-5 z-20">
                         <div className="relative">
                           <div className="absolute inset-0 bg-primary/40 rounded-full blur-lg animate-pulse"></div>
                           <div className="relative bg-white/95 backdrop-blur-md w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border border-primary/20">
                             <span className="material-symbols-outlined text-primary fill-1 text-2xl animate-[spin_10s_linear_infinite]">star</span>
                           </div>
                         </div>
                       </div>
                    )}

                    <div className="absolute top-6 right-6 flex flex-wrap gap-2 justify-end">
                      {p.tags.map(tag => (
                        <span key={tag} className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-primary shadow-sm border border-gray-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-5 gap-4">
                      <div className="flex flex-col items-start">
                        <span className="text-3xl font-black text-primary tracking-tighter">${p.price.toFixed(2)}</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">السعر الحالي</span>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 group-hover:text-primary transition-colors leading-tight">{p.name}</h3>
                    </div>
                    <p className="text-gray-400 text-[13px] font-medium leading-relaxed mb-8 flex-1 line-clamp-3">
                      {p.desc}
                    </p>
                    <button 
                      onClick={() => onBuyItem(p.id)}
                      className="w-full bg-[#221a10] text-white h-18 rounded-[1.5rem] font-black text-[12px] uppercase tracking-[0.25em] hover:bg-primary hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 flex items-center justify-center gap-4 active:scale-95 border-b-4 border-black group-hover:border-primary/40"
                    >
                      أضف لطلبك الآن
                      <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-96 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-gray-100 text-[150px] mb-6">search_off</span>
              <h3 className="text-3xl font-black text-gray-400 tracking-tight">لم نجد أي نتائج في هذا القسم</h3>
              <button onClick={() => setActiveTab('All')} className="text-primary font-black uppercase tracking-[0.3em] text-xs mt-6 hover:underline flex items-center gap-2">
                 العودة لعرض كافة المنتجات
                 <span className="material-symbols-outlined">refresh</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ee9d2b; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default MenuExplorer;
