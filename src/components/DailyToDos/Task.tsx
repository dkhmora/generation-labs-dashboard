import { Checkbox } from "@mui/material";
import React from "react";

type TaskProps = {
  text: string;
  isDone: boolean;
};

export default function Task(TaskProps: TaskProps) {
  const { text, isDone } = TaskProps;

  return (
    <div className="flex flex-row px-4 py-1 justify-between align-center items-center bg-white rounded-3xl">
      <p>{text}</p>
      <Checkbox checked={isDone} />
    </div>
  );
}
