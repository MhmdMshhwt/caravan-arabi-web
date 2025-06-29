import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import part1 from "@/assets/images/success-partners/download (1).jpeg";
import part2 from "@/assets/images/success-partners/download (2).jpeg";
import part3 from "@/assets/images/success-partners/download (3).png";
import part4 from "@/assets/images/success-partners/download (4).jpeg";
import part5 from "@/assets/images/success-partners/download (5).jpeg";
import part6 from "@/assets/images/success-partners/download (6).jpeg";
import part7 from "@/assets/images/success-partners/download (7).jpeg";
import part8 from "@/assets/images/success-partners/download (8).jpeg";
import part9 from "@/assets/images/success-partners/download (9).jpeg";
import part10 from "@/assets/images/success-partners/download (10).jpeg";
import part11 from "@/assets/images/success-partners/download (11).jpeg";

function useWindowWidth() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function getItemsPerSlide(width: number): number {
  if (width >= 1280) return 5; // xl
  if (width >= 1024) return 4; // lg
  if (width >= 768) return 3; // md
  return 2; // sm
}

const SuccessPartners = () => {
  const [api, setApi] = useState<any>();
  const width = useWindowWidth();
  const itemsPerSlide = getItemsPerSlide(width);

  const partners = [
    { id: 1, logo: part1 },
    { id: 2, logo: part2 },
    { id: 3, logo: part3 },
    { id: 4, logo: part4 },
    { id: 5, logo: part5 },
    { id: 6, logo: part6 },
    { id: 7, logo: part7 },
    { id: 8, logo: part8 },
    { id: 9, logo: part9 },
    { id: 10, logo: part10 },
    { id: 11, logo: part11 },
  ];

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 3000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">شركاء النجاح</h2>
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
            className="w-full overflow-visible"
          >
            <CarouselContent className="-ml-2 md:-ml-4 flex-nowrap min-w-0">
              {partners.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div className="group">
                    <div className="bg-white rounded-full p-6 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="aspect-square overflow-hidden rounded-lg flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={`Logo of partner ${partner.id}`}
                          className="w-full h-full object-contain filter group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2 rtl:space-x-reverse">
            {Array.from({
              length: Math.ceil(partners.length / itemsPerSlide),
            }).map((_, index) => (
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
