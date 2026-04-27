import { Navbar } from "@/components/velor/Navbar";
import { Hero } from "@/components/velor/Hero";
import { Marquee } from "@/components/velor/Marquee";
import { Categories } from "@/components/velor/Categories";
import { Products } from "@/components/velor/Products";
import { Statement } from "@/components/velor/Statement";
import { Features } from "@/components/velor/Features";
import { Newsletter } from "@/components/velor/Newsletter";
import { Lookbook } from "@/components/velor/Lookbook";
import { Footer } from "@/components/velor/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <Marquee />
      <Categories />
      <Products />
      <Statement />
      <Features />
      <Newsletter />
      <Lookbook />
    </main>
    <Footer />
  </div>
);

export default Index;
