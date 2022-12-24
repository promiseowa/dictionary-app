import React from "react";
import "./Phonetic.scss";
import useSound from "use-sound";
import { AiOutlineSound } from "react-icons/ai";

const Phonetic = ({ phonetic }) => {
  const soundUrl = phonetic.audio;
  const [play, { stop, isPlaying }] = useSound(soundUrl);
  if (phonetic) {
    return (
      <div className="Phonetic">
        <button
          type="button"
          className="btn btn-circle"
          onClick={isPlaying ? stop : play}
        >
          <AiOutlineSound />
        </button>
        <span>{phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
};
export default Phonetic;
