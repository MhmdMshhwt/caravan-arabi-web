
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

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("الكل");

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "كرفانات"
    },
    {
      url: "https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "ملاجئ"
    },
    {
      url: "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "عربات طعام"
    },
    {
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "أكشاك"
    },
    {
      url: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "مكاتب متنقلة"
    },
    {
      url: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "كرفانات"
    },
  ];

  const categories = [
    "الكل",
    "كرفانات", 
    "ملاجئ",
    "عربات طعام",
    "أكشاك",
    "مكاتب متنقلة",
  ];

  const filteredImages = activeCategory === "الكل" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

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
