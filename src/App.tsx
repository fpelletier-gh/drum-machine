import DrumPads from "./components/drumPads";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main id="drum-machine">
        <section id="display">
          <DrumPads />
        </section>
      </main>
    </div>
  );
}

export default App;
