// ***********************   BUBBLE CODE ************************
// **                                                          **
//Variable
const resume = document.querySelector(".resume");

// ## Feat : Bubble creation

const addBubble = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  //   size
  const bubbleSize = Math.random() * 200 + 100 + "px";
  bubble.style.height = bubbleSize;
  bubble.style.width = bubbleSize;

  //   position
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  //   color
  const hue = Math.random() * 360;
  const opacity = Math.random() * 0.5 + 0.4;
  bubble.style.background = `hsl(${hue},70%,60%, ${opacity} )`;
};

// devmode : to remove before production
addBubble();

// ## Feat : Pause
// const interval = setInterval(() => {
//   addBubble();
// }, 1000);

// resume.addEventListener("click", () => {
//   clearInterval(interval);
// });
