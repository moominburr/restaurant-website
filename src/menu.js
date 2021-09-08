import Beer from './beer.jpeg'

export default function Menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const head = document.createElement('h3');
    head.innerText = 'MENU';
    menu.appendChild(head)
    
    return menu;
  }