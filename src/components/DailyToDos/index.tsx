import React from "react";
import ToDoBox from "./ToDoBox";
import MedicationIcon from "../../assets/medication.svg";
import FootprintIcon from "../../assets/footprint.svg";
import SpaIcon from "../../assets/spa.svg";
import FinishedTodos from "./FinishedTodos";
import CircleImageIcon from "../CircleImageIcon";

const MOCK_TODO_DATA = [
  {
    title: "Rejuvenation Candidate",
    icon: <CircleImageIcon icon={MedicationIcon} className="bg-[#F3C82E]" />,
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
    icon: <CircleImageIcon icon={FootprintIcon} className="bg-[#8083CC]" />,
    tasks: ["Aim 10,000 steps a day."],
    tasksDone: [],
  },
  {
    title: "Therapy",
    icon: <CircleImageIcon icon={SpaIcon} className="bg-[#39CDC4]" />,
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
