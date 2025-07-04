import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("الكل");

  const galleryImages = [
    {
      url: caravanImg,
      category: "كرفانات",
    },
    {
      url: carsUmbImg,
      category: "ملاجئ",
    },
    {
      url: containersImg,
      category: "عربات طعام",
    },
    {
      url: fixedUnitsImg,
      category: "أكشاك",
    },
    {
      url: guardBoothsImg,
      category: "مكاتب متنقلة",
    },
    {
      url: metalFencesImg,
      category: "كرفانات",
    },
    {
      url: metalHangersImg,
      category: "كرفانات",
    },
    {
      url: resturantsImg,
      category: "كرفانات",
    },
    {
      url: mobileToiletsImg,
      category: "كرفانات",
    },
    {
      url: readyMadeHomeImg,
      category: "كرفانات",
    },
  ];

  const categories = [
    "الكل",
    //   "كرفانات",
    //   "ملاجئ",
    //   "عربات طعام",
    //   "أكشاك",
    //   "مكاتب متنقلة",
  ];

  const filteredImages =
    activeCategory === "الكل"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const openLightbox = (image: string) => {
    setActiveImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">المعرض</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            استعرض أحدث أعمالنا من العربات المتنقلة والكرفانات المصممة بأعلى
            معايير الجودة
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-gold text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true, direction: "rtl" }}>
            <CarouselContent>
              {filteredImages.map((image, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div
                    className="h-[500px] overflow-hidden rounded-lg shadow-md cursor-pointer"
                    onClick={() => openLightbox(image.url)}
                  >
                    <img
                      src={image.url}
                      alt={`ME Caravan Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="right-0 -translate-y-1/2 left-auto">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="left-0 -translate-y-1/2 right-auto">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </Carousel>

          <div className="mt-6 grid grid-cols-4 gap-2">
            {filteredImages.slice(0, 4).map((image, index) => (
              <div
                key={`thumb-${index}`}
                className="h-20 overflow-hidden rounded-md border border-gray-200 cursor-pointer"
                onClick={() => openLightbox(image.url)}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center transition-opacity duration-300",
          activeImage ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeLightbox}
      >
        <button
          className="absolute top-4 right-4 text-white text-4xl font-light"
          onClick={closeLightbox}
        >
          ×
        </button>
        {activeImage && (
          <img
            src={activeImage}
            alt="Enlarged view"
            className="max-w-[90%] max-h-[90vh] object-contain"
          />
        )}

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {filteredImages.map((image, index) => (
            <button
              key={`lightbox-thumb-${index}`}
              className={`w-3 h-3 rounded-full ${
                activeImage === image.url ? "bg-gold" : "bg-white bg-opacity-50"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(image.url);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
