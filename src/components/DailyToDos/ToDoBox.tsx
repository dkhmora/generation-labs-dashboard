import React, { useState, useRef, useEffect } from "react";
import ToDoHeader from "./ToDoHeader";
import TasksList from "./TasksList";
import BoxContainer from "../BoxContainer";

type ToDoBoxProps = {
  title: string;
  icon: JSX.Element;
  tasks: string[];
  tasksDone: string[];
  onClickCheckbox: (title: string, text: string) => void;
};

export default function ToDoBox({
  title,
  icon,
  tasks,
  tasksDone,
  onClickCheckbox,
}: ToDoBoxProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<string | null>(null); // Store height as a string to allow CSS values
  const contentRef = useRef<HTMLDivElement>(null); // Use HTMLDivElement for the ref type

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    // Ensure contentRef.current is not null before accessing scrollHeight
    if (contentRef.current) {
      const newHeight = isDropdownOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
      setHeight(newHeight);
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    // This effect adjusts the height dynamically on window resize if the dropdown is open
    const updateHeight = () => {
      if (contentRef.current && isDropdownOpen) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      }
    };

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isDropdownOpen]);

  return (
    <BoxContainer>
      <ToDoHeader
        title={title}
        icon={icon}
        taskDoneCount={tasksDone.length}
        numberOfTasks={tasksDone.length + tasks.length}
        onDropdownToggle={toggleDropdown}
        isDropdownOpen={isDropdownOpen}
      />

      <div
        ref={contentRef}
        style={{
          height: height || "0px", // Apply the dynamic height
          overflow: "hidden",
          transition: "height 0.25s ease",
        }}
      >
        <TasksList
          tasks={tasks}
          title={title}
          isDone={false}
          onClickCheckbox={onClickCheckbox}
        />
      </div>
    </BoxContainer>
  );
}
