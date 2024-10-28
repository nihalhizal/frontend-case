"use client";

import { useQuery } from "@tanstack/react-query";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  WorldIcon,
  YoutubeIcon,
} from "./Icons";

interface FooterProps {}

interface ColumnsData {
  title: string;
  items: string[];
}

const Footer: React.FC<FooterProps> = ({}) => {
  //queries
  const { data } = useQuery({
    queryKey: ["columnsData"],
    queryFn: () =>
      fetch("http://localhost:3000/api/footer-items").then((res) => res.json()),
  });

  return (
    <div>
      <div className="flex w-full p-20">
        <div className="flex w-full justify-between text-[#E2E8F0]">
          {data?.data?.map(({ title, items }: ColumnsData, index: number) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="font-medium">{title}</div>
              {items.map((item: any, itemIndex: number) => (
                <div key={itemIndex}>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <div className="font-medium">Get the App</div>
            <button>
              <img src="/AppStore.svg" alt="AppStore" />
            </button>
            <button>
              <img src="/GooglePlay.svg" alt="GooglePlay" />
            </button>
            <div className="font-medium">Follow Us</div>
            <div className="flex gap-4">
              <button>
                <YoutubeIcon />
              </button>
              <button>
                <FacebookIcon />
              </button>
              <button>
                <TwitterIcon />
              </button>
              <button>
                <InstagramIcon />
              </button>
              <button>
                <LinkedinIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t mx-20 border-[#E2E8F0] opacity-25"></div>
      <div className="flex w-full px-20 py-10 justify-between text-[#E2E8F0]">
        <div>Collers @ 2023. All rights reserved.</div>
        <div className="flex gap-8">
          <div>Terms</div>
          <div>Privacy</div>
          <div>Contact</div>
          <div className="flex gap-2">
            <WorldIcon /> EN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
