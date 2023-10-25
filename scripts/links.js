const baseURL = "https://ealmarazr.github.io/wdd230/";
const linksURL = "https://ealmarazr.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}


const displayLinks = (weeks) => {
  /*   const cards = document.querySelector('#cards'); */
     const cards = document.querySelector('div#cards');
 
     prophets.forEach((prophet) => {
       /* build html */
       let card           = document.createElement('section');
       let link           = document.createElement('h2');
       
       
       
     card.appendChild(link);
      });
   }
 
 