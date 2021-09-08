import Nav from "./nav";
import Home from "./home";
import "../src/style.css";

const content = document.querySelector("#content");

function page() {
  const element = document.createElement("div");
  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.innerText = 'Beer and Brunch';
  element.appendChild(heading);
  element.appendChild(Nav());
  let navLis = element.querySelectorAll(".nav-li");
  navLis.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.target.classList.add("selected");
      let ul = element.querySelector(".nav-links");
      let liArr = ul.childNodes;
      liArr.forEach((li) => {
        li.innerText != e.target.innerText && li.classList.contains("selected")
          ? li.classList.remove("selected")
          : "";
      });
    });
  });
  element.appendChild(Home());
  return element;
}

content.appendChild(page());
