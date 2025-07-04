import heroImage from "@/assets/images/hero-photo.avif";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          تصاميم مبتكرة لعربات متنقلة
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
          حلول متكاملة للعربات المتنقلة بمواصفات عالمية وتصاميم عصرية
        </p>
        <a href="#contact" className="gold-button inline-block animate-fade-in">
          اطلب الآن
        </a>
      </div>
    </section>
  );
};

export default Hero;
