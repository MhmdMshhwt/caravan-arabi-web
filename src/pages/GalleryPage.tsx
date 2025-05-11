
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import PageLayout from '@/components/PageLayout';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GalleryPage = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const galleryImages = [
    "https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1543590172-e2fb4b3d1ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1534513259966-c921b31ba599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1583938148905-2a8ccfccceb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1623240644272-b5d2390e23d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1622876168001-7e5e45a41435?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];

  const openLightbox = (image: string) => {
    setActiveImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  const categories = [
    "الكل",
    "كرفانات",
    "ملاجئ",
    "عربات طعام",
    "أكشاك",
    "مكاتب متنقلة"
  ];

  return (
    <PageLayout title="معرض الصور">
      <div className="py-12">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            استعرض أحدث أعمالنا من العربات المتنقلة والكرفانات المصممة بأعلى معايير الجودة
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full ${
                  index === 0 ? "bg-gold text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true, direction: "rtl" }}>
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="basis-full lg:basis-1/2 xl:basis-1/3">
                  <div 
                    className="h-72 overflow-hidden rounded-lg shadow-md cursor-pointer m-2"
                    onClick={() => openLightbox(image)}
                  >
                    <img 
                      src={image} 
                      alt={`ME Caravan Gallery ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
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
        </div>
        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={`thumb-${index}`}
              className="h-32 overflow-hidden rounded-md border border-gray-200 cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
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
          className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
          onClick={closeLightbox}
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
        {activeImage && (
          <img 
            src={activeImage} 
            alt="Enlarged view" 
            className="max-w-[90%] max-h-[90vh] object-contain"
          />
        )}
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {galleryImages.map((image, index) => (
            <button
              key={`lightbox-thumb-${index}`}
              className={`w-3 h-3 rounded-full ${
                activeImage === image ? "bg-gold" : "bg-white bg-opacity-50"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(image);
              }}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default GalleryPage;
