"use client";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  WorldIcon,
  YoutubeIcon,
} from "./Icons";

interface FooterProps {}

interface Column {
  title: string;
  items: string[];
}

type ColumnItem = Column[];

const columnItem: ColumnItem = [
  {
    title: "Product",
    items: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
  },
  {
    title: "Solutions",
    items: ["Brainstorming", "Ideation", "Wireframing", "Research", "Design"],
  },
  {
    title: "Support",
    items: [
      "Contact Us",
      "Developers",
      "Documentation",
      "Integrations",
      "Reports",
    ],
  },
];

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div>
      <div className="flex w-full p-20">
        <div className="flex w-full justify-between text-[#E2E8F0]">
          {columnItem.map((column: any, columnIndex: number) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              <div className="font-medium">{column.title}</div>
              {column.items.map((item: any, itemIndex: number) => (
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
              <YoutubeIcon />
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedinIcon />
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
