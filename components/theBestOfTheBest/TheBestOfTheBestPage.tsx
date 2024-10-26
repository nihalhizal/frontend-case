"use client";

import React from "react";
import Button from "../Button";
import { useQuery } from "@tanstack/react-query";
import Cards from "./Cards";

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
    <div className="flex flex-col p-20">
      <div className="flex w-full justify-between">
        <div className="font-extrabold text-6xl text-white">
          The best of the best
        </div>
        <Button
          onClick={() => {}}
          size="large"
          className="bg-transparent text-[#FFFFFF] font-bold border-2 border-[#FFFFFF]"
        >
          Sign up now
        </Button>
      </div>
      <div>
        <img
          src="/Square1.png"
          alt="Square1"
          className="absolute -bottom-[960px] left-12"
        />
        <img
          src="/Square2.png"
          alt="Square2"
          className="absolute -bottom-[680px] left-[500px]"
        />
        <img
          src="/Square3.png"
          alt="Square3"
          className="absolute -bottom-[940px] right-[505px]"
        />
        <img
          src="/Square4.png"
          alt="Square4"
          className="absolute -bottom-[1020px] right-44"
        />
        <img
          src="/Square5.png"
          alt="Square5"
          className="absolute -bottom-[800px] right-10"
        />
      </div>
      <div className="flex w-full justify-between gap-12 pt-20 relative">
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
