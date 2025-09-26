import Grid from "@/components/Grid/Grid";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-10">
      <Header />
      <Hero />     {/* spacing is controlled inside Hero */}
      <Grid />     {/* small top margin inside Grid */}
    </div>
  );
}
