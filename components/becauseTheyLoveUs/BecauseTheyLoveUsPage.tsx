"use client";

import React, { ReactNode, useRef } from "react";
import { YellowBgSvg } from "../BackgroundSvg";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArtVenueIcon,
  WavesIcon,
  ZoomerrIcon,
} from "../Icons";
import Slider from "react-slick";
import SliderCards from "./SliderCards";

interface BecauseTheyLoveUsPageProps {}

interface SliderCard {
  icon: ReactNode;
  title: string;
  text: string;
  userImage: ReactNode;
  userNameSurname: string;
  userDetail: string;
}

type SliderCards = SliderCard[];

const sliderCards: SliderCards = [
  {
    icon: <ArtVenueIcon />,
    title: "kontrastr",
    text: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
    userImage: (
      <img
        src="/KontrastrImage.jpeg"
        alt="Kontrastr"
        className="w-16 h-16 rounded-full object-cover"
      />
    ),
    userNameSurname: "Ralph Edwards",
    userDetail: "Product Designer",
  },
  {
    icon: <ZoomerrIcon />,
    title: "Zoomerr",
    text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    userImage: (
      <img
        src="/ZoomerrImage.jpeg"
        alt="Zoomerr"
        className="w-16 h-16 rounded-full object-cover"
      />
    ),
    userNameSurname: "Hellen Jummy",
    userDetail: "Team Lead",
  },
  {
    icon: <img src="/Shells.png" alt="Shells" />,
    title: "SHELLS",
    text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    userImage: (
      <img
        src="/ShellsImage.jpeg"
        alt="Shells"
        className="w-16 h-16 rounded-full object-cover"
      />
    ),
    userNameSurname: "Hellena John",
    userDetail: "Co-founder",
  },
  {
    icon: <ArtVenueIcon />,
    title: "ArtVenue",
    text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    userImage: (
      <img
        src="/ArtVenueImage.jpeg"
        alt="ArtVenue"
        className="w-16 h-16 rounded-full object-cover"
      />
    ),
    userNameSurname: "David Oshodi",
    userDetail: "Manager",
  },
  {
    icon: <WavesIcon />,
    title: "WAVES",
    text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    userImage: (
      <img
        src="/WavesImage.jpeg"
        alt="Waves"
        className="w-16 h-16 rounded-full object-cover"
      />
    ),
    userNameSurname: "Charolette Hanlin",
    userDetail: "CEO",
  },
];

const BecauseTheyLoveUsPage: React.FC<BecauseTheyLoveUsPageProps> = ({}) => {
  const sliderRef = useRef<any>(null);

  // Slider Settings
  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
    arrows: false,
  };

  return (
    <div>
      <div className="flex p-20 justify-between items-center">
        <div className="text-[#0F172A] font-extrabold text-6xl">
          Because they love us
        </div>
        <div className="flex gap-6">
          <button
            className="border-2 rounded-full p-4 border-brown"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <ArrowLeftIcon />
          </button>
          <button
            className="border-2 rounded-full p-4 border-brown"
            onClick={() => sliderRef.current.slickNext()}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center absolute inset-0">
          <YellowBgSvg />
        </div>
        <div className="relative">
          <Slider ref={sliderRef} {...sliderSettings}>
            {sliderCards.map((item: any, index: number) => (
              <div key={index} className="p-10">
                <SliderCards
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                  userImage={item.userImage}
                  userNameSurname={item.userNameSurname}
                  userDetail={item.userDetail}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BecauseTheyLoveUsPage;