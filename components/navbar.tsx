import React from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { Card } from "./ui/card";

const Navbar: React.FC = () => {
  return (
    <nav className="max-w-5xl mx-auto">
      <Card className="p-4 flex flex-row items-center justify-between shadow-xl">
        <h4>Spitfire&apos;s Novel Pub</h4>
        <ThemeSwitcher />
      </Card>
    </nav>
  );
};

export default Navbar;
