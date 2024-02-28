import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const mainNavigationItems = ["Dashboard", "Report", "Tele-health", "To-dos"];

export default function MobileNavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <div
      className="w-80 h-full"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {mainNavigationItems.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
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
        </Drawer>
      </React.Fragment>
    </div>
  );
}
