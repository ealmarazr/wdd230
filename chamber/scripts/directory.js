const file = 'scripts/directory.json';

/* Read the data file */
const dataCards = 'data/companies.json'

const displayCards = (dataCards) =>{

    dataCards.forEach((dataCard) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        
        /*BUILD DE IMAGE RECORD*/
        image.setAttribute('src', dataCard.img);
        image.setAttribute('alt',  `image of ${dataCard.name}`);
        image.setAttribute('loading', 'lazy');
        
        p.setAttribute('class', 'disapear');
        p4.setAttribute('class', 'disapear');
        
        
        h2.textContent = `${dataCard.name}`
        p.textContent = `${dataCard.address}`
        p2.textContent = `${dataCard.phone}`
        p3.textContent = `${dataCard.email}`
        p4.textContent = `${dataCard.website}`
        
        card.appendChild(h2);
        card.appendChild(image)
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(card);
        
    })
}

async function getDataCard() {
    const response = await fetch(dataCards);
    const data = await response.json();
    displayCards(data);
  }
  
  getDataCard();
apiFetch();