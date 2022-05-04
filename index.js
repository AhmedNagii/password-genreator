let smallLeters = "qwertyuiopasdfghjklzxcvbnm";
let allPossiableChars = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  ...smallLeters.split(""),
  ...smallLeters.toUpperCase().split(""),
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "(",
  ")",
  "+",
  "/",
];
let newPassCode = "";
let firstPassEl = document.getElementById("first-passcode");
let secondPassEl = document.getElementById("second-passcode");
let thirdPassEl = document.getElementById("third-passcode");
let fourthPassEl = document.getElementById("fourth-passcode");

let myPassElments = [firstPassEl, secondPassEl, thirdPassEl, fourthPassEl];

function generatePassowed() {
  for (let i = 0; i < allPossiableChars.length; i++) {
    if (newPassCode.length < 16) {
      let randomNumber = Math.floor(Math.random() * allPossiableChars.length);
      newPassCode += allPossiableChars[randomNumber];
    }
  }
  return newPassCode;
}

function updpateClass() {
  document.getElementById("fourth-passcode").classList.toggle("my-class");
}

function onClick() {
  for (let i = 0; i < myPassElments.length; i++) {
    myPassElments[i].textContent = generatePassowed();
    myPassElments[i].className = "my-class";
    newPassCode = "";
  }
}
