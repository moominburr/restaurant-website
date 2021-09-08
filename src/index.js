import Nav from "./nav";
import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";
import "../src/style.css";

const content = document.querySelector("#content");

function page() {
  const element = document.createElement("div");
  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.innerText = "Beer and Brunch";
  element.appendChild(heading);
  element.appendChild(Nav());
  const main = document.createElement("main");
  const homeBtn = element.querySelector("#home");
  const menuBtn = element.querySelector("#menu");
  const contactBtn = element.querySelector("#contact");
  homeBtn.addEventListener("click", () => {
    main.innerHTML = "";
    main.appendChild(Home());
  });
  menuBtn.addEventListener("click", () => {
    main.innerHTML = "";
    main.appendChild(Menu());
  });
  contactBtn.addEventListener("click", () => {
    main.innerHTML = "";
    main.appendChild(Contact());
  });

  element.appendChild(main);
  return element;
}

content.appendChild(page());
