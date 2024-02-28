import React from "react";
import Task from "./Task";

type FinishedTodosProps = {
  tasks: string[];
};

function FinishedTodos(FinishedTodosProps: FinishedTodosProps) {
  const { tasks } = FinishedTodosProps;

  return (
    <div className="opacity-50">
      <p className="mb-8">Finished task</p>

      <div className="px-4">
        {tasks.map((task, index) => (
          <Task key={index} text={task} isDone={true} />
        ))}
      </div>
    </div>
  );
}

const MemoizedFinishedTodos = React.memo(FinishedTodos);
export default MemoizedFinishedTodos;
