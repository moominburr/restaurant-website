import Beer from './beer.jpeg'

export default function Home() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    const beerImg = new Image();
    beerImg.src = Beer;
    beerImg.classList.add('beer-img');
    const subheading = document.createElement('h3');
    subheading.classList.add('subheading');
    subheading.innerText = 'Everything you ever wanted!'
    const homeCopy = document.createElement('p');
    homeCopy.classList.add('home-copy');
    homeCopy.innerText = `Welcome to Beer and Brunch, where brunch is served all day, and beer all night. You can mix and match them to your hearts content. We find comfort in sausages and hops, bacon and barley, and know you will too.`;

    homeContent.appendChild(beerImg);
    homeContent.appendChild(subheading);
    homeContent.appendChild(homeCopy);

    
    return homeContent;
  }