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
      <div className="flex w-full p-20 xs:p-16">
        <div className="flex w-full justify-between text-lightBlue xs:flex-col xs:text-center xs:gap-20">
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
            <div>
              <button>
                <img src="/AppStore.svg" alt="AppStore" />
              </button>
            </div>
            <div>
              <button>
                <img src="/GooglePlay.svg" alt="GooglePlay" />
              </button>
            </div>
            <div className="font-medium">Follow Us</div>
            <div className="flex gap-4 xs:justify-center">
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
      <div className="border-t mx-20 border-lightBlue opacity-25 xs:mx-4"></div>
      <div className="flex w-full px-20 py-10 justify-between text-lightBlue xs:flex-col xs:px-8 xs:py-12 xs:text-center xs:gap-6">
        <div>Collers @ 2023. All rights reserved.</div>
        <div className="flex gap-8 xs:gap-6 xs:justify-center">
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
