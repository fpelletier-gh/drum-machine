import { useRef, useEffect, Dispatch } from "react";

export interface PadParam {
  text: string;
  id: string;
  source: string;
}

interface DrumPadParam extends PadParam {
  setClipName: Dispatch<React.SetStateAction<string>>;
}

interface KeyboardEvent {
  key: string;
}

export default function drumPad(props: DrumPadParam): JSX.Element {
  const { text, id, source, setClipName } = props;
  const audioEl = useRef<HTMLAudioElement>(null);
  const drumPadEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent): void {
      if (audioEl.current) {
        if (e.key === audioEl.current.id) {
          audioEl.current.play();
          setClipName(id);
          drumPadEl.current?.classList.add("active");
          setTimeout(() => {
            drumPadEl.current?.classList.remove("active");
          }, 300);
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  function handlePadClick() {
    if (!audioEl.current) return;

    audioEl.current.play();
    setClipName(id);
    drumPadEl.current?.classList.add("active");
    setTimeout(() => {
      drumPadEl.current?.classList.remove("active");
    }, 300);
  }

  return (
    <div ref={drumPadEl} className="drum-pad" id={id} onClick={handlePadClick}>
      {text}
      <audio ref={audioEl} src={source} className="clip" id={text}></audio>
    </div>
  );
}
