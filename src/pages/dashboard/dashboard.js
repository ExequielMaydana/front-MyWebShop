import React, { useState } from "react";
import NavBarDash from "@/components/dashboard/NavBarDash";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBarDash isOpen={isOpen} openMenu={openMenu} />
      <div className="pb-20 mt-10 w-full min-h-screen"></div>
    </>
  );
};

export default Dashboard;
