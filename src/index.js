import "./style.css";
import {homeContent} from "./home.js"
import {menuContent} from "./menu.js";
import {contactContent} from "./contact.js"

const btn1= document.querySelector('.btn1');
const btn2= document.querySelector('.btn2');
const btn3= document.querySelector('.btn3');
const content=document.getElementById('content');
function clearContent() {
    content.innerHTML = ''; // Clear previous content
  }

btn1.addEventListener('click', loadHomePage)
btn2.addEventListener('click',loadMenuPage)
btn3.addEventListener('click',loadContactPage)

document.addEventListener('DOMContentLoaded', loadHomePage);

function loadHomePage(){
    clearContent();
    const home=homeContent();
    content.appendChild(home);
}
function loadMenuPage(){
    clearContent();
    const menu= menuContent();
    content.appendChild(menu);

}
function loadContactPage(){
    clearContent();
    const contact=contactContent();
    content.appendChild(contact);
}