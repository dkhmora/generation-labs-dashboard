import React from "react";
import ToDoHeader from "./ToDoHeader";
import TasksList, { Task } from "./TasksList";

type ToDoBoxProps = {
  title: string;
  icon: JSX.Element;
  tasks: Task[];
};

export default function ToDoBox(ToDoBoxProps: ToDoBoxProps) {
  const { title, icon, tasks } = ToDoBoxProps;

  const taskDoneCount = tasks.filter((task) => task.isDone).length;
  const numberOfTasks = tasks.length;

  return (
    <div className="rounded-xl bg-[#F7F7F7] p-4">
      <ToDoHeader
        title={title}
        icon={icon}
        taskDoneCount={taskDoneCount}
        numberOfTasks={numberOfTasks}
      />

      <TasksList tasks={tasks} />
    </div>
  );
}
