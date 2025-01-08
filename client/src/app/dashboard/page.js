import Dashboard from "@/components/shared/layouts/Dashboard";
import Image from "next/image";
import React from "react";

const ControlPanel = () => {
  return (
    <Dashboard>
      <div className="w-full h-full flex justify-center items-center !rounded">
        <Image src={"/logo-light-square.png"} width={500} height={500} />
      </div>
    </Dashboard>
  );
};

export default ControlPanel;
