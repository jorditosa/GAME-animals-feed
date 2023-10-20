import { config, useSpring } from '@react-spring/three';
import { useState } from "react";
import { useDispatch } from "react-redux";
import playAudio from "../helpers/playAudio";
import { addPieceEated, setAction } from "../store/wolf/wolf-slice";

export const useFeedAnimation = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const playAudioAction = () => {
    playAudio("/audios/success.mp3", false);
  };

  const dispatchActions = () => {
    dispatch(addPieceEated());
    dispatch(setAction("Gallop"));
    // Reset to initial state
    setTimeout(() => {
      dispatch(setAction("Idle_2"));
    }, 2000);
  };

  const { scale } = useSpring({
    scale: active ? 1.6 : 1.2,
    config: config.wobbly
  });

  console.log(scale);

  return {
    dispatchActions,
    playAudioAction,
    scale,
    active,
    setActive
  }


};