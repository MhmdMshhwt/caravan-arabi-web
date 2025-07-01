
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

import caravanImg from "@/assets/images/caravans/FB_IMG_1739983173454.jpg";
import carsUmbImg from "@/assets/images/cars-umbrellas/img1.jpeg";
import containersImg from "@/assets/images/containers/43554592750_15198e52f5_b.jpg";
import fixedUnitsImg from "@/assets/images/fixed-units/تصميم-كرفانات-من-الداخل.jpeg";
import guardBoothsImg from "@/assets/images/guard-booths/165471.jpg";
import metalFencesImg from "@/assets/images/metal-fences/WhatsApp Image 2025-05-26 at 00.38.03_e26779cf.jpg";
import metalHangersImg from "@/assets/images/metal-hangars/images (22).jpeg";
import resturantsImg from "@/assets/images/mobile-fixed-restaurants/IMG-20250507-WA0055.jpg";
import mobileToiletsImg from "@/assets/images/mobile-toilets/FB_IMG_1746288119283.jpg";
import readyMadeHomeImg from "@/assets/images/ready-made-homes/97557.jpg";


const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  // In a real app, you would fetch this data from an API
  const productsData = {
    caravans: {
      title: "كرفانات",
      description: "كرفانات متنقلة بتصاميم عصرية وجودة عالية، مناسبة للاستخدامات السكنية والتجارية.",
      longDescription: "نقدم تشكيلة واسعة من الكرفانات المتنقلة المصممة وفقاً لأعلى معايير الجودة والسلامة. تتميز كرفاناتنا بتصاميم عصرية مريحة وعملية، مع إمكانية التخصيص حسب احتياجات العميل.",
      mainImage: caravanImg, 
      images: [caravanImg],
      specifications: [
        { name: "الأبعاد", value: "متعددة الخيارات (3×6م، 3×9م، 3×12م)" },
        { name: "الهيكل", value: "حديد مجلفن مقاوم للصدأ" },
        { name: "الجدران", value: "ألواح مزدوجة معزولة سماكة 50 ملم" },
        { name: "السقف", value: "ألواح معزولة مقاومة للماء" }
      ],
      features: [
        "تصميم عصري وأنيق",
        "عزل حراري وصوتي ممتاز",
        "مقاومة للظروف الجوية القاسية",
        "سهولة النقل والتركيب"
      ]
    },
    "fixed-units": {
      title: "وحدات ثابته",
      description: "وحدات ثابتة مصممة بأعلى معايير الجودة لتوفير حلول متكاملة ومريحة.",
      longDescription: "وحداتنا الثابتة مصممة لتوفير حلول دائمة وموثوقة للاستخدامات المختلفة. تتميز بالمتانة والجودة العالية مع تصاميم حديثة تناسب مختلف الاحتياجات.",
      mainImage: fixedUnitsImg,
      images: [fixedUnitsImg],
      specifications: [
        { name: "النوع", value: "وحدات ثابتة متعددة الاستخدامات" },
        { name: "المواد", value: "مواد عالية الجودة ومقاومة للعوامل الجوية" },
        { name: "التصميم", value: "تصاميم عصرية قابلة للتخصيص" }
      ],
      features: [
        "تصميم قوي ومتين",
        "قابلية للتخصيص",
        "مقاومة للعوامل الجوية",
        "سهولة الصيانة"
      ]
    },
    "mobile-toilets": {
      title: "حمامات متنقله",
      description: "حمامات متنقلة عملية ونظيفة، مصممة لتلبية احتياجات المواقع المختلفة.",
      longDescription: "حماماتنا المتنقلة مصممة لتوفير حلول صحية مريحة ونظيفة للمواقع المؤقتة والفعاليات. تتميز بسهولة النقل والتركيب مع الحفاظ على أعلى معايير النظافة.",
      mainImage: mobileToiletsImg, 
      images: [mobileToiletsImg],
      specifications: [
        { name: "النوع", value: "حمامات متنقلة مجهزة بالكامل" },
        { name: "المرافق", value: "مرحاض وحوض غسيل ومرآة" },
        { name: "المياه", value: "خزان مياه نظيفة وخزان صرف" }
      ],
      features: [
        "نظافة عالية",
        "سهولة النقل",
        "مجهز بالكامل",
        "صديق للبيئة"
      ]
    },
    "ready-made-homes": {
      title: "منازل جاهزه",
      description: "منازل جاهزة بتصاميم حديثة وتجهيزات كاملة، جاهزة للسكن الفوري.",
      longDescription: "منازلنا الجاهزة توفر حلول سكن سريعة وعالية الجودة. مصممة بأحدث التقنيات وتأتي مجهزة بالكامل لتوفير الراحة والأمان لسكانها.",
      mainImage: readyMadeHomeImg,
      images: [readyMadeHomeImg],
      specifications: [
        { name: "النوع", value: "منازل جاهزة للسكن" },
        { name: "المساحة", value: "مساحات متنوعة حسب الطلب" },
        { name: "التجهيزات", value: "مجهزة بالكامل بالمرافق الأساسية" }
      ],
      features: [
        "جاهزة للسكن فوراً",
        "تصاميم عصرية",
        "عزل حراري وصوتي",
        "مرافق متكاملة"
      ]
    },
    "guard-booths": {
      title: "اكشاك حراسه",
      description: "أكشاك حراسة مجهزة بأنظمة أمان متطورة لضمان الحماية الفعالة.",
      longDescription: "أكشاك الحراسة لدينا مصممة لتوفير بيئة عمل مريحة وآمنة لموظفي الأمن. مجهزة بأحدث التقنيات وأنظمة المراقبة للحصول على أقصى درجات الحماية.",
      mainImage: guardBoothsImg, images: [guardBoothsImg],
      specifications: [
        { name: "النوع", value: "أكشاك حراسة مجهزة" },
        { name: "الأمان", value: "زجاج مقاوم للكسر وأقفال أمان" },
        { name: "التجهيزات", value: "تكييف وإضاءة وأنظمة اتصال" }
      ],
      features: [
        "أمان عالي",
        "رؤية بانورامية",
        "مقاوم للطقس",
        "أنظمة اتصال متطورة"
      ]
    },
    "mobile-fixed-restaurants": {
      title: "مطاعم متنقله وثابته",
      description: "مطاعم متنقلة وثابتة مجهزة بالكامل بأحدث المعدات لأعمال الطعام.",
      longDescription: "مطاعمنا المتنقلة والثابتة مصممة لتلبية احتياجات قطاع الأغذية بأعلى المعايير. مجهزة بمطابخ احترافية وأنظمة سلامة غذائية متكاملة.",
      mainImage: resturantsImg, images: [resturantsImg],
      specifications: [
        { name: "النوع", value: "مطاعم متنقلة وثابتة" },
        { name: "المطبخ", value: "مجهز بمعدات طبخ احترافية" },
        { name: "السلامة", value: "أنظمة سلامة غذائية متطورة" }
      ],
      features: [
        "مطبخ احترافي",
        "أنظمة تهوية متطورة",
        "سهولة التشغيل",
        "مطابق لمعايير السلامة"
      ]
    },
    "metal-fences": {
      title: "اسوار معدنيه",
      description: "أسوار معدنية قوية ومتينة، مصممة لتوفير الأمان والحماية.",
      longDescription: "أسوارنا المعدنية مصنوعة من أجود المواد لضمان الحماية والمتانة. متوفرة بتصاميم مختلفة لتناسب جميع الاحتياجات السكنية والتجارية.",
      mainImage: metalFencesImg,
      images: [metalFencesImg],
      specifications: [
        { name: "المادة", value: "حديد مجلفن عالي الجودة" },
        { name: "الارتفاع", value: "ارتفاعات متنوعة حسب الطلب" },
        { name: "التشطيب", value: "دهان مقاوم للصدأ" }
      ],
      features: [
        "متانة عالية",
        "مقاوم للصدأ",
        "تصاميم متنوعة",
        "سهولة التركيب"
      ]
    },
    "cars-umbrellas": {
      title: "مظلات عربيات",
      description: "مظلات عربيات عملية لحماية المركبات من العوامل الجوية.",
      longDescription: "مظلات السيارات لدينا توفر حماية فعالة للمركبات من أشعة الشمس والأمطار. مصنوعة من مواد عالية الجودة ومقاومة للعوامل الجوية.",
      mainImage: carsUmbImg,
      images: [carsUmbImg],
      specifications: [
        { name: "المادة", value: "قماش مقاوم للماء والشمس" },
        { name: "الهيكل", value: "معدن مجلفن قوي" },
        { name: "الحماية", value: "حماية من الأشعة فوق البنفسجية" }
      ],
      features: [
        "حماية كاملة للمركبة",
        "مقاوم للعوامل الجوية",
        "تصميم عملي",
        "سهولة التركيب"
      ]
    },
    "containers": {
      title: "حاويات",
      description: "حاويات متعددة الاستخدامات بأحجام مختلفة لتلبية احتياجات التخزين.",
      longDescription: "حاوياتنا متعددة الاستخدامات وتوفر حلول تخزين مثالية للاستخدامات المختلفة. مصنوعة من مواد عالية الجودة لضمان الحماية والمتانة.",
      mainImage: containersImg,
      images: [containersImg],
      specifications: [
        { name: "الأحجام", value: "أحجام متنوعة حسب الاحتياج" },
        { name: "المادة", value: "حديد مقوى مقاوم للصدأ" },
        { name: "الأمان", value: "أقفال أمان متطورة" }
      ],
      features: [
        "مساحة تخزين واسعة",
        "حماية كاملة للمحتويات",
        "متانة استثنائية",
        "سهولة الوصول"
      ]
    },
    "metal-hangars": {
      title: "هناجر معدنيه",
      description: "هناجر معدنية واسعة ومتينة، مثالية للتخزين والأنشطة الصناعية.",
      longDescription: "هناجرنا المعدنية توفر مساحات واسعة ومتينة للاستخدامات الصناعية والتخزين. مصممة لتحمل الأحمال الثقيلة والظروف الجوية القاسية.",
      mainImage: metalHangersImg,
      images: [metalHangersImg],
      specifications: [
        { name: "المساحة", value: "مساحات واسعة حسب الطلب" },
        { name: "الهيكل", value: "هيكل معدني قوي ومتين" },
        { name: "السقف", value: "سقف معدني مقاوم للتسرب" }
      ],
      features: [
        "مساحات واسعة",
        "قوة تحمل عالية",
        "مقاومة للعوامل الجوية",
        "تصميم صناعي متطور"
      ]
    }
  };

  const product = productsData[productId as keyof typeof productsData];

  if (!product) {
    return (
      <div className="min-h-screen font-cairo" dir="rtl">
        <Header />
        <div className="pt-32 pb-16 container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">المنتج غير موجود</h1>
          <p className="mb-8">عذراً، لم نتمكن من العثور على المنتج المطلوب.</p>
          <Link to="/#products" className="gold-button">
            العودة إلى المنتجات
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
              <Link to="/#products" className="hover:text-gold">
                منتجاتنا
              </Link>
              <span className="mx-2">»</span>
              <span>{product.title}</span>
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {product.title}
            </h1>
            <div className="w-24 h-1 bg-gold"></div>
            <p className="mt-4 text-lg text-gray-700">{product.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Product Images Carousel */}
              <div className="mb-8">
                <Carousel
                  className="w-full"
                  opts={{ loop: true, direction: "rtl" }}
                >
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <div className="h-[400px] overflow-hidden rounded-lg shadow-md">
                          <img
                            src={image}
                            alt={`${product.title} - صورة ${index + 1}`}
                            className="w-full h-full object-contain object-center"
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
                  {product.images.map((image, index) => (
                    <div
                      key={`thumb-${index}`}
                      className="h-20 overflow-hidden rounded-md border border-gray-200 cursor-pointer"
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
                <h2 className="text-2xl font-bold mb-4">وصف المنتج</h2>
                <p className="text-gray-700 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">المواصفات</h2>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-100" : ""}
                        >
                          <td className="font-bold py-3 px-4 border-b border-gray-200">
                            {spec.name}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">المميزات</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-1 bg-gold rounded-full"></div>
                      <p className="mr-3 text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">
                  هل أنت مهتم بهذا المنتج؟
                </h3>
                <p className="mb-6 text-gray-700">
                  فريقنا جاهز للإجابة عن استفساراتك وتقديم عرض سعر مخصص يناسب
                  متطلباتك.
                </p>
                <button
                  onClick={() => window.openPriceOfferModal?.()}
                  className="gold-button w-full text-center"
                >
                  طلب عرض سعر
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold mb-3">تواصل مباشرة</h4>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <span className="inline-block w-4 h-4 bg-gold mr-2"></span>
                      <span>هاتف: 966123456789+</span>
                    </p>
                    <p className="flex items-center">
                      <span className="inline-block w-4 h-4 bg-gold mr-2"></span>
                      <span>واتساب: 966123456789+</span>
                    </p>
                    <p className="flex items-center">
                      <span className="inline-block w-4 h-4 bg-gold mr-2"></span>
                      <span>البريد: info@me-caravan.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
