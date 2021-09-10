import Beer from './beer.jpeg'
import menuItemsList from './menuItems';

export default function Menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const head = document.createElement('h3');
    head.innerText = 'Summer Menu';
    menu.appendChild(head);
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    let menuItems = menuItemsList();
    menuItems.forEach(item => {
      const itemCard = document.createElement('div');
      itemCard.classList.add('item-card');
      const name = document.createElement('h4');
      name.innerText = item.name;
      itemCard.appendChild(name);
      const description = document.createElement('p');
      description.innerText = item.description;
      itemCard.appendChild(description);
      const price = document.createElement('h5');
      price.innerText = `£${item.price}`;
      itemCard.appendChild(price);
      menuCard.appendChild(itemCard); 
    });
    menu.appendChild(menuCard);
    return menu;
  }