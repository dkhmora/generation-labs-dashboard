import logo from "../assets/logo.svg";
import MobileNavigationDrawer from "./MobileNavigationDrawer";
import ProfileCircleImage from "../assets/profile_circle.svg";
import { Button, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

const MAIN_NAVIGATION_ITEMS = ["Dashboard", "Report", "Tele-health", "To-dos"];

export default function AppBar() {
  const [selectedItem, setSelectedItem] = useState("Dashboard"); // New state for tracking selected item

  const handleListItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <header>
      <div className="flex items-center w-full px-6 bg-white shadow-md justify-between lg:py-0 lg:shadow-none lg:px-32">
        <div className="flex justify-start lg:hidden">
          <MobileNavigationDrawer />
        </div>

        <div className="flex justify-center flex-grow md:justify-start md:flex-grow-0">
          <img src={logo} alt="logo" className="h-auto w-auto max-h-10" />
        </div>

        <div className="flex justify-end w-8"></div>

        <div className="flex flex-row items-center hidden lg:flex">
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 0,
            }}
          >
            {MAIN_NAVIGATION_ITEMS.map((text) => (
              <ListItemButton
                key={text}
                selected={selectedItem === text}
                onClick={() => handleListItemClick(text)}
                sx={{
                  borderBottom:
                    selectedItem === text ? "2px solid #3D3D3D" : "none",
                  bgcolor: selectedItem === text ? "#000" : "transparent",
                  "&.Mui-selected": {
                    bgcolor: "rgba(147, 133, 98, 0)",
                    color: "primary.main",
                  },
                  "&:hover": {
                    bgcolor: "rgba(147, 133, 98, 0.1)",
                  },
                  paddingTop: "24px",
                  paddingBottom: "24px",
                }}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: selectedItem === text ? "bold" : "normal", // Conditional styling
                      color: selectedItem === text ? "#3D3D3D" : "#666666", // Conditional styling
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          <div className="flex flex-row space-x-2 px-8 w-80 items-start justify-start content-start">
            <Button
              sx={{
                borderRadius: "8px",
                border: "1px solid #938562",
                borderColor: "#938562",
                color: "#6A5930",
                textTransform: "none",
                width: "50%",
              }}
            >
              <p className="text-[#6A5930]">Register Kit</p>
            </Button>
            <Button
              sx={{
                borderRadius: "8px",
                backgroundColor: "#E3E0D6",
                textTransform: "none",
                width: "50%",
              }}
              disabled
            >
              <p className="text-[#6A5930]">Buy Kit</p>
            </Button>
          </div>

          <img
            src={ProfileCircleImage}
            alt="profile_circle_image"
            className="h-auto w-auto max-h-10"
          />
        </div>
      </div>
    </header>
  );
}
