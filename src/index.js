import {content1} from "./home.js"
import {content2} from "./menu.js";
import {content3} from "./contact.js"

const btn1= document.querySelector('.btn1');
const btn2= document.querySelector('.btn2');
const btn3= document.querySelector('.btn3');
const content=document.getElementById('content');
btn1.addEventListener('click',()=>{
    content.appendChild(content1);
    console.log("home button click");
})
btn2.addEventListener('click',()=>{
    content.appendChild(content2);
    console.log("menu button click");
})
btn3.addEventListener('click',()=>{
    content.appendChild(content3);
    console.log("home button click");
})