
import { useState } from 'react';
import { cn } from "@/lib/utils";

const Gallery = () => {
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

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">المعرض</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            استعرض أحدث أعمالنا من العربات المتنقلة والكرفانات المصممة بأعلى معايير الجودة
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md h-64 cursor-pointer transform transition-transform duration-300 hover:shadow-xl hover:scale-105"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image} 
                alt={`ME Caravan Gallery ${index + 1}`} 
                className="w-full h-full object-cover"
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
      </div>
    </section>
  );
};

export default Gallery;
