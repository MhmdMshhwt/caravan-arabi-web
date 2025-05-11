
import { useState } from 'react';
import { Play, X } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';

const VideosPage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const videoItems = [
    {
      id: "video1",
      title: "عربات ME Caravan - نظرة عامة",
      thumbnail: "https://images.unsplash.com/photo-1620577438157-c1e2408e14d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    },
    {
      id: "video2",
      title: "كيفية تصميم العربات المتنقلة",
      thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      embedId: "HXV3zeQKqGY", // Replace with actual YouTube ID
    },
    {
      id: "video3",
      title: "شهادات العملاء",
      thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      embedId: "RK1K2bCg4J8", // Replace with actual YouTube ID
    },
    {
      id: "video4",
      title: "كيفية اختيار الكرفان المناسب",
      thumbnail: "https://images.unsplash.com/photo-1662742151889-67a7bf76cf2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      embedId: "xGytDsqkQY8", // Replace with actual YouTube ID
    },
    {
      id: "video5",
      title: "مميزات العربات المتنقلة",
      thumbnail: "https://images.unsplash.com/photo-1527435706438-eb04ad7c60fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      embedId: "9XeNNqeHVDw", // Replace with actual YouTube ID
    },
    {
      id: "video6",
      title: "جولة في مصنع ME Caravan",
      thumbnail: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      embedId: "Z9WQy9jEY8M", // Replace with actual YouTube ID
    },
  ];

  const openVideoModal = (embedId: string) => {
    setActiveVideo(embedId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <PageLayout title="فيديوهات">
      <div className="py-12">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            شاهد أحدث فيديوهاتنا التي توضح منتجاتنا وعملية التصنيع
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoItems.map((video) => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div 
                className="relative h-48 cursor-pointer overflow-hidden"
                onClick={() => openVideoModal(video.embedId)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <div 
        className={cn(
          "fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center transition-opacity duration-300",
          activeVideo ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <button 
          className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
          onClick={closeVideoModal}
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>
        
        {activeVideo && (
          <div className="w-full max-w-4xl aspect-video">
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default VideosPage;
