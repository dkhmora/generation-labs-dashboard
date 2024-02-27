import React from "react";
import ToDoBox from "./ToDoBox";
import MedicationIcon from "../../assets/medication.svg";
import FootprintIcon from "../../assets/footprint.svg";
import SpaIcon from "../../assets/spa.svg";

const MOCK_TODO_DATA = [
  {
    title: "Rejuvenation Candidate",
    icon: (
      <div className="rounded-3xl bg-[#F3C82E] p-2.5">
        <img src={MedicationIcon} className="h-6" />
      </div>
    ),
    tasks: [
      { text: "No alcoholic drinks today.", isDone: false },
      { text: "Replace a processed meat with leaner proteins", isDone: false },
      {
        text: "Use cold-pressed olive oil or avocado oil instead of refined oils.",
        isDone: true,
      },
      {
        text: "Include non-starchy vegetables with every meal.",
        isDone: true,
      },
    ],
  },
  {
    title: "Rejuvenation Candidate",
    icon: (
      <div className="rounded-3xl bg-[#8083CC] p-2.5">
        <img src={FootprintIcon} className="h-6" />
      </div>
    ),
    tasks: [{ text: "Aim 10,000 steps a day.", isDone: false }],
  },
  {
    title: "Therapy",
    icon: (
      <div className="rounded-3xl bg-[#39CDC4] p-2.5">
        <img src={SpaIcon} className="h-6" />
      </div>
    ),
    tasks: [{ text: "Go to therapy today.", isDone: false }],
  },
];

export default function index() {
  return (
    <section className="w-full h-52">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Daily to-dos</h2>

        <div className="space-y-4">
          {MOCK_TODO_DATA.map((todo, index) => (
            <ToDoBox key={index} {...todo} />
          ))}
        </div>
      </div>
    </section>
  );
}
