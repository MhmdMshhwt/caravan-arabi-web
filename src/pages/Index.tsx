
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import Videos from "../components/Videos";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="font-cairo" dir="rtl">
      <Header />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Videos />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
