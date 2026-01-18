
import React from 'react';

interface MenuGridProps {
  onOrderClick: (productId: string) => void;
  onExploreFullMenu: () => void;
}

const chefPicks = [
  {
    id: '1',
    name: 'رغيف الساوردو الكلاسيكي',
    price: '$8.00',
    tag: 'فخر الخباز',
    isRecommended: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNxyIWIBdP261S9L5WxE70aQ3q2jmrGlcAoH-GaRMyX0Dz6IF2hVnSnB3wn145zxAPWorXTQfboh7a_5_eEI9ndtZEX2ZNtXh4SaBgABFnW3VIMDU8aO_iC8m5R8o8jll5bTSJNI85r4CZSYEh8OwPv0IvTs1szt7_2N2vP6pjB21oIEbuNcHVDFTRpuvZRLD0L1VYcAaTnfOasBiiZdx4aiJYmEBc1GnuDlhK2r6vCPBvvPm-H_CRTdobQblmNNKLAw0s4KbGPNU'
  },
  {
    id: '8',
    name: 'خبز الزيتون وإكليل الجبل',
    price: '$9.00',
    tag: 'سر الشيف',
    isRecommended: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNxyIWIBdP261S9L5WxE70aQ3q2jmrGlcAoH-GaRMyX0Dz6IF2hVnSnB3wn145zxAPWorXTQfboh7a_5_eEI9ndtZEX2ZNtXh4SaBgABFnW3VIMDU8aO_iC8m5R8o8jll5bTSJNI85r4CZSYEh8OwPv0IvTs1szt7_2N2vP6pjB21oIEbuNcHVDFTRpuvZRLD0L1VYcAaTnfOasBiiZdx4aiJYmEBc1GnuDlhK2r6vCPBvvPm-H_CRTdobQblmNNKLAw0s4KbGPNU'
  }
];

const dailyBakes = [
  { id: '2', name: 'كرواسون الزبدة', price: '$4.50', description: 'وصفة فرنسية كلاسيكية.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3erHM33d2Wh8jPskngU7Lts3XDPozTTkxpfD2y2ARBjRnAQJwdJy_eoUk_ucxUXM_zrqYfgs1v27bPFIxSSTBfc8ixCdOf1GI76ALP64HDfw2AzW83Sp2-4txwEN4vG2ZaxXKvEQOsIaI71cGtruf63KV9dKWgMqUHeju9-P6q7DAHnXcY2fhCmlUhF9aGOd0J4XgAMPfSe6mOX1FcMaMMIBW9xUlYry6gq9uUD_wiT3EthSeQxwxpSX9niELwIahN44HyGe2l-o' },
  { id: '3', name: 'مافن الشوكولاتة', price: '$4.00', description: 'غني، طري، ولا يقاوم.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5eoNiuMejMBkF7LChjVlg75atE_NoCHk2LjNJp4OSP4NbhKBXG5DPzKWd4G-9pydJk-NbMS6bv-Y_j3j5fspK-9Xr0BYnmzu3wY5v8l3RpZtOLWen8RCtnWH0Ra-5njUlkklzJDdNaoLsfsBP6APloy8-IYTSIPqwCWY_HY8y3uTlH2R1IBiUjw4GLueJbNcB0VFbo6ZfpE4jDr9KiL7_CIFEUEzHZADe-9khdWDZkbBre_2arSldpxUOaBxmtRGF8iTKJbCscZY' },
  { id: '4', name: 'باجل السمسم', price: '$3.50', description: 'طعم أصيل وملمس مثالي.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuewYgzi3nOOnSfX9pojXnj8-EIbcelXSLUBaFTgVXwzkNV1KIAqzFqZtfuIdY36j0ooulxj0KkWRGsj3sLPwHDIItyX4_sFrA8bsrLZBUnjrcnO_kT931d2UxdfZWOQ-haas4ARQ-MiCwQGDBDhd7TiH_O7DSG-sa9upp2WX6rJyy9CytRZpYOiZ2DapFI3UcEIpT-mjdKjKuEEO-xr1u9jnu5N_vEEoapIGf0ak6HGgBFtGSt9ZIC5zJ1Enz76atSqKv9WLBY8s' },
  { id: '6', name: 'كرواسون اللوز', price: '$5.50', description: 'مخبوز مرتين مع كريمة اللوز.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs-kSJAs_mB-kyVesW9eHaxRTc2oWR3EvvpFxIRdGFw2OcD0Hf8jpmo0mlVK18BuTilySgJVzm-3xDp9ze-LFYRIVjoxeK1Ln8A_iM4Ko2Ge3VspcITHDp_IKbVqqJYt2qzKdTYGbXG649tbDtM1CRH0aQk5unv6Y7dtjlTqkeIuTrHeEI4824o3v-CBiSFWB8Z-7BNCHTeGzcCl2Wv1Ea1cD8PouwHzblKeeVS84JAwDdhsT_5Vbwne1VHgOXaW3P0DqqaP-UdMs' }
];

