// 1)TASK
let count = 0;
const countElement = document.querySelector('#count');

function incrementCounter() {
  count++;
  countElement.textContent = count;

  if (count === 30) {
    clearInterval(interval);
    console.log("Счетчик достиг значения 30.");
  }
}

const interval = setInterval(incrementCounter, 1000);

//2)task
const parent = document.querySelector("#parent");
const child = document.querySelector("#child_block");

function moveChildBlock(distance, duration, direction) {
  const rightPosition = parseInt(child.style.right) || 0;
  const topPosition = parseInt(child.style.top) || 0;

  let newPosition;

  if (direction === "right") {
    newPosition = rightPosition + distance;
    child.style.right = newPosition + "px";

    if (newPosition < 250) {
      setTimeout(function() {
        moveChildBlock(distance, duration, direction);
      }, duration);
    } else {
      moveChildBlock(distance, duration, "down");
    }
  } else if (direction === "down") {
    newPosition = topPosition + distance;
    child.style.top = newPosition + "px";

    if (newPosition < 250) {
      setTimeout(function() {
        moveChildBlock(distance, duration, direction);
      }, duration);
    } else {
      moveChildBlock(distance, duration, "left");
    }
  } else if (direction === "left") {
    newPosition = rightPosition - distance;
    child.style.right = newPosition + "px";

    if (newPosition >= 0) {
      setTimeout(function() {
        moveChildBlock(distance, duration, direction);
      }, duration);
    } else {
      moveChildBlock(distance, duration, "up");
    }
  } else if (direction === "up") {
    newPosition = topPosition - distance;
    child.style.top = newPosition + "px";

    if (newPosition >= 0) {
      setTimeout(function() {
        moveChildBlock(distance, duration, direction);
      }, duration);
    } else {
      // Optional: Reset the block's position after completing the pattern
      child.style.right = "0px";
      child.style.top = "0px";
    }
  }
}

moveChildBlock(10, 100, "right");