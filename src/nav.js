export default function Nav() {
  let links = ["home", "menu", "contact"];
  const ul = document.createElement("ul");
  ul.classList.add("nav-links");
  links.forEach((link) => {
    let li = document.createElement("li");
    li.innerText = link;
    li.classList.add("nav-li");
    li.setAttribute('id', link);
    ul.appendChild(li);
  });

  const nav = document.createElement("nav");
  nav.appendChild(ul);
  return nav;
}
