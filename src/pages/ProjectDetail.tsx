
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Updated project data to match the new product categories
  const projectsData = {
    "caravan-project": {
      title: "مشروع كرفانات سكنية",
      description: "تصميم وتنفيذ كرفانات سكنية متكاملة لمشروع إسكان العاملين في منطقة الرياض. تم تجهيز الكرفانات بكافة الخدمات الضرورية من أنظمة تكييف وتدفئة وشبكات صحية وكهربائية.",
      location: "الرياض، المملكة العربية السعودية",
      client: "شركة الإنشاءات السعودية",
      completionDate: "2023",
      images: [
        "https://images.unsplash.com/photo-1563783850023-077d97825802?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664287397511-9b037f603b99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      features: [
        "مساحة سكنية مريحة تتسع لـ 4 أشخاص",
        "أنظمة تكييف وتدفئة متطورة",
        "نظام كهربائي متكامل",
        "عزل حراري ممتاز",
        "مقاومة للعوامل الجوية القاسية",
      ],
    },
    "fixed-units-project": {
      title: "مشروع وحدات ثابتة",
      description: "تجهيز وحدات ثابتة لمجمع سكني متكامل في جدة. تم تصميم الوحدات لتوفير حلول سكنية دائمة بأعلى معايير الجودة والراحة.",
      location: "جدة، المملكة العربية السعودية",
      client: "شركة المشاريع العربية",
      completionDate: "2023",
      images: [
        "https://images.unsplash.com/photo-1531973486364-5fa64260d75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      features: [
        "تصميم قوي ومتين",
        "مساحات واسعة ومريحة",
        "تجهيزات كاملة",
        "عزل حراري وصوتي متطور",
        "أنظمة أمان حديثة",
      ],
    },
    "mobile-toilets-project": {
      title: "مشروع حمامات متنقلة",
      description: "توريد وتركيب حمامات متنقلة لمواقع العمل الميدانية في الدمام. تم تجهيز الحمامات بأحدث المعايير الصحية والبيئية.",
      location: "الدمام، المملكة العربية السعودية",
      client: "مؤسسة التطوير العمراني",
      completionDate: "2023",
      images: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ],
      features: [
        "نظافة عالية ومعايير صحية متطورة",
        "سهولة النقل والتركيب",
        "أنظمة تهوية متقدمة",
        "مقاومة للعوامل الجوية",
        "صديقة للبيئة",
      ],
    },
    "ready-made-homes-project": {
      title: "مشروع منازل جاهزة",
      description: "تصميم وتنفيذ منازل جاهزة لمخيم سكني في المدينة المنورة. تم تجهيز المنازل بكافة المرافق والخدمات للسكن الفوري.",
      location: "المدينة المنورة، المملكة العربية السعودية",
      client: "هيئة تنظيم المهرجانات",
      completionDate: "2023",
      images: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ],
      features: [
        "جاهزة للسكن فوراً",
        "تصاميم عصرية ومريحة",
        "مرافق متكاملة",
        "عزل حراري وصوتي ممتاز",
        "أنظمة كهربائية وصحية متطورة",
      ],
    },
    "guard-booths-project": {
      title: "مشروع أكشاك حراسة",
      description: "تجهيز أكشاك حراسة أمنية لمجمع تجاري في الرياض. تم تزويد الأكشاك بأحدث أنظمة المراقبة والأمان.",
      location: "الرياض، المملكة العربية السعودية",
      client: "شركة تطوير المشاريع التجارية",
      completionDate: "2022",
      images: [
        "https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ],
      features: [
        "أنظمة أمان متطورة",
        "رؤية بانورامية شاملة",
        "مقاومة للطقس والعوامل الجوية",
        "أنظمة اتصال حديثة",
        "تجهيزات مريحة للحراس",
      ],
    },
    "mobile-fixed-restaurants-project": {
      title: "مشروع مطاعم متنقلة وثابتة",
      description: "تجهيز وحدات مطاعم متنقلة وثابتة لسلسلة مطاعم في مكة المكرمة. تم تجهيز المطاعم بأحدث معدات الطبخ وأنظمة السلامة الغذائية.",
      location: "مكة المكرمة، المملكة العربية السعودية",
      client: "شركة مذاق العربية للمطاعم",
      completionDate: "2023",
      images: [
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      ],
      features: [
        "مطابخ احترافية مجهزة بالكامل",
        "أنظمة تهوية متطورة",
        "معدات طبخ عالية الجودة",
        "أنظمة سلامة غذائية متقدمة",
        "تصاميم جذابة وعملية",
      ],
    },
    "metal-fences-project": {
      title: "مشروع أسوار معدنية",
      description: "تركيب أسوار معدنية لمجمع صناعي في الخبر. تم استخدام أجود المواد لضمان الحماية والمتانة طويلة المدى.",
      location: "الخبر، المملكة العربية السعودية",
      client: "الشركة الصناعية المتطورة",
      completionDate: "2022",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ],
      features: [
        "متانة عالية ومقاومة للصدأ",
        "تصاميم أمنية متطورة",
        "سهولة التركيب والصيانة",
        "حماية شاملة للمنشآت",
        "مطابقة لمعايير السلامة الدولية",
      ],
    },
    "cars-umbrellas-project": {
      title: "مشروع مظلات عربيات",
      description: "تركيب مظلات حماية للمركبات في مواقف السيارات بأبها. تم تصميم المظلات لتوفير حماية فعالة من العوامل الجوية.",
      location: "أبها، المملكة العربية السعودية",
      client: "إدارة المرافق العامة",
      completionDate: "2023",
      images: [
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ],
      features: [
        "حماية كاملة للمركبات",
        "مقاومة للأشعة فوق البنفسجية",
        "تصميم عملي وأنيق",
        "سهولة التركيب والصيانة",
        "مواد عالية الجودة",
      ],
    },
    "containers-project": {
      title: "مشروع حاويات تخزين",
      description: "توريد حاويات تخزين متخصصة لمشروع لوجستي في الجبيل. تم تصميم الحاويات لتوفير حلول تخزين آمنة وعملية.",
      location: "الجبيل، المملكة العربية السعودية",
      client: "شركة الخدمات اللوجستية",
      completionDate: "2023",
      images: [
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ],
      features: [
        "مساحة تخزين واسعة",
        "حماية كاملة للمحتويات",
        "متانة استثنائية",
        "أنظمة أمان متطورة",
        "سهولة الوصول والتحميل",
      ],
    },
    "metal-hangars-project": {
      title: "مشروع هناجر معدنية",
      description: "بناء هناجر معدنية للتخزين الصناعي في ينبع. تم تصميم الهناجر لتحمل الأحمال الثقيلة والظروف الصناعية القاسية.",
      location: "ينبع، المملكة العربية السعودية",
      client: "الشركة الوطنية للصناعات",
      completionDate: "2022",
      images: [
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ],
      features: [
        "مساحات واسعة للتخزين الصناعي",
        "قوة تحمل عالية للأحمال الثقيلة",
        "مقاومة للعوامل الجوية القاسية",
        "تصميم صناعي متطور",
        "أنظمة تهوية وإضاءة متقدمة",
      ],
    },
  };

  const project = projectsData[projectId as keyof typeof projectsData];

  const openLightbox = (image: string) => {
    setActiveImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = "auto";
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
              <Link to="/" className="hover:text-gold">
                الرئيسية
              </Link>
              <span className="mx-2">»</span>
              <Link to="/projects" className="hover:text-gold">
                مشاريعنا
              </Link>
              <span className="mx-2">»</span>
              <span>{project.title}</span>
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="w-24 h-1 bg-gold"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Project Images Carousel */}
              <div className="mb-8">
                <Carousel
                  className="w-full"
                  opts={{ loop: true, direction: "rtl" }}
                >
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
                  <CarouselPrevious className="right-4 -translate-y-1/2 left-auto">
                    <ChevronLeft className="h-6 w-6" />
                  </CarouselPrevious>
                  <CarouselNext className="left-4 -translate-y-1/2 right-auto">
                    <ChevronRight className="h-6 w-6" />
                  </CarouselNext>
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
                <h3 className="text-xl font-bold mb-4">
                  هل تريد مشروعاً مشابهاً؟
                </h3>
                <p className="mb-6 text-gray-700">
                  فريقنا المتخصص جاهز لمساعدتك في تصميم وتنفيذ مشروعك الخاص
                  وفقاً لاحتياجاتك.
                </p>
                <Link to="/contact" className="gold-button block text-center">
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
