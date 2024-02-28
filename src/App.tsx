import "./App.css";
import Navbar from "./components/Navbar";
import DailyToDos from "./components/DailyToDos";
import BioAgeOverview from "./components/BioAgeOverview";

function App() {
  return (
    <main>
      <Navbar />

      <div className="px-4 py-6">
        <DailyToDos />

        <BioAgeOverview />
      </div>
    </main>
  );
}

export default App;
