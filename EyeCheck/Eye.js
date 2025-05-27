const correctNumbers = [1, 2, 3, 4, 5, 6, 7, 9]; // 9 test images total
let usedIndices = new Set();
let currentAnswer = null;

const imageElement = document.getElementById('color-blind-image');
const inputElement = document.getElementById('color-blind-input');
const submitButton = document.querySelector('button'); // or a more specific selector if needed


function displayRandomImage() {
  // Check if all images have been tested
  if (usedIndices.size === correctNumbers.length) {
    alert("You have completed all 8 tests. Thank you!");
    inputElement.style.display = 'none';
    submitButton.style.display = 'none';
    return;
  }

  // Generate a random index that hasn't been used yet
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * correctNumbers.length);
  } while (usedIndices.has(randomIndex));

  usedIndices.add(randomIndex);
  currentAnswer = correctNumbers[randomIndex];

  imageElement.src = `images/color-blind-${currentAnswer}.png`;

  inputElement.value = '';
  inputElement.style.display = 'none';

  setTimeout(() => {
    inputElement.style.display = 'inline';
    inputElement.focus();
  }, 2000);
}

function checkColorBlindness() {
  const userInput = parseInt(inputElement.value);

  if (isNaN(userInput)) {
    alert("Please enter a valid number.");
    return;
  }

  if (userInput === currentAnswer) {
    alert("✅ Correct! Well done.");
  } else {
    alert(`❌ Incorrect. The correct number was ${currentAnswer}.`);
  }

  if (usedIndices.size === correctNumbers.length) {
    alert("You have completed all 9 tests. Thank you!");
    inputElement.style.display = 'none';
    return;
  }

  if (confirm("Do you want to try another image?")) {
    displayRandomImage();
  } else {
    alert("👁️ Thank you for taking the test!");
    inputElement.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", displayRandomImage);
