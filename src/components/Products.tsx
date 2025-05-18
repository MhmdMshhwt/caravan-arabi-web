import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "عربة كافيه متنقلة",
      categoryId: "food-trucks",
      description:
        "عربة متخصصة لتقديم القهوة والمشروبات، مجهزة بالكامل بمعدات احترافية",
      image:
        "https://images.unsplash.com/photo-1693039434590-5eaee1a3de29?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "مكاتب متنقلة",
      categoryId: "mobile-offices",
      description:
        "حلول مكتبية متنقلة للشركات والمؤسسات، مصممة بحرفية عالية لتوفير بيئة عمل متكاملة",
      image:
        "https://images.unsplash.com/photo-1531973486364-5fa64260d75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      name: "عربات طعام متنقلة",
      categoryId: "food-trucks",
      description:
        "تجهيزات كاملة لعربات الطعام بمختلف أنواعها، مطابقة لمعايير السلامة الغذائية",
      image:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    },
    {
      id: 4,
      name: "كرفانات سكنية",
      categoryId: "caravans",
      description:
        "وحدات سكنية متنقلة بتصاميم عصرية وتجهيزات متكاملة توفر الراحة والرفاهية",
      image:
        "https://images.unsplash.com/photo-1652946336807-bd35785ef268?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "عربات تسويقية",
      categoryId: "kiosks",
      description:
        "عربات مخصصة للعرض والتسويق، مصممة لجذب العملاء وعرض المنتجات بطريقة احترافية",
      image:
        "https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      name: "ملاجئ متنقلة",
      categoryId: "shelters",
      description:
        "ملاجئ متنقلة آمنة ومتينة، مصممة لتوفير الحماية والراحة في مختلف الظروف",
      image:
        "https://images.unsplash.com/photo-1658929904357-3804be4b4de5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">منتجاتنا</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            نقدم مجموعة متنوعة من العربات المتنقلة المصممة لتلبية احتياجاتك
            الخاصة
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
                  <Link
                    to="/#contact"
                    className="inline-block text-gold font-medium hover:underline"
                  >
                    طلب عرض سعر
                  </Link>
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
