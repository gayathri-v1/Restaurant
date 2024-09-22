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

const content1= document.createElement('div');

content1.appendChild(heading);
content1.appendChild(intro);
content1.appendChild(storyHeading);
content1.appendChild(story);

export {content1};