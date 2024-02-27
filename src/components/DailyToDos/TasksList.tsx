import React from "react";
import Task from "./Task";

type TaskListProps = {
  tasks: string[];
};

export default function TasksList(TaskListProps: TaskListProps) {
  const { tasks } = TaskListProps;

  return (
    <div className="w-full space-y-2">
      {tasks.map((task, index) => (
        <Task key={index} text={task} isDone={false} />
      ))}
    </div>
  );
}
