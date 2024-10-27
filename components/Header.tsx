"use client";

import Button from "./Button";

interface HeaderProps {}

interface Button {
  key: string;
  label: string;
}

type ButtonsGroup = Button[];

const buttonsGroup: ButtonsGroup = [
  { key: "products", label: "Products" },
  { key: "solutions", label: "Solutions" },
  { key: "pricing", label: "Pricing" },
  { key: "resources", label: "Resources" },
  { key: "logIn", label: "Log In" },
];

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex w-full px-20 py-6 justify-between">
      <div className="font-bold text-3xl text-brown">Collers</div>
      <div className="flex font-medium text-base text-brown gap-4">
        {buttonsGroup.map((button: any) => (
          <button key={button.key}>{button.label}</button>
        ))}
        <Button
          onClick={() => {}}
          size="medium"
          className="bg-transparent text-[#78350F] border-2 border-[#78350F] hover:text-white hover:bg-[#78350F]"
        >
          Sign up now
        </Button>
      </div>
    </div>
  );
};

export default Header;
