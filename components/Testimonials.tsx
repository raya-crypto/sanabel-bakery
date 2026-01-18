
import React from 'react';

const reviews = [
  {
    name: 'سارة جاسم',
    role: 'عميلة دائمة',
    content: '"خبز الساوردو هنا مذهل حقاً. يذكرني بمخابز باريس التقليدية. أفضل بداية لصباح يوم الجمعة!"',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4v9NmuAdGoA4rTmEymJQMugeGdN7N-vDUbXqXOfC3Y0dYHN8h8ixcRv-Eb9YOMwK9OVJry-ecFAM3S3X33oExpwFpIQuuFXO5a3bzkkmLIgMKM0UMCYNfZ8LeMwYqUshpM3iAHEcrNq0T3NbfGFw3soemxC8Enqv3CQI8P33vwh7phi6Ko99lyBQyycrq0daG60Gtv51qoORyTrP14roI57qy3AP0DKPxrkFgokRRGWjX0Eu-eWLBNkHNDJOHB2yYtqR-48eLY0Q'
  },
  {
    name: 'فيصل المحمد',
    role: 'مدون طعام',
    content: '"الكرواسون لديهم هش وغني بالزبدة بشكل مثالي. طلبت صندوقاً للمكتب وانتهى في دقائق. أنصح به بشدة!"',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvzrUqHTQbjnOPBmgaCatkltK75sWWGmngnAnGmK8r01i21YJWjTESX0c638itFiSYt9u5_poFgQeTVhNs3dwVmTsEndsRTnwGAmyTLGkRjYpKuM1wjN32kkWVsDuWn6g0GgtMTe-t2SF3Z87laYe73kkkjUeXRg9Pbb2m-3QzW6uWe8NMx_wDfMwF_TT1fmCtDrRrGNRSvwdfjAxvKplWp5aAATVv7R4EP83Y-aIHQWnca-64di8VtgtXTZY2vE63p-4TrZPgg3c'
  },
  {
    name: 'ليلى الرويلي',
    role: 'مرشدة محلية',
    content: '"جوهرة خفية في الحي. القهوة رائعة، لكن الدنماركي باللوز هو النجم الحقيقي. طاقم العمل ودود للغاية."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgu2A0wGfCsN83avJqWwslYxqo8jff20ivvYZUZQAWX54sROM4Z_hL4cl26YhWuCOWb8gEd6j6x8d5ioEJskVacABcd8BdK6o3KHJVvQckXz-mcj2xvwENd--ljcnPkQ40NhMj5U9Kth13hqWX2mwcTIu1UPg-p3VjppaecEQnXsrDQeI6Z_Py4k0Wd3suhD2O9mOPcAko1rpSnLRk0tVTgtoIei6XY4lc3n8d6bkXizr6L6N0LXOt6_CwzPLFtO90TNTRHcQIV-o'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="max-w-[1200px] mx-auto px-6 py-24 scroll-mt-24 text-right">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">آراء جيراننا</span>
        <h2 className="text-3xl md:text-5xl font-bold">ماذا يقول عشاق سنابل</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6">
            <div className="flex text-primary justify-end">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-xl">star</span>
              ))}
            </div>
            <p className="text-lg text-secondary-text-light italic leading-relaxed">
              {rev.content}
            </p>
            <div className="flex items-center gap-4 mt-auto justify-end">
              <div className="text-right">
                <p className="font-bold text-text-light">{rev.name}</p>
                <p className="text-sm text-secondary-text-light">{rev.role}</p>
              </div>
              <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
