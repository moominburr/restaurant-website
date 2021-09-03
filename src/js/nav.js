function Nav() {
    let links = ['home', 'menu', 'contact'];
    const ul = document.createElement('ul');
    ul.classList.add('nav-links');
    links.forEach(link => {
        let a = document.createElement('a');
        a.setAttribute('href', `/${link}`);
        a.innerText = link;
        let li = document.createElement('li');
        li.appendChild(a);
        ul.appendChild(li);
    });


    const nav = document.createElement('nav');

}