import { Dispatch } from "react";
import DrumPad, { PadParam } from "./drumPad";

const pads: Array<PadParam> = [
  {
    text: "Q",
    id: "heater-one",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    text: "W",
    id: "heater-two",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    text: "E",
    id: "heater-tree",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    text: "A",
    id: "heater-four",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    text: "S",
    id: "clap",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    text: "D",
    id: "open-hh",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    text: "Z",
    id: "kick-hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    text: "X",
    id: "kick",
    source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    text: "C",
    id: "closed-hh",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

type DrumPadProps = {
  setClipName: Dispatch<React.SetStateAction<string>>;
};

export default function drumPads({ setClipName }: DrumPadProps): JSX.Element {
  return (
    <section className="drumpads-wrapper">
      {pads.map((pad: PadParam) => (
        <DrumPad
          text={pad.text}
          id={pad.id}
          key={pad.id}
          source={pad.source}
          setClipName={setClipName}
        />
      ))}
    </section>
  );
}
