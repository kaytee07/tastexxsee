import Dish from "@/components/Dish";
import ExInfo from "@/components/ExInfo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Staff from "@/components/Staff";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <ExInfo/>
      <Dish/>
      <Services/>
      <Staff/>
      <Footer/>
    </div>
  );
}
