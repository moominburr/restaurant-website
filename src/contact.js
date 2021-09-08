
export default function Contact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const head = document.createElement('h3');
    head.innerText = 'CONTACT PAGE';
    contact.appendChild(head);
    return contact;
  }