export function homeContent(){

  const x = document.createElement("IMG");
  x.setAttribute("src", "./images/baking.jpg");
  x.setAttribute("width", "400");
  x.setAttribute("height", "500");
  x.setAttribute("alt", "baking cupcake");

  const div1= document.createElement('div');
  div1.appendChild(x);
//   content1.appendChild(x);



const heading= document.createElement("h1");
heading.textContent="MAX'S HOMEMADE CUPCAKES"

//some intro
const intro=document.createElement('p');
intro.textContent="Step into a world of whimsy and indulgence at Max's homemade cupcake, your go-to spot for the most irresistible cupcakes in town!"


//our story
const storyHeading=document.createElement("h3");
storyHeading.textContent="Our Story"
const story= document.createElement('p');
story.textContent= "So basically we are broke and we need money.Hence we started a side hustle."

//now append everything into content div

const div2= document.createElement('div');
const content1= document.createElement('div');
content1.className="home";
div2.className="div2";


div2.appendChild(heading);
div2.appendChild(intro);
div2.appendChild(storyHeading);
div2.appendChild(story);

content1.appendChild(div1);
content1.appendChild(div2);
return content1;

}
// export {content1};