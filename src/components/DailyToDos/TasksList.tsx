import React from "react";
import Task from "./Task";

type TaskListProps = {
  title: string;
  tasks: string[];
  isDone: boolean;
  onClickCheckbox: (title: string, text: string) => void;
};

export default function TasksList(TaskListProps: TaskListProps) {
  const { title, tasks, isDone, onClickCheckbox } = TaskListProps;

  return (
    <div className="w-full space-y-2 mt-4">
      {tasks.map((task, index) => (
        <Task
          key={`${title}-${index}`}
          text={task}
          isDone={isDone}
          onClickCheckbox={() => onClickCheckbox(title, task)}
        />
      ))}
    </div>
  );
}
