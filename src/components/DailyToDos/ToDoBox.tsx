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

function ToDoBox({
  title,
  icon,
  tasks,
  tasksDone,
  onClickCheckbox,
}: ToDoBoxProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    setTimeout(() => {
      setIsDropdownOpen(true);
    }, 500);
  }, []);

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

      <div className={`viewport ${isDropdownOpen ? "open" : ""}`}>
        <div
          className={`content ${isDropdownOpen ? "open" : ""}`}
          ref={contentRef}
        >
          <TasksList
            tasks={tasks}
            title={title}
            isDone={false}
            onClickCheckbox={onClickCheckbox}
          />
        </div>
      </div>
    </BoxContainer>
  );
}

const MemoizedToDoBox = React.memo(ToDoBox);
export default MemoizedToDoBox;
