"use client";

import Button from "../Button";
import { DoneIcon } from "../Icons";
import VideoTab from "./VideoTab";

interface ListItem {
  key: string;
  text: string;
}

const listItems: ListItem[] = [
  {
    key: "first",
    text: "Est et in pharetra magna adipiscing ornare aliquam.",
  },
  {
    key: "second",
    text: "Tellus arcu sed consequat ac velit ut eu blandit.",
  },
  { key: "third", text: "Ullamcorper ornare in et egestas dolor orci." },
];

const MainContainer = () => {
  return (
    <div className="p-20 xs:p-4">
      <div className="flex justify-between bg-white p-20 rounded-3xl shadow-custom-2 w-[1280px] h-[496px] xs:flex-col xs:p-4 xs:w-[393px] xs:h-[689px]">
        <div className="flex flex-col gap-6 xs:pt-10 xs:gap-2">
          <div className="txt-large xs:text-[32px] xs:text-center">
            Why join us
          </div>
          <div className="flex flex-col gap-2 xs:p-4">
            {listItems.map((item) => (
              <div key={item.key} className="flex items-center gap-2">
                <DoneIcon />
                <div className="text-xl xs:text-base">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="xs:text-center relative">
            <Button onClick={() => {}} size="medium" className="btn-signup">
              Sign up now
            </Button>
          </div>
        </div>
        <VideoTab />
      </div>
    </div>
  );
};

export default MainContainer;
