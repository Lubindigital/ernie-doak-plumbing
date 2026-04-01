import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Legacy />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
