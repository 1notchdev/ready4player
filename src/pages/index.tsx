import Navigation from "../components/Nagivation";
import Footer from "../components/Footer";
import HomeHeroSection from "../components/HomeHeroSection";
import HomePartnersSection from "../components/HomePartnersSection";
import HomeOffersSection from "../components/HomeOffersSection";
import HomeBuildWithSection from "../components/HomeBuildWithSection";
import HomeFeaturesSection from "../components/HomeFeaturesSection";
import HomeGamesSection from "../components/HomeGamesSection";
import HomeArticlesSection from "../components/HomeArticlesSection";

export default function Home() {
  return (
    <div className="flex flex-col py-4 w-full min-h-screen bg-main overflow-hidden overscroll-none">
      <Navigation />
      <main className="flex flex-col justify-start items-center gap-28">
        <HomeHeroSection />
        <HomePartnersSection />
        <HomeOffersSection title={"Special Offers"} />
        <HomeBuildWithSection />
        <HomeFeaturesSection />
        <HomeGamesSection />
        <HomeArticlesSection title={"Articles"} />
      </main>
      <Footer />
    </div>
  );
}
