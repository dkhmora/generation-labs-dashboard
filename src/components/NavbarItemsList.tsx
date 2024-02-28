import { List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

type NavbarItemsListProps = {
  items: string[];
  defaultItem: string;
};

export default function NavbarItemsList({
  items,
  defaultItem,
}: NavbarItemsListProps) {
  const [selectedItem, setSelectedItem] = useState(defaultItem); // New state for tracking selected item

  const handleListItemClick = (item: string) => {
    setSelectedItem(item); // Update the selected item state
  };

  return (
    <List>
      {items.map((text) => (
        <ListItemButton
          key={text}
          selected={selectedItem === text} // Check if the item is selected
          onClick={() => handleListItemClick(text)} // Update selected item on click
          sx={{
            borderBottom: selectedItem === text ? "2px solid #3D3D3D" : "none",
            bgcolor: selectedItem === text ? "#000" : "transparent",
            "&.Mui-selected": {
              bgcolor: "rgba(147, 133, 98, 0.2)",
              color: "primary.main",
            },
            "&:hover": {
              bgcolor: "rgba(147, 133, 98, 0.1)",
            },
            paddingTop: "24px",
            paddingBottom: "24px",
            "@media (min-width:1024px)": {
              paddingTop: "16px",
              paddingBottom: "16px",
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
  );
}
