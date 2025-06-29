
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const SuccessPartners = () => {
  const [api, setApi] = useState<any>();

  const partners = [
    {
      id: 1,
      name: "شركة الإنشاءات السعودية",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "شركة المشاريع العربية",
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "مؤسسة التطوير العمراني",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "هيئة تنظيم المهرجانات",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "شركة تطوير المشاريع التجارية",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "شركة مذاق العربية للمطاعم",
      logo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "الشركة الصناعية المتطورة",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "إدارة المرافق العامة",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=500&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            شركاء النجاح
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نفخر بشراكتنا مع أبرز الشركات والمؤسسات في المملكة العربية السعودية
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div className="group">
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-center mt-4 text-gray-700 group-hover:text-gold transition-colors duration-300">
                        {partner.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Gradient overlays for infinite scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Auto-scroll indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2 rtl:space-x-reverse">
            {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPartners;
