
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  
  // In a real app, you would fetch this data from an API
  const productsData = {
    'caravans': {
      title: 'كرفانات',
      description: 'كرفانات متنقلة بتصاميم عصرية وجودة عالية، مناسبة للاستخدامات السكنية والتجارية.',
      longDescription: 'نقدم تشكيلة واسعة من الكرفانات المتنقلة المصممة وفقاً لأعلى معايير الجودة والسلامة. تتميز كرفاناتنا بتصاميم عصرية مريحة وعملية، مع إمكانية التخصيص حسب احتياجات العميل. سواء كنت تبحث عن حلول سكنية أو تجارية أو ترفيهية، فإن كرفاناتنا توفر لك الراحة والمرونة التي تحتاجها.',
      mainImage: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      images: [
        'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1543590172-e2fb4b3d1ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1534513259966-c921b31ba599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      specifications: [
        {
          name: 'الأبعاد',
          value: 'متعددة الخيارات (3×6م، 3×9م، 3×12م)'
        },
        {
          name: 'الهيكل',
          value: 'حديد مجلفن مقاوم للصدأ'
        },
        {
          name: 'الجدران',
          value: 'ألواح مزدوجة معزولة سماكة 50 ملم'
        },
        {
          name: 'السقف',
          value: 'ألواح معزولة مقاومة للماء'
        },
        {
          name: 'الأرضية',
          value: 'خشب معالج مضاد للماء'
        },
        {
          name: 'النوافذ',
          value: 'ألمنيوم مزدوج الزجاج'
        },
        {
          name: 'الأبواب',
          value: 'معدنية مضادة للحريق'
        },
        {
          name: 'التكييف',
          value: 'نظام تكييف مركزي أو منفصل'
        }
      ],
      features: [
        'تصميم عصري وأنيق',
        'عزل حراري وصوتي ممتاز',
        'مقاومة للظروف الجوية القاسية',
        'سهولة النقل والتركيب',
        'أنظمة كهربائية وصحية متكاملة',
        'إمكانية التوسع والتعديل',
        'صيانة بسيطة وتكلفة تشغيل منخفضة',
        'ضمان شامل يصل إلى 5 سنوات'
      ]
    },
    'shelters': {
      title: 'ملاجئ',
      description: 'ملاجئ آمنة ومتينة مصممة لتوفير الحماية والراحة في مختلف الظروف.',
      longDescription: 'توفر ملاجئنا حماية فائقة وراحة في مختلف الظروف البيئية والمناخية. مصممة بعناية لتحمل الظروف القاسية مع الحفاظ على بيئة داخلية مريحة وآمنة. تستخدم ملاجئنا في العديد من التطبيقات مثل مواقع البناء، المناطق النائية، والاستخدامات الطارئة. كل ملجأ مصنوع من مواد عالية الجودة تضمن المتانة وطول العمر.',
      mainImage: 'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      images: [
        'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1534513259966-c921b31ba599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1583938148905-2a8ccfccceb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      specifications: [
        {
          name: 'الأبعاد',
          value: 'متنوعة حسب الحاجة'
        },
        {
          name: 'الهيكل',
          value: 'حديد متين مقاوم للصدأ'
        },
        {
          name: 'الجدران',
          value: 'ألواح معزولة سماكة 60 ملم'
        },
        {
          name: 'السقف',
          value: 'معدني مقوى مقاوم للتسرب'
        },
        {
          name: 'الأرضية',
          value: 'خرسانة مسلحة أو معدنية'
        },
        {
          name: 'التهوية',
          value: 'نظام تهوية مدمج'
        },
        {
          name: 'المداخل',
          value: 'أبواب أمان معززة'
        },
        {
          name: 'الإضاءة',
          value: 'نظام إضاءة احتياطي'
        }
      ],
      features: [
        'مقاومة عالية للظروف الجوية القاسية',
        'عزل حراري وصوتي متميز',
        'أنظمة تهوية فعّالة',
        'سهولة النقل والتركيب',
        'قابلية للتعديل والتخصيص',
        'تصميم داخلي مريح وعملي',
        'مقاومة للحريق والحرارة',
        'متانة استثنائية وعمر افتراضي طويل'
      ]
    },
    'kiosks': {
      title: 'أكشاك',
      description: 'أكشاك عصرية متنوعة الاستخدامات، مثالية للأعمال التجارية الصغيرة والمتوسطة.',
      longDescription: 'أكشاكنا مصممة بعناية لتلبية احتياجات الأعمال التجارية الصغيرة والمتوسطة. نقدم تشكيلة واسعة من التصاميم العصرية والأنيقة التي تجذب العملاء وتعزز تجربتهم. تتميز أكشاكنا بالمتانة والجودة العالية، مع إمكانية تخصيص التصميم والمساحة الداخلية وفقاً لمتطلبات نشاطك التجاري. سواء كنت تبحث عن كشك لبيع القهوة، الوجبات السريعة، الملابس، أو غيرها، فإن حلولنا مثالية لبدء مشروعك التجاري بأقل تكلفة وأعلى فعالية.',
      mainImage: 'https://images.unsplash.com/photo-1583938148905-2a8ccfccceb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      images: [
        'https://images.unsplash.com/photo-1583938148905-2a8ccfccceb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1534513259966-c921b31ba599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1623240644272-b5d2390e23d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1622876168001-7e5e45a41435?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      specifications: [
        {
          name: 'الأبعاد',
          value: 'متوفر بعدة أحجام (2×2م، 2×3م، 3×3م)'
        },
        {
          name: 'الهيكل',
          value: 'حديد مجلفن خفيف الوزن'
        },
        {
          name: 'الجدران',
          value: 'ألواح معدنية أو زجاجية حسب الطلب'
        },
        {
          name: 'السقف',
          value: 'معدني مقاوم للأمطار'
        },
        {
          name: 'الأرضية',
          value: 'بلاط أو فينيل صناعي'
        },
        {
          name: 'الإضاءة',
          value: 'أضواء LED موفرة للطاقة'
        },
        {
          name: 'النوافذ',
          value: 'زجاج أمان قابل للفتح'
        },
        {
          name: 'الكهرباء',
          value: 'نظام كهربائي متكامل'
        }
      ],
      features: [
        'تصميم جذاب يلفت الانتباه',
        'سهولة النقل والتركيب',
        'مساحة عرض مثالية للمنتجات',
        'مقاومة للظروف الجوية المختلفة',
        'خيارات ألوان وتصاميم متعددة',
        'امكانية إضافة لوحات إعلانية',
        'ضمان شامل لمدة سنتين',
        'صيانة دورية وخدمة ما بعد البيع'
      ]
    },
    'food-trucks': {
      title: 'عربات طعام',
      description: 'عربات طعام متطورة ومجهزة بالكامل، مثالية للمشاريع الغذائية المتنقلة.',
      longDescription: 'عربات الطعام المتنقلة من ME Caravan هي الخيار الأمثل لمن يبحث عن بدء مشروع في مجال الطعام بأقل تكلفة وأعلى مرونة. نقدم عربات مصممة خصيصاً لتلائم جميع أنواع المشاريع الغذائية، من المشروبات والقهوة إلى الوجبات السريعة والحلويات. تتميز عرباتنا بجودة التصنيع العالية والتجهيزات الحديثة التي تلبي متطلبات السلامة الغذائية. كما نوفر خدمات التصميم والتخصيص لتعكس هوية علامتك التجارية.',
      mainImage: 'https://images.unsplash.com/photo-1534513259966-c921b31ba599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      images: [
        'https://images.unsplash.com/photo-1534513259966-c921b31ba599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1543590172-e2fb4b3d1ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1623240644272-b5d2390e23d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      specifications: [
        {
          name: 'الأبعاد',
          value: 'متوفرة بأحجام مختلفة حسب الاحتياج'
        },
        {
          name: 'الهيكل',
          value: 'حديد مجلفن عالي المتانة'
        },
        {
          name: 'المطبخ',
          value: 'ستانلس ستيل مطابق لمعايير السلامة الغذائية'
        },
        {
          name: 'التهوية',
          value: 'نظام شفط قوي مع مرشحات فائقة'
        },
        {
          name: 'المياه',
          value: 'خزانات مياه نظيفة وصرف صحي'
        },
        {
          name: 'الكهرباء',
          value: 'نظام كهربائي متكامل مع مولد احتياطي'
        },
        {
          name: 'التخزين',
          value: 'ثلاجات تبريد وتجميد'
        },
        {
          name: 'الخدمة',
          value: 'نافذة خدمة مع رف عرض'
        }
      ],
      features: [
        'تصميم جذاب قابل للتخصيص',
        'تجهيزات مطبخية احترافية',
        'أنظمة سلامة غذائية متكاملة',
        'سهولة الحركة والتنقل',
        'نظام صوتي وإضاءة جذابة',
        'مساحة إعلانية للعلامة التجارية',
        'خيارات طاقة متعددة (كهرباء، غاز، هجينة)',
        'التزام بالمعايير الصحية المحلية والدولية'
      ]
    },
    'mobile-offices': {
      title: 'مكاتب متنقلة',
      description: 'مكاتب متنقلة مريحة وعملية، مثالية للمواقع الإنشائية والفعاليات المؤقتة.',
      longDescription: 'توفر المكاتب المتنقلة من ME Caravan بيئة عمل مثالية في أي موقع. مصممة لتلبية احتياجات الشركات والمؤسسات التي تتطلب مساحات مكتبية مؤقتة في مواقع مختلفة، مثل مشاريع البناء، المهرجانات، المعارض، أو المواقع النائية. تتميز مكاتبنا المتنقلة بالراحة والعملية، مع تجهيزات مكتبية كاملة وفق أعلى المعايير. نوفر حلولاً متنوعة تشمل مكاتب فردية، غرف اجتماعات، وحدات استقبال، وغيرها من الخيارات القابلة للتخصيص.',
      mainImage: 'https://images.unsplash.com/photo-1543590172-e2fb4b3d1ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      images: [
        'https://images.unsplash.com/photo-1543590172-e2fb4b3d1ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1622876168001-7e5e45a41435?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      ],
      specifications: [
        {
          name: 'الأبعاد',
          value: 'متعددة (3×6م، 6×6م، 6×12م)'
        },
        {
          name: 'الهيكل',
          value: 'حديد مجلفن عالي المتانة'
        },
        {
          name: 'الجدران',
          value: 'ألواح معزولة قابلة للتخصيص'
        },
        {
          name: 'الأرضية',
          value: 'خشب معالج مع سجاد مكتبي'
        },
        {
          name: 'الإضاءة',
          value: 'إضاءة مكتبية مريحة للعين'
        },
        {
          name: 'التكييف',
          value: 'نظام تدفئة وتبريد فعّال'
        },
        {
          name: 'الاتصالات',
          value: 'تمديدات شبكة وإنترنت'
        },
        {
          name: 'الأمان',
          value: 'أنظمة إقفال وأمان متطورة'
        }
      ],
      features: [
        'بيئة عمل مريحة ومهنية',
        'عزل صوتي وحراري ممتاز',
        'سهولة النقل والتركيب',
        'قابلية للتوسع والدمج',
        'تجهيزات مكتبية كاملة',
        'تصميم داخلي قابل للتخصيص',
        'خيارات الطاقة المستدامة',
        'أنظمة اتصالات وتقنية متكاملة'
      ]
    },
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
              <Link to="/" className="hover:text-gold">الرئيسية</Link>
              <span className="mx-2">»</span>
              <Link to="/#products" className="hover:text-gold">منتجاتنا</Link>
              <span className="mx-2">»</span>
              <span>{product.title}</span>
            </div>
          </div>
          
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
            <div className="w-24 h-1 bg-gold"></div>
            <p className="mt-4 text-lg text-gray-700">{product.description}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Product Images Carousel */}
              <div className="mb-8">
                <Carousel className="w-full" opts={{ loop: true, direction: "rtl" }}>
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <div className="h-[400px] overflow-hidden rounded-lg shadow-md">
                          <img 
                            src={image} 
                            alt={`${product.title} - صورة ${index + 1}`} 
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
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                          <td className="font-bold py-3 px-4 border-b border-gray-200">{spec.name}</td>
                          <td className="py-3 px-4 border-b border-gray-200">{spec.value}</td>
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
                <h3 className="text-xl font-bold mb-4">هل أنت مهتم بهذا المنتج؟</h3>
                <p className="mb-6 text-gray-700">
                  فريقنا جاهز للإجابة عن استفساراتك وتقديم عرض سعر مخصص يناسب متطلباتك.
                </p>
                <Link to="/#contact" className="gold-button block text-center">
                  طلب عرض سعر
                </Link>
                
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
