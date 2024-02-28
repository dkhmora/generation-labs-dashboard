import React from "react";
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

  return (
    <BoxContainer>
      <ToDoHeader
        title={title}
        icon={icon}
        taskDoneCount={tasksDone.length}
        numberOfTasks={tasks.length}
      />

      <TasksList tasks={tasks} isDone={false} />
    </BoxContainer>
  );
}
