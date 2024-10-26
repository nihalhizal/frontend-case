import CollectibleSneakersPage from "@/components/collectibleSneakers/CollectibleSneakersPage";
import Header from "@/components/header/Header";
import TheBestOfTheBestPage from "@/components/theBestOfTheBest/TheBestOfTheBestPage";

export default function Home() {
  return (
    <div>
      <div className="bg-yellow w-full">
        <Header />
        <CollectibleSneakersPage />
      </div>
      <div className="bg-blue w-full">
        <TheBestOfTheBestPage />
      </div>
    </div>
  );
}
