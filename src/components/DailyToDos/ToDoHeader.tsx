import React, { ReactNode } from "react";

type ToDoHeaderProps = {
  taskDoneCount: number;
  numberOfTasks: number;
  title: string;
  icon: ReactNode;
};

export default function ToDoHeader(ToDoHeaderProps: ToDoHeaderProps) {
  const { taskDoneCount, numberOfTasks, title, icon } = ToDoHeaderProps;

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex flex-row justify-center items-center text-center space-x-4">
        {icon}

        <h5 className="font-medium text-lg">{title}</h5>
      </div>

      <div>
        <p>
          {taskDoneCount}/{numberOfTasks} tasks
        </p>
      </div>
    </div>
  );
}
