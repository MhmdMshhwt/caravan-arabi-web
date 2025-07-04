import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/PageLayout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast({
        title: "خطأ",
        description: "الرجاء ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);

    // Show success message
    toast({
      title: "تم الإرسال بنجاح",
      description: "شكراً لتواصلك معنا، سنرد عليك قريباً",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <PageLayout title="تواصل معنا">
      <div className="py-12">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-lg text-gray-600">
            نحن هنا للإجابة على استفساراتك وتقديم المساعدة التي تحتاجها. يمكنك
            التواصل معنا من خلال النموذج أدناه أو عبر معلومات الاتصال المتوفرة.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold mb-6">أرسل لنا رسالة</h3>
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  رسالتك
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="اكتب رسالتك هنا"
                ></textarea>
              </div>

              <div>
                <button type="submit" className="gold-button w-full">
                  إرسال
                </button>
              </div>
            </form>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-gray-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">العنوان</h4>
                  <p className="text-gray-600">
                    طريق المناشي/نكلا ـ مركز منشأة القناطر ـ الجيزه
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">الهاتف</h4>
                  <p className="text-gray-600">01108142801</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                  <p className="text-gray-600">nile0caravans@gmail.com</p>
                  <p className="text-gray-600">info@nilecaravans.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">ساعات العمل</h4>
                  <p className="text-gray-600">
                    السبت - الخميس: 8 صباحًا - 6 مساءً
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 h-80 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d55194.814444404736!2d31.11470384376471!3d30.160680738633417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDEwJzUwLjkiTiAzMcKwMDYnMDMuNiJF!5e0!3m2!1sar!2seg!4v1751661600660!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ME Caravan Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
