import "./App.css";
import Navbar from "./components/Navbar";
import DailyToDos from "./components/DailyToDos";

function App() {
  return (
    <main>
      <Navbar />

      <div className="px-4 py-6">
        <DailyToDos />
      </div>
    </main>
  );
}

export default App;
