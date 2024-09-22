const item1= document.createElement('h4');
item1.textContent="Classic Vanilla - 5$";


const item2=document.createElement('h4')
item2.textContent="Oreo cupcake - 10$";


const item3=document.createElement('h4')
item3.textContent="Blueberry cupcake -10$";


const item4=document.createElement('h4')
item4.textContent="Max's special Unicorn cupcake -10$";

const item5=document.createElement('h4')
item5.textContent="Caramel cupcake -10$";

const content2= document.createElement('div');

content2.appendChild(item1);
content2.appendChild(item2);
content2.appendChild(item3);
content2.appendChild(item4);
content2.appendChild(item5);

export {content2};