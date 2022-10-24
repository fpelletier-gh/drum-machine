import { useState } from "react";
import DrumPads from "./components/drumPads";
import "./App.css";

function App() {
  const [clipName, setClipName] = useState<string>("");
  return (
    <div className="App">
      <main id="drum-machine">
        <section id="display">
          <DrumPads setClipName={setClipName} />
          {clipName}
        </section>
      </main>
    </div>
  );
}

export default App;
