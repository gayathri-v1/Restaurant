const contact= document.createElement('p');

const max= document.createElement('h4');
const caroline= document.createElement('h4');
const email= document.createElement('h4');

contact.textContent="Are you just four blocks away from Diners,Brooklyn? We are open to deliver the cupcakes by bicycle.We are also open bulk orders for events"
max.textContent= "Contact our chef: Max black 999-9999";
caroline.textContent= "Contact our Business partner: Caroline Channing 111-1111";
email.textContent= "Email-Id: cupcakebusiness@fumail.com";


const content3= document.createElement('div');
content3.appendChild(contact);
content3.appendChild(max);
content3.appendChild(caroline);
content3.appendChild(email);

export {content3};
