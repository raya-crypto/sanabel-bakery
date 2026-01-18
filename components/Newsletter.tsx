
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-primary/5 py-20">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto text-primary shadow-sm mb-8">
          <span className="material-symbols-outlined text-4xl">mail</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">انضم لنادي الخبز</h2>
        <p className="text-secondary-text-light text-lg mb-10">
          احصل على أخبار مخبوزاتنا الطازجة، عروض حصرية، وقطعة كوكيز مجانية في عيد ميلادك!
        </p>
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="بريدك الإلكتروني" 
            className="flex-1 h-14 rounded-xl border border-gray-200 px-6 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-lg transition-all"
            required 
          />
          <button className="h-14 px-10 rounded-xl bg-primary text-white font-bold text-lg hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg">
            اشترك الآن
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
