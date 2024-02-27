import React from "react";
import ToDoHeader from "./ToDoHeader";
import MedicationIcon from "../../assets/medication.svg";
import TasksList from "./TasksList";

export default function ToDoBox() {
  return (
    <div className="rounded-xl bg-[#F7F7F7] p-4">
      <ToDoHeader
        title="Rejuvenation Candidate"
        icon={
          <div className="rounded-3xl bg-[#F3C82E] p-2.5">
            <img src={MedicationIcon} className="h-6" />
          </div>
        }
        taskDoneCount={2}
        numberOfTasks={4}
      />

      <TasksList tasks={["task 1", "task 2"]} />
    </div>
  );
}
