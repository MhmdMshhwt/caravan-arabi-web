
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects = () => {
  const projects = [
    {
      id: "caravan-project",
      title: "مشروع كرفانات سكنية",
      image: "https://images.unsplash.com/photo-1563783850023-077d97825802?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "تصميم وتنفيذ كرفانات سكنية متكاملة لمشروع إسكان العاملين",
      location: "الرياض، المملكة العربية السعودية",
      client: "شركة الإنشاءات السعودية",
    },
    {
      id: "fixed-units-project",
      title: "مشروع وحدات ثابتة",
      image: "https://images.unsplash.com/photo-1531973486364-5fa64260d75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "تجهيز وحدات ثابتة لمجمع سكني متكامل",
      location: "جدة، المملكة العربية السعودية",
      client: "شركة المشاريع العربية",
    },
    {
      id: "mobile-toilets-project",
      title: "مشروع حمامات متنقلة",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "توريد وتركيب حمامات متنقلة لمواقع العمل الميدانية",
      location: "الدمام، المملكة العربية السعودية",
      client: "مؤسسة التطوير العمراني",
    },
    {
      id: "ready-made-homes-project",
      title: "مشروع منازل جاهزة",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "تصميم وتنفيذ منازل جاهزة لمخيم سكني",
      location: "المدينة المنورة، المملكة العربية السعودية",
      client: "هيئة تنظيم المهرجانات",
    },
    {
      id: "guard-booths-project",
      title: "مشروع أكشاك حراسة",
      image: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "تجهيز أكشاك حراسة أمنية لمجمع تجاري",
      location: "الرياض، المملكة العربية السعودية",
      client: "شركة تطوير المشاريع التجارية",
    },
    {
      id: "mobile-fixed-restaurants-project",
      title: "مشروع مطاعم متنقلة وثابتة",
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      description: "تجهيز وحدات مطاعم متنقلة وثابتة لسلسلة مطاعم",
      location: "مكة المكرمة، المملكة العربية السعودية",
      client: "شركة مذاق العربية للمطاعم",
    },
    {
      id: "metal-fences-project",
      title: "مشروع أسوار معدنية",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "تركيب أسوار معدنية لمجمع صناعي",
      location: "الخبر، المملكة العربية السعودية",
      client: "الشركة الصناعية المتطورة",
    },
    {
      id: "cars-umbrellas-project",
      title: "مشروع مظلات عربيات",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "تركيب مظلات حماية للمركبات في مواقف السيارات",
      location: "أبها، المملكة العربية السعودية",
      client: "إدارة المرافق العامة",
    },
    {
      id: "containers-project",
      title: "مشروع حاويات تخزين",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "توريد حاويات تخزين متخصصة لمشروع لوجستي",
      location: "الجبيل، المملكة العربية السعودية",
      client: "شركة الخدمات اللوجستية",
    },
    {
      id: "metal-hangars-project",
      title: "مشروع هناجر معدنية",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "بناء هناجر معدنية للتخزين الصناعي",
      location: "ينبع، المملكة العربية السعودية",
      client: "الشركة الوطنية للصناعات",
    },
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
              استعرض أبرز المشاريع التي نفذناها في مختلف أنحاء المملكة العربية
              السعودية
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
