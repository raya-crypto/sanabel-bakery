
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-24 pb-10 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">bakery_dining</span>
              <h3 className="text-2xl font-bold">مخبز سنابل</h3>
            </div>
            <p className="text-secondary-text-light leading-relaxed font-bold">
              نخبز من القلب. نخدم مجتمعنا بمنتجات طازجة، عضوية، ومصنوعة يدوياً كل يوم.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">استكشف</h4>
            <nav className="flex flex-col gap-3 font-bold">
              <a href="#menu" className="text-secondary-text-light hover:text-primary transition-colors">القائمة</a>
              <a href="#offers" className="text-secondary-text-light hover:text-primary transition-colors">العروض</a>
              <a href="#story" className="text-secondary-text-light hover:text-primary transition-colors">قصتنا</a>
              <a href="#reviews" className="text-secondary-text-light hover:text-primary transition-colors">آراء العملاء</a>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">زرنا</h4>
            <div className="flex flex-col gap-4 text-secondary-text-light font-bold">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>شارع الخبازين 123،<br />مدينة الطعام، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>hello@sanabelbakery.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">أوقات العمل</h4>
            <div className="space-y-3 text-secondary-text-light font-bold">
              <div className="flex justify-between">
                <span>الإثنين - الجمعة</span>
                <span className="font-bold text-gray-900">7:00 ص - 7:00 م</span>
              </div>
              <div className="flex justify-between">
                <span>السبت</span>
                <span className="font-bold text-gray-900">8:00 ص - 6:00 م</span>
              </div>
              <div className="flex justify-between">
                <span>الأحد</span>
                <span className="font-bold text-gray-900">8:00 ص - 3:00 م</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-secondary-text-light font-bold">
            © 2024 مخبز سنابل. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
