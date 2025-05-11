
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Projects = () => {
  const projects = [
    {
      id: 'caravan-project',
      title: 'مشروع كرفانات سكنية',
      image: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'تصميم وتنفيذ كرفانات سكنية متكاملة لمشروع إسكان العاملين',
      location: 'الرياض، المملكة العربية السعودية',
      client: 'شركة الإنشاءات السعودية'
    },
    {
      id: 'shelter-project',
      title: 'مشروع ملاجئ متنقلة',
      image: 'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'تصميم وتوريد ملاجئ متنقلة لمواقع العمل الميدانية',
      location: 'جدة، المملكة العربية السعودية',
      client: 'شركة المشاريع العربية'
    },
    {
      id: 'office-project',
      title: 'مكاتب إدارية متنقلة',
      image: 'https://images.unsplash.com/photo-1543590172-e2fb4b3d1ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'تجهيز مكاتب إدارية متنقلة لموقع مشروع إنشائي',
      location: 'الدمام، المملكة العربية السعودية',
      client: 'مؤسسة التطوير العمراني'
    },
    {
      id: 'food-truck-project',
      title: 'عربات طعام متنقلة',
      image: 'https://images.unsplash.com/photo-1534513259966-c921b31ba599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'تصميم وتنفيذ عربات طعام متنقلة لمهرجان المأكولات',
      location: 'المدينة المنورة، المملكة العربية السعودية',
      client: 'هيئة تنظيم المهرجانات'
    },
    {
      id: 'kiosk-project',
      title: 'أكشاك تجارية',
      image: 'https://images.unsplash.com/photo-1583938148905-2a8ccfccceb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'تصميم وتنفيذ أكشاك تجارية لمجمع تسوق مفتوح',
      location: 'الرياض، المملكة العربية السعودية',
      client: 'شركة تطوير المشاريع التجارية'
    },
    {
      id: 'cafe-project',
      title: 'كافيهات متنقلة',
      image: 'https://images.unsplash.com/photo-1623240644272-b5d2390e23d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'تجهيز وحدات كافيه متنقلة لسلسلة مقاهي شهيرة',
      location: 'مكة المكرمة، المملكة العربية السعودية',
      client: 'شركة مذاق العربية للمطاعم'
    }
  ];

  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Header />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">مشاريعنا</h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              استعرض أبرز المشاريع التي نفذناها في مختلف أنحاء المملكة العربية السعودية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                to={`/projects/${project.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{project.location}</span>
                    <span>{project.client}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
