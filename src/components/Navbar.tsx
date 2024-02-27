import React from "react";
import logo from "../assets/logo.png";
import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function Navbar() {
  return (
    <header>
      <div className="flex flex-row w-full py-4 px-6 bg-white align-center justify-start content-between space-x-8 shadow-md">
        <IconButton size="large" edge="start" aria-label="menu">
          <MenuIcon fontSize="large" />
        </IconButton>

        <div className="w-full align-center justify-center">
          <img src={logo} alt="logo" className="h-full self-center" />
        </div>
      </div>
    </header>
  );
}
