"use strict";

const compFolder = document.querySelector(".comp-folder1");
const inputFolder = document.querySelector(".folder2-input");
const renderOption = document.querySelector(".render-option");
const resultText = document.querySelector(".result-text");
const submitButton = document.getElementsByTagName("button")[0];

const compChoice = () => {
  // select number from the range of numbers 1 - 20;
  const createNum = Math.floor(Math.random() * 20) + 1;
  compFolder.textContent = createNum;
};

const getInput = () => inputFolder.value > 0;
const checkLength = () => inputFolder.value.length > 0;

const mainButton = () => {
  // using a conditional statement
  let message = "";
  if (checkLength()) {
    getInput === compChoice()
      ? (message = `Congratulations Game Won!, You typed ${inputFolder.value}.`)
      : (message = `Try Again, You typed ${inputFolder.value}.`);

    resultText.textContent = message;
    inputFolder.value = "";
  }
};

submitButton.addEventListener("click", mainButton);
