import React from "react";
import Task from "./Task";

type FinishedTodosProps = {
  tasks: string[];
};

export default function FinishedTodos(FinishedTodosProps: FinishedTodosProps) {
  const { tasks } = FinishedTodosProps;

  return (
    <div className="py-2 opacity-50">
      <p>Finished task</p>

      <div className="py-8 px-4">
        {tasks.map((task, index) => (
          <Task key={index} text={task} isDone={true} />
        ))}
      </div>
    </div>
  );
}
