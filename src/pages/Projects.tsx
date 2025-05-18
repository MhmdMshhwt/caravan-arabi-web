import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects = () => {
  const projects = [
    {
      id: "caravan-project",
      title: "مشروع كرفانات سكنية",
      image:
        "https://images.unsplash.com/photo-1652946336807-bd35785ef268?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "تصميم وتنفيذ كرفانات سكنية متكاملة لمشروع إسكان العاملين",
      location: "الرياض، المملكة العربية السعودية",
      client: "شركة الإنشاءات السعودية",
    },
    {
      id: "shelter-project",
      title: "مشروع ملاجئ متنقلة",
      image:
        "https://images.unsplash.com/photo-1658929904357-3804be4b4de5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "تصميم وتوريد ملاجئ متنقلة لمواقع العمل الميدانية",
      location: "جدة، المملكة العربية السعودية",
      client: "شركة المشاريع العربية",
    },
    {
      id: "office-project",
      title: "مكاتب إدارية متنقلة",
      image:
        "https://images.unsplash.com/photo-1531973486364-5fa64260d75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "تجهيز مكاتب إدارية متنقلة لموقع مشروع إنشائي",
      location: "الدمام، المملكة العربية السعودية",
      client: "مؤسسة التطوير العمراني",
    },
    {
      id: "food-truck-project",
      title: "عربات طعام متنقلة",
      image:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      description: "تصميم وتنفيذ عربات طعام متنقلة لمهرجان المأكولات",
      location: "المدينة المنورة، المملكة العربية السعودية",
      client: "هيئة تنظيم المهرجانات",
    },
    {
      id: "kiosk-project",
      title: "أكشاك تجارية",
      image:
        "https://images.unsplash.com/photo-1717183854499-9c0a422695e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "تصميم وتنفيذ أكشاك تجارية لمجمع تسوق مفتوح",
      location: "الرياض، المملكة العربية السعودية",
      client: "شركة تطوير المشاريع التجارية",
    },
    {
      id: "cafe-project",
      title: "كافيهات متنقلة",
      image:
        "https://images.unsplash.com/photo-1693039434590-5eaee1a3de29?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "تجهيز وحدات كافيه متنقلة لسلسلة مقاهي شهيرة",
      location: "مكة المكرمة، المملكة العربية السعودية",
      client: "شركة مذاق العربية للمطاعم",
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
