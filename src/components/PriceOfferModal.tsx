
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PriceOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PriceOfferModal = ({ isOpen, onClose }: PriceOfferModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "خطأ",
        description: "الرجاء ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // In a real application, you would send this data to a server
    console.log('Price offer request submitted:', formData);
    
    // Show success message
    toast({
      title: "تم الإرسال بنجاح",
      description: "سنقوم بالتواصل معك قريباً بخصوص عرض السعر",
    });
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      <div 
        className={cn(
          "bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative z-10 transform transition-all duration-300",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        <button
          onClick={onClose}
          className="absolute left-4 top-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold">اطلب عرض سعر</h3>
          <p className="text-gray-600 mt-1">املأ النموذج وسنتواصل معك في أقرب وقت</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">
              الاسم
            </label>
            <input
              type="text"
              id="modal-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="أدخل اسمك"
            />
          </div>
          
          <div>
            <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="modal-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>
          
          <div>
            <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">
              رقم الهاتف
            </label>
            <input
              type="tel"
              id="modal-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="أدخل رقم هاتفك"
            />
          </div>
          
          <div>
            <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1">
              تفاصيل الطلب (اختياري)
            </label>
            <textarea
              id="modal-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="اكتب تفاصيل طلبك هنا"
            ></textarea>
          </div>
          
          <div className="pt-2">
            <button type="submit" className="gold-button w-full">
              إرسال الطلب
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PriceOfferModal;
