import React from "react";
import ToDoBox from "./ToDoBox";
import MedicationIcon from "../../assets/medication.svg";
import FootprintIcon from "../../assets/footprint.svg";
import SpaIcon from "../../assets/spa.svg";
import FinishedTodos from "./FinishedTodos";

const MOCK_TODO_DATA = [
  {
    title: "Rejuvenation Candidate",
    icon: (
      <div className="rounded-3xl bg-[#F3C82E] p-2.5">
        <img src={MedicationIcon} className="h-6" />
      </div>
    ),
    tasks: [
      "No alcoholic drinks today.",
      "Replace a processed meat with leaner proteins",
    ],
    tasksDone: [
      "Use cold-pressed olive oil or avocado oil instead of refined oils.",
      "Include non-starchy vegetables with every meal.",
    ],
  },
  {
    title: "Rejuvenation Candidate",
    icon: (
      <div className="rounded-3xl bg-[#8083CC] p-2.5">
        <img src={FootprintIcon} className="h-6" />
      </div>
    ),
    tasks: ["Aim 10,000 steps a day."],
    tasksDone: [],
  },
  {
    title: "Therapy",
    icon: (
      <div className="rounded-3xl bg-[#39CDC4] p-2.5">
        <img src={SpaIcon} className="h-6" />
      </div>
    ),
    tasks: ["Go to therapy today."],
    tasksDone: [],
  },
];

export default function index() {
  const allTasksDone = MOCK_TODO_DATA.reduce(
    (acc, curr) => acc.concat(curr.tasksDone),
    [] as string[]
  );

  return (
    <section className="w-full">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Daily to-dos</h2>

        <div className="space-y-4">
          {MOCK_TODO_DATA.map((todo, index) => (
            <ToDoBox key={index} {...todo} />
          ))}

          <FinishedTodos tasks={allTasksDone} />
        </div>
      </div>
    </section>
  );
}
