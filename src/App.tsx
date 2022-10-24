import { useState } from "react";
import DrumPads from "./components/drumPads";
import "./App.scss";

function App() {
  const [clipName, setClipName] = useState<string>("");
  return (
    <div className="App">
      <h1 className="main-title">Drum Machine</h1>
      <main id="drum-machine">
        <DrumPads setClipName={setClipName} />
        <section id="display">{clipName}</section>
      </main>
    </div>
  );
}

export default App;
