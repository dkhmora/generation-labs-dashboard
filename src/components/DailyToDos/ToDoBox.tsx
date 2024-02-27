import React from "react";
import ToDoHeader from "./ToDoHeader";
import TasksList from "./TasksList";

type ToDoBoxProps = {
  title: string;
  icon: JSX.Element;
  tasks: string[];
  tasksDone: string[];
};

export default function ToDoBox(ToDoBoxProps: ToDoBoxProps) {
  const { title, icon, tasks, tasksDone } = ToDoBoxProps;

  return (
    <div className="rounded-xl bg-[#F7F7F7] p-4">
      <ToDoHeader
        title={title}
        icon={icon}
        taskDoneCount={tasksDone.length}
        numberOfTasks={tasks.length}
      />

      <TasksList tasks={tasks} isDone={false} />
    </div>
  );
}
