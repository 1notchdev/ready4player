// import HomeHeroSection1 from "../components/HomeHeroSection1";
import HomeHeroSection from "../components/HomeHeroSection";
import HomePartnersSection from "../components/HomePartnersSection";
import HomeOffersSection from "../components/HomeOffersSection";
import HomeBuildWithSection from "../components/HomeBuildWithSection";
import HomeFeaturesSection from "../components/HomeFeaturesSection";
import HomeGamesSection from "../components/HomeGamesSection";
import HomeArticlesSection from "../components/HomeArticlesSection";
import DefaultLayout from "../components/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      {/* <HomeHeroSection1 /> */}
      <HomeHeroSection />
      <HomePartnersSection />
      <HomeOffersSection title={"Special Offers"} />
      <HomeBuildWithSection />
      <HomeFeaturesSection />
      <HomeGamesSection />
      <HomeArticlesSection title={"Articles"} />
    </DefaultLayout>
  );
}
