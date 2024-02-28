import React from "react";
import Task from "./Task";

type TaskListProps = {
  tasks: string[];
  isDone: boolean;
};

export default function TasksList(TaskListProps: TaskListProps) {
  const { tasks, isDone } = TaskListProps;

  return (
    <div className="w-full space-y-2 mt-4">
      {tasks.map((task, index) => (
        <Task key={index} text={task} isDone={isDone} />
      ))}
    </div>
  );
}
