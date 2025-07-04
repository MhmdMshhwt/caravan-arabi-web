import aboutImage from "@/assets/images/about-photo.avif";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">من نحن</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src={aboutImage}
              alt="ME Caravan Team"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">
              شركة رائدة في تصنيع العربات المتنقلة
            </h3>
            <p className="mb-4 text-lg">
              شركة ME Caravan هي شركة متخصصة في تصنيع وتوريد العربات المتنقلة
              بمختلف أنواعها وأحجامها، تأسست الشركة عام 2010 على يد مجموعة من
              المهندسين ذوي الخبرة والكفاءة العالية.
            </p>
            <p className="mb-4 text-lg">
              نحن نفتخر بتقديم منتجات ذات جودة عالية تلبي احتياجات عملائنا في
              مختلف القطاعات، سواء كانت للاستخدامات التجارية أو السكنية أو
              الترفيهية.
            </p>
            <p className="mb-4 text-lg">
              تتميز منتجاتنا بالمتانة والجودة العالية والتصميم المبتكر، كما نقدم
              خدمات ما بعد البيع لضمان رضا العملاء ومساعدتهم في الحصول على أفضل
              استفادة من منتجاتنا.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="flex flex-col items-center">
                <div className="text-gold text-3xl font-bold">+200</div>
                <p className="text-gray-600">عميل</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-gold text-3xl font-bold">+50</div>
                <p className="text-gray-600">مشروع</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-gold text-3xl font-bold">+15</div>
                <p className="text-gray-600">سنوات خبرة</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-gold text-3xl font-bold">+20</div>
                <p className="text-gray-600">موظف</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
