import { useRef, useEffect } from "react";

export interface drumPadParam {
  text: string;
  id: string;
  source: string;
}

export default function drumPad(props: drumPadParam): JSX.Element {
  const { text, id, source } = props;
  const audioEl = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (!audioEl.current) throw Error("audioEl is not assigned");
      if (e.key === audioEl.current.id) {
        audioEl.current.play();
      }
    });
  });

  function handlePadClick() {
    if (!audioEl.current) throw Error("audioEl is not assigned");

    audioEl.current.play();
  }

  return (
    <div className="drum-pad" id={id} onClick={handlePadClick}>
      {text}
      <audio ref={audioEl} src={source} className="clip" id={text}></audio>
    </div>
  );
}
