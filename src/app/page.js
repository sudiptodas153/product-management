import Image from "next/image";
import Products from "./Components/Product";
import BannerSection from "./Components/Banner";
import FeaturesSection from "./Components/Feature";
import HowItWorks from "./Components/HowItWork";
import FAQSection from "./Components/FAQSection";


export default function Home() {
  return (
   <div className="my-10 space-y-20">
    <BannerSection/>
    <Products/>
    <FeaturesSection/>
    <HowItWorks/>
    <FAQSection/>
    
   </div>
  );
}
