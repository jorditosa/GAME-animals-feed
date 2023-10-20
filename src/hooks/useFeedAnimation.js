import { config, useSpring } from '@react-spring/three';
import { useState } from "react";
import { useDispatch } from "react-redux";
import playAudio from "../helpers/playAudio";
import { addPieceEated, setAction } from "../store/wolf/wolf-slice";

export const useFeedAnimation = () => {
  const [active, setActive] = useState(false);
  const isMobile = window.innerWidth <= 480;
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
    scale: active ? (isMobile ? 0.8 : 1.2) : (isMobile ? 0.6 : 0.9),
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