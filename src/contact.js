export function contactContent(){

const contact= document.createElement('p');
const contact1= document.createElement('div');
contact1.className="contact";
const max= document.createElement('h4');
const caroline= document.createElement('h4');
const email= document.createElement('h4');
const info= document.createElement('div');
info.className='info';
contact.textContent="Are you just four blocks away from Diners,Brooklyn? We are open to deliver the cupcakes by bicycle.We are also open to bulk orders for events"
max.textContent= "Contact our chef: Max black 999-9999";
caroline.textContent= "Contact our Business partner: Caroline Channing 111-1111";
email.textContent= "Email-Id: cupcakebusiness@fmail.com";


const content3= document.createElement('div');
contact1.appendChild(contact);
info.appendChild(max);
info.appendChild(caroline);
info.appendChild(email);
content3.appendChild(contact1);
content3.appendChild(info);
return content3
}
// export {content3};
