const bubble = document.createElement("span");
bubble.classList.add("bubble");
document.body.appendChild(bubble);

const bubbleSize = Math.random() * 200 + 100 + "px";
bubble.style.height = bubbleSize;
bubble.style.width = bubbleSize;

console.log(bubbleSize);
