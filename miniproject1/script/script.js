const paragraph = document.querySelector("p");
const menu = document.querySelector(".menu-key");
const list = document.querySelector(".hidden-header");
const italic = document.querySelector(".italic-key");
const bold = document.querySelector(".bold-key");
const border = document.querySelector(".border-key");
const ok = document.querySelector(".ok-key");
const borderRange = document.querySelector("#border-range");
const input = document.querySelector("input");
const inputColor = document.querySelector(".color-select");
const clickMenuHandler = () => {
  list.classList.add("header");
  console.log(list.classList);
};
menu.addEventListener("click", clickMenuHandler);
const clickItalicHakdler = () => {
  paragraph.classList.add("italic");
};
italic.addEventListener("click", clickItalicHakdler);
const cleanHandler = () => {
  paragraph.classList.remove("italic");
};
italic.addEventListener("doubleClick", cleanHandler);
const clickBoldHandler = () => {
  paragraph.classList.add("bold");
};
bold.addEventListener("click", clickBoldHandler);
const clickBorderHandler = () => {
  paragraph.classList.add("border");
  borderRange.style.display = "block";
};
border.addEventListener("click", clickBorderHandler);
const clickOkHandler = () => {
  const inputValue = input.value;
  const inputValue2 = `${inputValue}px`;
  console.log(inputValue2);
  paragraph.style.borderWidth = inputValue2;
};
ok.addEventListener("click", clickOkHandler);
const clickColorHandler = () => {
  const inputt = document.querySelectorAll(".color");
  for (const item of inputt) {
    if (item.checked) {
      paragraph.style.color = item.value;
    }
  }
};
inputColor.addEventListener("click", clickColorHandler);
