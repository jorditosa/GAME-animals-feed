import Confetti from 'react-dom-confetti';

const config = {
  angle: "105",
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: "2010",
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};
return <Confetti active={ someProp } config={ config }/>