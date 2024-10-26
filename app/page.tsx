import CollectibleSneakersPage from "@/components/collectibleSneakers/CollectibleSneakersPage";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="bg-yellow w-full">
      <Header />
      <CollectibleSneakersPage />
    </div>
  );
}
