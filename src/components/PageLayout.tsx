
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

const PageLayout = ({ children, title, className = "" }: PageLayoutProps) => {
  return (
    <div className="font-cairo" dir="rtl">
      <Header />
      
      <main className="pt-28 md:pt-32">
        {title && (
          <div className="bg-gray-50 py-8 mb-8">
            <div className="container mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
              <div className="w-24 h-1 bg-gold mx-auto mt-3"></div>
            </div>
          </div>
        )}
        
        <div className={`container mx-auto px-4 md:px-6 ${className}`}>
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
