import React, { useState } from "react";
import ToDoHeader from "./ToDoHeader";
import TasksList from "./TasksList";
import BoxContainer from "../BoxContainer";

type ToDoBoxProps = {
  title: string;
  icon: JSX.Element;
  tasks: string[];
  tasksDone: string[];
};

export default function ToDoBox(ToDoBoxProps: ToDoBoxProps) {
  const { title, icon, tasks, tasksDone } = ToDoBoxProps;
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <BoxContainer className="space-y-4">
      <ToDoHeader
        title={title}
        icon={icon}
        taskDoneCount={tasksDone.length}
        numberOfTasks={tasks.length}
        onDropdownToggle={toggleDropdown}
      />

      {isDropdownOpen && <TasksList tasks={tasks} isDone={false} />}
    </BoxContainer>
  );
}
