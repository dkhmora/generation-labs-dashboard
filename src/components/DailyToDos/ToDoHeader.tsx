import React, { ReactNode } from "react";
import { IconButton } from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from "@mui/icons-material";

type ToDoHeaderProps = {
  taskDoneCount: number;
  numberOfTasks: number;
  title: string;
  icon: ReactNode;
  onDropdownToggle: () => void;
  isDropdownOpen: boolean;
};

export default function ToDoHeader(ToDoHeaderProps: ToDoHeaderProps) {
  const {
    taskDoneCount,
    numberOfTasks,
    title,
    icon,
    onDropdownToggle,
    isDropdownOpen,
  } = ToDoHeaderProps;

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex flex-row justify-center items-center text-center space-x-4">
        {icon}

        <h5 className="font-medium text-lg">{title}</h5>
      </div>

      <div className="flex flex-row justify-center items-center text-center space-x-2">
        <p>
          {taskDoneCount}/{numberOfTasks} tasks
        </p>

        <IconButton
          size="small"
          edge="end"
          aria-label="expand"
          onClick={onDropdownToggle}
        >
          {isDropdownOpen ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </IconButton>
      </div>
    </div>
  );
}
