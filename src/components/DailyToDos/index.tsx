import { useState } from "react";
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
    title: "Fitness",
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

export default function DailyToDos() {
  const [todos, setTodos] = useState(MOCK_TODO_DATA);

  const allTasksDone = todos.reduce(
    (acc, curr) => acc.concat(curr.tasksDone),
    [] as string[]
  );

  const onClickCheckbox = (title: string, text: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.title === title) {
        // Check if the task exists in the current tasks list
        const taskExists = todo.tasks.includes(text);
        if (taskExists) {
          // Create a new tasks list excluding the one that's being moved to tasksDone
          const newTasks = todo.tasks.filter((task) => task !== text);
          // Add the task to the tasksDone list
          const newTasksDone = [...todo.tasksDone, text];

          return { ...todo, tasks: newTasks, tasksDone: newTasksDone };
        }
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <section className="w-full">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Daily to-dos</h2>

        <div className="space-y-4">
          {todos.map((todo) => (
            <ToDoBox
              key={todo.title}
              {...todo}
              onClickCheckbox={onClickCheckbox}
            />
          ))}

          <FinishedTodos tasks={allTasksDone} />
        </div>
      </div>
    </section>
  );
}
