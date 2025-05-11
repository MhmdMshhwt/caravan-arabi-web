import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PriceOfferModal from './PriceOfferModal';

interface HeroCTAProps {
  scrollToContactForm?: boolean;
}

const HeroCTA = ({ scrollToContactForm = false }: HeroCTAProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePriceOfferClick = () => {
    if (scrollToContactForm) {
      // If on a page with contact form, scroll to it
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If contactForm not found on current page, navigate to contact page
        navigate('/contact');
      }
    } else {
      // Otherwise open the modal
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handlePriceOfferClick}
        className="gold-button text-lg py-4 px-8"
      >
        اطلب عرض سعر
      </button>
      
      <PriceOfferModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default HeroCTA;
