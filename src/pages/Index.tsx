import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PriceOfferModal from "../components/PriceOfferModal";
import FloatingSocialIcons from "../components/FloatingSocialIcons";

const Index = () => {
  const [isPriceOfferModalOpen, setIsPriceOfferModalOpen] = useState(false);

  // Make this function available globally for other components to use
  window.openPriceOfferModal = () => setIsPriceOfferModalOpen(true);

  return (
    <div className="font-cairo" dir="rtl">
      <Header />
      <Hero />
      <About />
      <Products />
      {/* <SuccessPartners /> */}
      <Gallery />
      {/* <Videos /> */}
      <Contact />
      <Footer />
      <FloatingSocialIcons />

      <PriceOfferModal
        isOpen={isPriceOfferModalOpen}
        onClose={() => setIsPriceOfferModalOpen(false)}
      />
    </div>
  );
};

// Add global type declaration
declare global {
  interface Window {
    openPriceOfferModal: () => void;
  }
}

export default Index;
