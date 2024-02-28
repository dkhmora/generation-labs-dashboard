import "./App.css";
import AppBar from "./components/AppBar";
import DailyToDos from "./components/DailyToDos";
import BioAgeOverview from "./components/BioAgeOverview";
import LogisticTracker from "./components/LogisticTracker";

function App() {
  return (
    <main>
      <AppBar />

      <div className="px-4 py-6 space-y-16">
        <DailyToDos />

        <BioAgeOverview />

        <LogisticTracker />
      </div>
    </main>
  );
}

export default App;
