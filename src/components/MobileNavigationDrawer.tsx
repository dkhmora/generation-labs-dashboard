import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const mainNavigationItems = ["Dashboard", "Report", "Tele-health", "To-dos"];

export default function MobileNavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard"); // New state for tracking selected item

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const handleListItemClick = (item) => {
    setSelectedItem(item); // Update the selected item state
  };

  const list = () => (
    <div
      className="w-80 mt-10"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {mainNavigationItems.map((text, index) => (
          <ListItemButton
            key={text}
            selected={selectedItem === text} // Check if the item is selected
            onClick={() => handleListItemClick(text)} // Update selected item on click
            sx={{
              borderBottom:
                selectedItem === text ? "2px solid #3D3D3D" : "none",
              bgcolor: selectedItem === text ? "#000" : "transparent",
              "&.Mui-selected": {
                bgcolor: "rgba(147, 133, 98, 0.2)",
                color: "primary.main",
              },
              "&:hover": {
                bgcolor: "rgba(147, 133, 98, 0.1)",
              },
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
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer(true)}
          edge="start"
          className="text-white"
          aria-label="menu"
          size="large"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer(false)}>
          {list()}

          <div className="flex flex-col space-y-2 p-4">
            <Button
              sx={{
                borderRadius: "8px",
                border: "1px solid #938562",
                borderColor: "#938562",
                color: "#6A5930",
                textTransform: "none",
              }}
            >
              <p className="text-[#6A5930]">Register Kit</p>
            </Button>
            <Button
              sx={{
                borderRadius: "8px",
                backgroundColor: "#E3E0D6",
                textTransform: "none",
              }}
              disabled
            >
              <p className="text-[#6A5930]">Buy Kit</p>
            </Button>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
