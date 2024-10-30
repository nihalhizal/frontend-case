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

const appIcons = [
  { src: "/AppStore.svg", alt: "AppStore" },
  { src: "/GooglePlay.svg", alt: "GooglePlay" },
];

const icons = [
  <YoutubeIcon />,
  <FacebookIcon />,
  <TwitterIcon />,
  <InstagramIcon />,
  <LinkedinIcon />,
];

const Footer: React.FC<FooterProps> = ({}) => {
  //queries
  const { data } = useQuery({
    queryKey: ["columnsData"],
    queryFn: () =>
      fetch("http://localhost:3000/api/footer-items").then((res) => res.json()),
  });

  return (
    <footer>
      <div className="footer-row p-20 xs:p-16 xs:gap-20">
        {data?.data?.map(({ title, items }: ColumnsData, index: number) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="font-medium">{title}</div>
            {items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <div>{item}</div>
              </div>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-4">
          <div className="font-medium">Get the App</div>
          {appIcons.map((icon, index) => (
            <div key={index}>
              <button>
                <img src={icon.src} alt={icon.alt} />
              </button>
            </div>
          ))}
          <div className="font-medium">Follow Us</div>
          <div className="flex gap-4 xs:justify-center">
            {icons.map((Icon, index) => (
              <button key={index}>{Icon}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer-row px-20 py-10 xs:px-8 xs:py-12 xs:gap-6">
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
    </footer>
  );
};

export default Footer;
