// ***********************   BUBBLE CODE ************************
// **                                                          **
//Variable
const resume = document.querySelector(".resume");

console.log(resume);
// ## Feat : Bubble creation

const addBubble = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const bubbleSize = Math.random() * 200 + 100 + "px";
  bubble.style.height = bubbleSize;
  bubble.style.width = bubbleSize;

  bubble.style.top = Math.random() * 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  console.log(bubble.style.top);
};

// ## Feat : Pause
const interval = setInterval(() => {
  addBubble();
}, 1000);

resume.addEventListener("click", () => {
  clearInterval(interval);
});
