"use client";

import React from "react";
import { DecoVideoSvg, MobileDecoVideoSvg } from "../BackgroundSvg";
import MainContainer from "./MainContainer";

interface WhyJoinUsPageProps {}

const WhyJoinUsPage: React.FC<WhyJoinUsPageProps> = ({}) => {
  return (
    <div>
      <div className="pt-8 absolute right-10 xs:hidden">
        <DecoVideoSvg />
      </div>
      <div className="pt-[360px] absolute right-0 hidden xs:block">
        <MobileDecoVideoSvg />
      </div>
      <MainContainer />
    </div>
  );
};

export default WhyJoinUsPage;
