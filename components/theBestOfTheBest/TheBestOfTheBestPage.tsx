"use client";

import React from "react";
import Button from "../Button";
import { useQuery } from "@tanstack/react-query";
import Cards from "./Cards";
import { BackLightsSvg, MobileBackLightsSvg } from "../BackgroundSvg";

interface TheBestOfTheBestPageProps {}

interface CardData {
  title: string;
  text: string;
  imageUrl: string;
}

const TheBestOfTheBestPage: React.FC<TheBestOfTheBestPageProps> = ({}) => {
  //queries
  const { data } = useQuery({
    queryKey: ["cardsListData"],
    queryFn: () =>
      fetch("http://localhost:3000/api/card-list").then((res) => res.json()),
  });

  return (
    <div className="flex flex-col p-20 xs:p-4 xs:py-10">
      <div className="flex w-full justify-between relative xs:flex-col xs:text-center xs:gap-6">
        <div className="font-extrabold text-6xl text-white xs:font-bold xs:text-3xl">
          The best of the best
        </div>
        <div>
          <Button
            onClick={() => {}}
            size="large"
            className="bg-transparent text-white font-bold border-2 border-white"
          >
            Sign up now
          </Button>
        </div>
      </div>
      <div className="pt-28 absolute right-6 xs:hidden">
        <BackLightsSvg />
      </div>
      <div className="hidden xs:block pt-48 left-0 absolute">
        <MobileBackLightsSvg />
      </div>
      <div className="flex w-full justify-between gap-12 pt-20 relative xs:flex-col xs:pt-10">
        {data?.data?.map(
          ({ title, text, imageUrl }: CardData, index: number) => (
            <Cards title={title} text={text} imageUrl={imageUrl} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default TheBestOfTheBestPage;
