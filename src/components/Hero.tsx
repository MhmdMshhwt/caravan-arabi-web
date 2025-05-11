
const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          تصاميم مبتكرة لعربات متنقلة
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
          حلول متكاملة للعربات المتنقلة بمواصفات عالمية وتصاميم عصرية
        </p>
        <a
          href="#contact"
          className="gold-button inline-block animate-fade-in"
        >
          اطلب الآن
        </a>
      </div>
    </section>
  );
};

export default Hero;
