import { Navigation } from "../components/Nagivation";
import { CounterSlider } from "../components/CounterSlider";
import { InfiniteSlider } from "../components/InfiniteSlider";
import { OfferSlider } from "../components/OfferSlider";
import { BuildWithSlider } from "../components/BuildWithSlider";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col py-4 w-full min-h-screen bg-main overflow-hidden overscroll-none">
      <Navigation />
      <main className="flex flex-col justify-start items-center gap-28">
        <CounterSlider />
        <InfiniteSlider />
        <OfferSlider title={"Special Offer"} />
        <BuildWithSlider />
      </main>
      <Footer />
    </div>
  );
}
