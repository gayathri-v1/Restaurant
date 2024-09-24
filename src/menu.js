export function menuContent(){
    const vanilla = document.createElement("IMG");
    vanilla.setAttribute("src", "./images/vanilla.jpg");
    vanilla.setAttribute("width", "250");
    vanilla.setAttribute("height", "250");
    vanilla.setAttribute("alt", "vanilla cupcake");
const item1= document.createElement('h4');
item1.textContent="Classic Vanilla - 5$";
const vanillaDiv= document.createElement('div');
vanillaDiv.appendChild(vanilla);
vanillaDiv.appendChild(item1);

const oreo = document.createElement("IMG");
oreo.setAttribute("src", "./images/oreo.jpg");
oreo.setAttribute("width", "250");
oreo.setAttribute("height", "250");
oreo.setAttribute("alt", "oreo cupcake");
const item2=document.createElement('h4')
item2.textContent="Oreo cupcake - 10$";
const oreoDiv= document.createElement('div');
oreoDiv.appendChild(oreo);
oreoDiv.appendChild(item2);

const blueberry = document.createElement("IMG");
blueberry.setAttribute("src", "./images/blueberry.jpg");
blueberry.setAttribute("width", "250");
blueberry.setAttribute("height", "250");
blueberry.setAttribute("alt", "blueberry cupcake");
const item3=document.createElement('h4')
item3.textContent="Blueberry cupcake -10$";
const blueberryDiv= document.createElement('div');
blueberryDiv.appendChild(blueberry);
blueberryDiv.appendChild(item3);

const unicorn = document.createElement("IMG");
unicorn.setAttribute("src", "./images/unicorn.jpg");
unicorn.setAttribute("width", "250");
unicorn.setAttribute("height", "250");
unicorn.setAttribute("alt", "unicorn cupcake");
const item4=document.createElement('h4')
item4.textContent="Max's special Unicorn cupcake -10$";
const unicornDiv= document.createElement('div');
unicornDiv.appendChild(unicorn);
unicornDiv.appendChild(item4);


const caramel = document.createElement("IMG");
caramel.setAttribute("src", "./images/caramel.jpg");
caramel.setAttribute("width", "250");
caramel.setAttribute("height", "250");
caramel.setAttribute("alt", "caramel cupcake");
const item5=document.createElement('h4')
item5.textContent="Caramel cupcake -10$";
const caramelDiv= document.createElement('div');
caramelDiv.appendChild(caramel);
caramelDiv.appendChild(item5);

const content2= document.createElement('div');
content2.className="menu";

content2.appendChild(vanillaDiv);
content2.appendChild(oreoDiv);
content2.appendChild(blueberryDiv);
content2.appendChild(unicornDiv);
content2.appendChild(caramelDiv);

return content2;
}
// export {content2};