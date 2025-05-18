import PageLayout from "@/components/PageLayout";

const AboutUs = () => {
  return (
    <PageLayout title="من نحن">
      <div className="py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1663090226912-511b20a3f8a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ME Caravan Team"
              className="rounded-lg shadow-lg w-full"
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

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">
            رؤيتنا ومهمتنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3 text-gold">رؤيتنا</h4>
              <p>
                أن نكون الرواد في مجال تصنيع وتوريد العربات المتنقلة في المملكة
                العربية السعودية والشرق الأوسط، من خلال تقديم منتجات مبتكرة
                وعالية الجودة تلبي احتياجات العملاء وتتجاوز توقعاتهم.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3 text-gold">مهمتنا</h4>
              <p>
                توفير حلول متنقلة متكاملة وعالية الجودة تناسب مختلف الاحتياجات،
                مع التركيز على الابتكار والاستدامة والتميز في خدمة العملاء، وذلك
                من خلال فريق عمل محترف ومتخصص.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">فريق العمل</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">أحمد محمد</h4>
              <p className="text-gold">المدير التنفيذي</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">سارة العلي</h4>
              <p className="text-gold">مدير التسويق</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">خالد عبدالله</h4>
              <p className="text-gold">رئيس قسم التصميم</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
