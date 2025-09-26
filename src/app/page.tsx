import Footer from "@/components/footer/Footer";
import Grid from "@/components/Grid/Grid";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-10">
        <Header />
        <Hero />
        <Grid />
      </div>
      <Footer />
    </>
  );
}
