//import nav from 'nav.js';
import Beer from "../src/beer.jpeg";

function page() {
  const element = document.createElement("nav");
  element.innerText = "Nav goes here";
  const myBeer = new Image();
  myBeer.src = Beer;
  element.appendChild(myBeer);
  return element;
}
const content = document.querySelector("#content");
content.appendChild(page());
