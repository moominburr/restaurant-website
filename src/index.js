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
  main.appendChild(Home());
  const homeBtn = element.querySelector("#home");
  const menuBtn = element.querySelector("#menu");
  const contactBtn = element.querySelector("#contact");
  const btns = element.querySelectorAll('.nav-li');
  
  homeBtn.addEventListener("click", () => {
    homeBtn.classList.add('nav-li-active');
    btns.forEach(btn => {
      if(btn.innerText === 'home') return;
      btn.classList.contains('nav-li-active') ? btn.classList.remove('nav-li-active') : '';
    });
    main.innerHTML = "";
    main.appendChild(Home());
  });
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.add('nav-li-active');
    btns.forEach(btn => {
      if(btn.innerText === 'menu') return;
      btn.classList.contains('nav-li-active') ? btn.classList.remove('nav-li-active') : '';
    });
    main.innerHTML = "";
    main.appendChild(Menu());
  });
  contactBtn.addEventListener("click", () => {
    contactBtn.classList.add('nav-li-active');
    console.log(contactBtn);
    btns.forEach(btn => {
      if(btn.innerText === 'contact') return;
      btn.classList.contains('nav-li-active') ? btn.classList.remove('nav-li-active') : '';
    });
    main.innerHTML = "";
    main.appendChild(Contact());
  });

  element.appendChild(main);
  return element;
}

content.appendChild(page());
