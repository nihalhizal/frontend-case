"use client";

import Button from "../Button";
import { DoneIcon } from "../Icons";
import VideoTab from "./VideoTab";

interface List {
  key: string;
  text: string;
}

type ListItem = List[];

const listItem: ListItem = [
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
      <div className="flex justify-between bg-white p-20 rounded-3xl w-[1280px] h-[496px] shadow-custom-2 xs:flex-col xs:p-4 xs:w-[393px] xs:h-[689px]">
        <div className="flex flex-col gap-6 xs:pt-10">
          <div className="text-blue font-extrabold text-[56px] xs:text-[32px] xs:text-center">
            Why join us
          </div>
          <div className="flex flex-col gap-2">
            {listItem.map((item: any) => (
              <div key={item.key} className="flex items-center gap-2">
                <DoneIcon />
                <div>{item.text}</div>
              </div>
            ))}
          </div>
          <div className="xs:text-center">
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
