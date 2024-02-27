import React from "react";
import ToDoBox from "./ToDoBox";

export default function index() {
  return (
    <section className="w-full h-52">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Daily to-dos</h2>

        <div className="space-y-4">
          <ToDoBox />
          <ToDoBox />
          <ToDoBox />
        </div>
      </div>
    </section>
  );
}
