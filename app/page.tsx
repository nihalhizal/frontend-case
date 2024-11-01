import BecauseTheyLoveUsPage from "@/components/becauseTheyLoveUs/BecauseTheyLoveUsPage";
import CollectibleSneakersPage from "@/components/collectibleSneakers/CollectibleSneakersPage";
import Header from "@/components/Header";
import TheBestOfTheBestPage from "@/components/theBestOfTheBest/TheBestOfTheBestPage";
import WhyJoinUsPage from "@/components/whyJoinUs/WhyJoinUsPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GrowYourCollectionPage from "@/components/growYourCollection/GrowYourCollectionPage";
import WorldMapPage from "@/components/worldMap/WorldMapPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="bg-yellow xs:bg-white w-full">
        <Header />
        <CollectibleSneakersPage />
      </div>
      <div className="bg-blue w-full">
        <TheBestOfTheBestPage />
      </div>
      <div className="xs:hidden bg-gradient-to-b from-[#FFFBEB] to-[#FFFFFF] w-full pb-40">
        <WhyJoinUsPage />
        <BecauseTheyLoveUsPage />
        <GrowYourCollectionPage />
      </div>
      <div className="hidden xs:block bg-white pb-20">
        <WhyJoinUsPage />
        <BecauseTheyLoveUsPage />
        <GrowYourCollectionPage />
      </div>
      <div className="bg-brown w-full">
        <WorldMapPage />
      </div>
      <div className="bg-blue w-full">
        <Footer />
      </div>
    </div>
  );
}
