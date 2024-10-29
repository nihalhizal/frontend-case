"use client";

import Button from "../Button";
import { VectorIcon } from "../Icons";

const MainContent = () => {
  return (
    <div className="flex w-full px-20 py-10 gap-20 relative xs:p-4 xs:text-center">
      <div className="flex flex-col w-[714px] gap-12">
        <div className="font-extrabold text-7xl text-blue xs:text-[56px]">
          Collectible Sneakers
        </div>
        <div className="text-lg">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </div>
        <div className="flex font-medium text-brown gap-4">
          <Button onClick={() => {}} size="medium" className="btn-signup">
            Sign up now
          </Button>
          <Button
            onClick={() => {}}
            size="medium"
            className="bg-transparent text-brown"
            icon={<VectorIcon />}
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
