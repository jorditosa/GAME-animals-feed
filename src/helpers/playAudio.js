const playAudio = (path, loop = false) => {
  const audio = new Audio(path);
  audio.loop = loop;
  audio.play();
}

export default playAudio;