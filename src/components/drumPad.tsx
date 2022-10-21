export interface drumPadParam {
  text: string;
  id: string;
  source: string;
}

export default function drumPad(props: drumPadParam): JSX.Element {
  const { text, id, source } = props;
  return (
    <div className="drum-pad" id={id}>
      {text}
      <audio src={source} className="clip" id={text}></audio>
    </div>
  );
}
