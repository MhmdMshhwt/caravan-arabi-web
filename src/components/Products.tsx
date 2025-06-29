
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "كرفانات",
      categoryId: "caravans",
      description:
        "كرفانات متنقلة بتصاميم عصرية وجودة عالية، مناسبة للاستخدامات السكنية والتجارية",
      image:
        "https://images.unsplash.com/photo-1563783850023-077d97825802?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "وحدات ثابته",
      categoryId: "fixed-units",
      description:
        "وحدات ثابتة مصممة بأعلى معايير الجودة لتوفير حلول متكاملة ومريحة",
      image:
        "https://images.unsplash.com/photo-1531973486364-5fa64260d75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      name: "حمامات متنقله",
      categoryId: "mobile-toilets",
      description:
        "حمامات متنقلة عملية ونظيفة، مصممة لتلبية احتياجات المواقع المختلفة",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      name: "منازل جاهزه",
      categoryId: "ready-made-homes",
      description:
        "منازل جاهزة بتصاميم حديثة وتجهيزات كاملة، جاهزة للسكن الفوري",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      name: "اكشاك حراسه",
      categoryId: "guard-booths",
      description:
        "أكشاك حراسة مجهزة بأنظمة أمان متطورة لضمان الحماية الفعالة",
      image:
        "https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      name: "مطاعم متنقله وثابته",
      categoryId: "mobile-fixed-restaurants",
      description:
        "مطاعم متنقلة وثابتة مجهزة بالكامل بأحدث المعدات لأعمال الطعام",
      image:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    },
    {
      id: 7,
      name: "اسوار معدنيه",
      categoryId: "metal-fences",
      description:
        "أسوار معدنية قوية ومتينة، مصممة لتوفير الأمان والحماية",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 8,
      name: "مظلات عربيات",
      categoryId: "cars-umbrellas",
      description:
        "مظلات عربيات عملية لحماية المركبات من العوامل الجوية",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 9,
      name: "حاويات",
      categoryId: "containers",
      description:
        "حاويات متعددة الاستخدامات بأحجام مختلفة لتلبية احتياجات التخزين",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 10,
      name: "هناجر معدنيه",
      categoryId: "metal-hangars",
      description:
        "هناجر معدنية واسعة ومتينة، مثالية للتخزين والأنشطة الصناعية",
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
