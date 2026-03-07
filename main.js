// ***********************   BUBBLE CODE ************************
// **                                                          **

// Variable
const resume = document.querySelector(".resume");
const counterDisplay = document.querySelector("h3");
let count = 0;

//Function

//click sound Effect
const laser = () => {
  const audio = new Audio();
  audio.src = "/assets/laser.mp3";
  audio.play();
};

const missedShoot = () => {
  const audio = new Audio();
  audio.src = "/assets/missed.mp3";
  audio.play();
};

const exploding = () => {
  const audio = new Audio();
  audio.src = "/assets/exploding.mp3";
  audio.play();
};

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

  //   plusMinus add random 1 || -1  effect calibrate the left position
  //   const plusMinus = Math.random() > 0.5 ? 1 : -1;
  //   bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  //   color
  const hue = Math.random() * 360;
  const opacity = Math.random() * 0.5 + 0.4;
  bubble.style.background = `hsl(${hue},70%,60%, ${opacity} )`;

  //bubble cleaner
  setTimeout(() => {
    bubble.remove();
  }, 8000);

  //shoot Event
  bubble.addEventListener("click", () => {
    laser();
    bubble.remove();
    count++;
    counterDisplay.textContent = count;

    setTimeout(() => {
      exploding();
    }, 300);
  });
};

document.body.addEventListener("click", () => {
  missedShoot();
});

// bubble generator
const interval = setInterval(addBubble, 500);

// ## Feat : Pause

resume.addEventListener("click", (e) => {
  clearInterval(interval);
});

// Develop next features :
// add reset button, start button
// select level button range
// fix the problem with the sound
// factorize the code
