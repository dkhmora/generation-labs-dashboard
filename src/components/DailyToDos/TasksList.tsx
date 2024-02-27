import React from "react";
import Task from "./Task";

export type Task = {
  text: string;
  isDone: boolean;
};

type TaskListProps = {
  tasks: Task[];
};

export default function TasksList(TaskListProps: TaskListProps) {
  const { tasks } = TaskListProps;

  return (
    <div className="w-full space-y-2">
      {tasks.map((task, index) => (
        <Task key={index} {...task} />
      ))}
    </div>
  );
}
