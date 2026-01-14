import { Hero } from "@/components/Hero";
import { AboutComplex } from "@/components/AboutComplex";
import { Apartments } from "@/components/Apartments";
import { Investment } from "@/components/Investment";
import { Footer } from "@/components/Footer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <AboutComplex />
      <Apartments />
      <Investment />
      <Footer />
    </main>
  );
};

export default Index;
