import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Transformations from "@/components/sections/Transformations";
import About from "@/components/sections/About";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Transformations />
      <About />
      <WhyChooseMe />
      <Services />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