const MenuGrid: React.FC<MenuGridProps> = ({ onOrderClick, onExploreFullMenu }) => {
  return (
    <section id="menu" className="max-w-[1200px] mx-auto px-6 py-24 scroll-mt-24">
      <div className="text-center mb-16">
        <span className="text-primary font-black text-xs tracking-[0.3em] uppercase mb-4 block">مختاراتنا اليدوية</span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">توصيات الخباز</h2>
        <p className="text-secondary-text-light mt-4 max-w-2xl mx-auto text-lg leading-relaxed font-bold">
          المخبوزات التي يحبها خبازونا أكثر من غيرها. تم اختيارها كل صباح لضمان أعلى جودة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {chefPicks.map((pick) => (
          <div 
            key={pick.id} 
            onClick={() => onOrderClick(pick.id)}
            className="group relative h-[450px] rounded-[3.5rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 hover:-translate-y-3"
          >
            <img src={pick.image} alt={pick.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            <div className="absolute top-8 right-8 flex items-center gap-3">
              <div className="bg-primary/90 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center shadow-xl border border-white/20">
                <span className="material-symbols-outlined text-white fill-1 text-2xl animate-pulse">star</span>
              </div>
              <span className="bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10">
                {pick.tag}
              </span>
            </div>

            <div className="absolute bottom-10 right-10 left-10 flex justify-between items-end">
              <div>
                <h3 className="text-white text-3xl font-black mb-1">{pick.name}</h3>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest">إصدار مميز</p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <span className="text-primary text-3xl font-black tracking-tighter">{pick.price}</span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[9px] font-black px-4 py-2 rounded-xl uppercase tracking-widest border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all">اطلب الآن</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <h3 className="text-2xl font-black tracking-tight uppercase text-gray-400">مخبوزات طازجة يومياً</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dailyBakes.map((product) => (
          <div key={product.id} className="group cursor-pointer" onClick={() => onOrderClick(product.id)}>
            <div className="aspect-square overflow-hidden rounded-[2.5rem] relative mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500 bg-gray-50 border border-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute bottom-4 left-4 bg-white text-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="material-symbols-outlined font-black">add_shopping_cart</span>
              </div>
            </div>
            <div className="space-y-1 px-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-black group-hover:text-primary transition-colors">{product.name}</h3>
                <span className="font-black text-primary">{product.price}</span>
              </div>
              <p className="text-gray-400 text-xs font-bold leading-relaxed line-clamp-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button 
          onClick={onExploreFullMenu}
          className="group flex flex-col items-center gap-4 text-xs font-black text-gray-800 uppercase tracking-[0.3em] hover:text-primary transition-all"
        >
          <div className="bg-white p-6 rounded-full group-hover:bg-primary group-hover:text-white transition-all shadow-xl border border-gray-100">
            <span className="material-symbols-outlined !text-4xl animate-bounce">keyboard_arrow_down</span>
          </div>
          استكشف القائمة الكاملة
        </button>
      </div>
    </section>
  );
};

export default MenuGrid;
