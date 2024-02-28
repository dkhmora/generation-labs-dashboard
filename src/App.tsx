import "./App.css";
import Navbar from "./components/Navbar";
import DailyToDos from "./components/DailyToDos";
import BioAgeOverview from "./components/BioAgeOverview";
import LogisticTracker from "./components/LogisticTracker";

function App() {
  return (
    <main>
      <Navbar />

      <div className="px-4 py-6">
        <DailyToDos />

        <BioAgeOverview />

        <LogisticTracker />
      </div>
    </main>
  );
}

export default App;
