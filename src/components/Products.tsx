import { Link } from "react-router-dom";

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

const Products = () => {
  const products = [
    {
      id: 1,
      name: "كرفانات",
      categoryId: "caravans",
      description:
        "كرفانات متنقلة بتصاميم عصرية وجودة عالية، مناسبة للاستخدامات السكنية والتجارية",
      image: caravanImg,
    },
    {
      id: 2,
      name: "وحدات ثابته",
      categoryId: "fixed-units",
      description:
        "وحدات ثابتة مصممة بأعلى معايير الجودة لتوفير حلول متكاملة ومريحة",
      image: fixedUnitsImg,
    },
    {
      id: 3,
      name: "حمامات متنقله",
      categoryId: "mobile-toilets",
      description:
        "حمامات متنقلة عملية ونظيفة، مصممة لتلبية احتياجات المواقع المختلفة",
      image: mobileToiletsImg,
    },
    {
      id: 4,
      name: "منازل جاهزه",
      categoryId: "ready-made-homes",
      description:
        "منازل جاهزة بتصاميم حديثة وتجهيزات كاملة، جاهزة للسكن الفوري",
      image: readyMadeHomeImg,
    },
    {
      id: 5,
      name: "اكشاك حراسه",
      categoryId: "guard-booths",
      description: "أكشاك حراسة مجهزة بأنظمة أمان متطورة لضمان الحماية الفعالة",
      image: guardBoothsImg,
    },
    {
      id: 6,
      name: "مطاعم متنقله وثابته",
      categoryId: "mobile-fixed-restaurants",
      description:
        "مطاعم متنقلة وثابتة مجهزة بالكامل بأحدث المعدات لأعمال الطعام",
      image: resturantsImg,
    },
    {
      id: 7,
      name: "اسوار معدنيه",
      categoryId: "metal-fences",
      description: "أسوار معدنية قوية ومتينة، مصممة لتوفير الأمان والحماية",
      image: metalFencesImg,
    },
    {
      id: 8,
      name: "مظلات عربيات",
      categoryId: "cars-umbrellas",
      description: "مظلات عربيات عملية لحماية المركبات من العوامل الجوية",
      image: carsUmbImg,
    },
    {
      id: 9,
      name: "حاويات",
      categoryId: "containers",
      description:
        "حاويات متعددة الاستخدامات بأحجام مختلفة لتلبية احتياجات التخزين",
      image: containersImg,
    },
    {
      id: 10,
      name: "هناجر معدنيه",
      categoryId: "metal-hangars",
      description:
        "هناجر معدنية واسعة ومتينة، مثالية للتخزين والأنشطة الصناعية",
      image: metalHangersImg,
    },
  ];

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">منتجاتنا</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            نقدم مجموعة متنوعة من المنتجات المصممة لتلبية احتياجاتك الخاصة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4 flex justify-between">
                  <Link
                    to={`/products/${product.categoryId}`}
                    className="inline-block text-gold font-medium hover:underline"
                  >
                    المزيد من التفاصيل
                  </Link>
                  <button
                    onClick={() => window.openPriceOfferModal?.()}
                    className="inline-block text-gold font-medium hover:underline"
                  >
                    طلب عرض سعر
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
