
const Videos = () => {
  const videoItems = [
    {
      id: "video1",
      title: "عربات ME Caravan - نظرة عامة",
      embedId: "dQw4w9WgXcQ", // This is a placeholder YouTube ID, replace with actual IDs
    },
    {
      id: "video2",
      title: "كيفية تصميم العربات المتنقلة",
      embedId: "HXV3zeQKqGY", // This is a placeholder YouTube ID, replace with actual IDs
    },
    {
      id: "video3",
      title: "شهادات العملاء",
      embedId: "RK1K2bCg4J8", // This is a placeholder YouTube ID, replace with actual IDs
    },
  ];

  return (
    <section id="videos" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">فيديوهات</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            شاهد أحدث فيديوهاتنا التي توضح منتجاتنا وعملية التصنيع
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoItems.map((video) => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
