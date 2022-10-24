import { useRef, useEffect, Dispatch } from "react";

export interface PadParam {
  text: string;
  id: string;
  source: string;
}

interface DrumPadParam extends PadParam {
  setClipName: Dispatch<React.SetStateAction<string>>;
}

export default function drumPad(props: DrumPadParam): JSX.Element {
  const { text, id, source, setClipName } = props;
  const audioEl = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (audioEl.current) {
        if (e.key === audioEl.current.id) {
          audioEl.current.play();
          setClipName(id);
        }
      }
    });
  });

  function handlePadClick() {
    if (!audioEl.current) return;

    audioEl.current.play();
    setClipName(id);
  }

  return (
    <div className="drum-pad" id={id} onClick={handlePadClick}>
      {text}
      <audio ref={audioEl} src={source} className="clip" id={text}></audio>
    </div>
  );
}
