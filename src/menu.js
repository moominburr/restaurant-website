import Beer from './beer.jpeg'

export default function Menu() {
    const menu = document.createElement('div');
    const head = document.createElement('h3');
    head.innerText = 'MENU';
    menu.appendChild(head)
    
    return menu;
  }