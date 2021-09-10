
export default function Contact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const head = document.createElement('h3');
    head.innerText = 'Contact us';
    contact.appendChild(head);
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    const phoneNum = document.createElement('h4');
    phoneNum.innerText = '01234 567 890';
    contactInfo.appendChild(phoneNum);
    const address = document.createElement('h4');
    address.innerText = '2 London Lane, Edmonton, N15 12LD';
    contactInfo.appendChild(address);
    const emailAdd = document.createElement('h4');
    emailAdd.innerText = 'info@beerandbrunch.co';
    contactInfo.appendChild(emailAdd);
    contact.appendChild(contactInfo);
    return contact;
  }