"use client";

import Button from "./Button";
import { useQuery } from "@tanstack/react-query";
import { MenuIcon } from "./Icons";

interface HeaderProps {}

interface ButtonsData {
  key: string;
  label: string;
}

const Header: React.FC<HeaderProps> = ({}) => {
  //queries
  const { data } = useQuery({
    queryKey: ["buttonsData"],
    queryFn: () =>
      fetch(`${window.location.origin}/api/header-buttons`).then((res) =>
        res.json()
      ),
  });

  return (
    <div className="flex w-full px-20 py-6 justify-between xs:p-4">
      <div className="font-bold text-3xl text-brown">Collers</div>
      <div className="flex font-medium text-brown gap-4 xs:hidden">
        {data?.data?.map(({ key, label }: ButtonsData) => (
          <button key={key}>{label}</button>
        ))}
        <Button onClick={() => {}} size="medium" className="btn-signup">
          Sign up now
        </Button>
      </div>
      <div className="hidden xs:block">
        <button>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
