
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  // In a real app, you would fetch this data from an API
  const projectsData = {
    'caravan-project': {
      title: 'مشروع كرفانات سكنية',
      description: 'تصميم وتنفيذ كرفانات سكنية متكاملة لمشروع إسكان العاملين في منطقة الرياض. تم تجهيز الكرفانات بكافة الخدمات الضرورية من أنظمة تكييف وتدفئة وشبكات صحية وكهربائية.',
      location: 'الرياض، المملكة العربية السعودية',
      client: 'شركة الإنشاءات السعودية',
      completionDate: '2022',
      images: [
        'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1543590172-e2fb4b3d1ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1534513259966-c921b31ba599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      features: [
        'مساحة سكنية مريحة تتسع لـ 4 أشخاص',
        'أنظمة تكييف وتدفئة متطورة',
        'نظام كهربائي متكامل',
        'عزل حراري ممتاز',
        'مقاومة للعوامل الجوية القاسية',
      ]
    },
    'shelter-project': {
      title: 'مشروع ملاجئ متنقلة',
      description: 'تصميم وتوريد ملاجئ متنقلة لمواقع العمل الميدانية في منطقة جدة. هذه الملاجئ مصممة لتوفير حماية من الظروف الجوية القاسية وتوفير مساحة آمنة ومريحة للعاملين.',
      location: 'جدة، المملكة العربية السعودية',
      client: 'شركة المشاريع العربية',
      completionDate: '2023',
      images: [
        'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1534513259966-c921b31ba599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1583938148905-2a8ccfccceb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      features: [
        'هيكل متين مقاوم للظروف الجوية',
        'عزل حراري وصوتي',
        'سهولة النقل والتركيب',
        'نظام إضاءة داخلي',
        'نوافذ خاصة للتهوية',
      ]
    },
    'office-project': {
      title: 'مكاتب إدارية متنقلة',
      description: 'تجهيز مكاتب إدارية متنقلة لموقع مشروع إنشائي في الدمام. تم تصميم المكاتب لتوفير بيئة عمل مريحة وعملية للإدارة والمهندسين في الموقع.',
      location: 'الدمام، المملكة العربية السعودية',
      client: 'مؤسسة التطوير العمراني',
      completionDate: '2022',
      images: [
        'https://images.unsplash.com/photo-1543590172-e2fb4b3d1ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1622876168001-7e5e45a41435?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      features: [
        'تجهيزات مكتبية كاملة',
        'شبكة اتصالات متكاملة',
        'أنظمة تكييف وتهوية',
        'إضاءة مناسبة للعمل المكتبي',
        'غرف اجتماعات مجهزة',
      ]
    },
    'food-truck-project': {
      title: 'عربات طعام متنقلة',
      description: 'تصميم وتنفيذ عربات طعام متنقلة لمهرجان المأكولات في المدينة المنورة. تم تجهيز العربات بكافة المعدات اللازمة لتحضير وتقديم الطعام بطريقة احترافية.',
      location: 'المدينة المنورة، المملكة العربية السعودية',
      client: 'هيئة تنظيم المهرجانات',
      completionDate: '2023',
      images: [
        'https://images.unsplash.com/photo-1534513259966-c921b31ba599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1543590172-e2fb4b3d1ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1623240644272-b5d2390e23d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      features: [
        'مطبخ مجهز بالكامل',
        'أنظمة تخزين وتبريد',
        'نظام صرف صحي',
        'تجهيزات عرض الطعام',
        'أنظمة سلامة وإطفاء حريق',
      ]
    },
    'kiosk-project': {
      title: 'أكشاك تجارية',
      description: 'تصميم وتنفيذ أكشاك تجارية لمجمع تسوق مفتوح في الرياض. تم تصميم الأكشاك بحيث تكون جذابة للزوار وعملية للبائعين.',
      location: 'الرياض، المملكة العربية السعودية',
      client: 'شركة تطوير المشاريع التجارية',
      completionDate: '2021',
      images: [
        'https://images.unsplash.com/photo-1583938148905-2a8ccfccceb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1534513259966-c921b31ba599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1623240644272-b5d2390e23d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1622876168001-7e5e45a41435?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      features: [
        'تصميم عصري جذاب',
        'مساحة عرض مناسبة',
        'إضاءة احترافية',
        'نظام تخزين مدمج',
        'سهولة النقل والتركيب',
      ]
    },
    'cafe-project': {
      title: 'كافيهات متنقلة',
      description: 'تجهيز وحدات كافيه متنقلة لسلسلة مقاهي شهيرة في مكة المكرمة. تم تجهيز الوحدات بأحدث معدات تحضير القهوة والمشروبات.',
      location: 'مكة المكرمة، المملكة العربية السعودية',
      client: 'شركة مذاق العربية للمطاعم',
      completionDate: '2023',
      images: [
        'https://images.unsplash.com/photo-1623240644272-b5d2390e23d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1622876168001-7e5e45a41435?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      features: [
        'معدات صنع قهوة احترافية',
        'نظام تخزين وتبريد',
        'مساحة خدمة مناسبة',
        'تصميم يعكس هوية العلامة التجارية',
        'نظام كهربائي متكامل',
      ]
    },
  };

  const project = projectsData[projectId as keyof typeof projectsData];

  const openLightbox = (image: string) => {
    setActiveImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  if (!project) {
    return (
      <div className="min-h-screen font-cairo" dir="rtl">
        <Header />
        <div className="pt-32 pb-16 container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">المشروع غير موجود</h1>
          <p className="mb-8">عذراً، لم نتمكن من العثور على المشروع المطلوب.</p>
          <Link to="/projects" className="gold-button">
            العودة إلى المشاريع
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <div className="flex items-center text-gray-600 text-sm">
              <Link to="/" className="hover:text-gold">الرئيسية</Link>
              <span className="mx-2">»</span>
              <Link to="/projects" className="hover:text-gold">مشاريعنا</Link>
              <span className="mx-2">»</span>
              <span>{project.title}</span>
            </div>
          </div>
          
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <div className="w-24 h-1 bg-gold"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Project Images Carousel */}
              <div className="mb-8">
                <Carousel className="w-full" opts={{ loop: true, direction: "rtl" }}>
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <div 
                          className="h-[400px] overflow-hidden rounded-lg shadow-md cursor-pointer"
                          onClick={() => openLightbox(image)}
                        >
                          <img 
                            src={image} 
                            alt={`${project.title} - صورة ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="right-4 -translate-y-1/2 left-auto" icon={<ChevronLeft className="h-6 w-6" />} />
                  <CarouselNext className="left-4 -translate-y-1/2 right-auto" icon={<ChevronRight className="h-6 w-6" />} />
                </Carousel>
                
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {project.images.map((image, index) => (
                    <div
                      key={`thumb-${index}`}
                      className="h-20 overflow-hidden rounded-md border border-gray-200 cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <img
                        src={image}
                        alt={`صورة مصغرة ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">عن المشروع</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">مميزات المشروع</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-bold mb-4">تفاصيل المشروع</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 mb-1">العميل:</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">الموقع:</p>
                    <p className="font-medium">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">تاريخ الإنجاز:</p>
                    <p className="font-medium">{project.completionDate}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gold bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">هل تريد مشروعاً مشابهاً؟</h3>
                <p className="mb-6 text-gray-700">
                  فريقنا المتخصص جاهز لمساعدتك في تصميم وتنفيذ مشروعك الخاص وفقاً لاحتياجاتك.
                </p>
                <Link to="/#contact" className="gold-button block text-center">
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      <div 
        className={cn(
          "fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center transition-opacity duration-300",
          activeImage ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeLightbox}
      >
        <button 
          className="absolute top-4 right-4 text-white text-4xl font-light"
          onClick={closeLightbox}
        >
          ×
        </button>
        {activeImage && (
          <img 
            src={activeImage} 
            alt="عرض مكبر" 
            className="max-w-[90%] max-h-[90vh] object-contain"
          />
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
