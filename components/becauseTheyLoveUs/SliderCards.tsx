"use client";

import { ReactNode } from "react";

type SliderCardsProps = {
  icon: ReactNode;
  title: string;
  text: string;
  userImage: ReactNode;
  userNameSurname: string;
  userDetail: string;
};

const SliderCards = (props: SliderCardsProps) => {
  const { icon, title, text, userImage, userNameSurname, userDetail } = props;

  return (
    <div className="flex flex-col bg-white border-1 rounded-[20px] w-[24rem] h-[420px] shadow-lg shadow-stone-300">
      <div className="flex flex-col gap-8 p-8">
        <div className="flex gap-2 items-center">
          {icon}
          <p className="text-2xl font-bold">{title}</p>
        </div>
        <p className="text-2xl">{text}</p>
        <div className="flex gap-4">
          {userImage}
          <div>
            <p className="text-lg">{userNameSurname}</p>
            <p>{userDetail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCards;
