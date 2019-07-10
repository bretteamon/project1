/*#region-----------------Get Random Dino Card----------*/
// const xhr = new XMLHttpRequest();
// const url = 'https://api.magicthegathering.io/v1/cards?set=XLN&type=Dinosaur';
// xhr.responseType ='json';
// xhr.onreadystatechange = () => {
//      if(xhr.readyState === XMLHttpRequest.DONE){
//         let results = xhr.response;
//         let max = results.cards.length;
//         let x = Math.floor(Math.random() * Math.floor(max));
    
//         // console.log(results["cards"][0]["name"]);
//         console.log(results.cards[0].name);
//         console.log(results.cards.length);
//         let cardImg = results.cards[x].imageUrl;
//         let dinoName = results.cards[x].name;
//         console.log(cardImg);
//         document.getElementById('cardImage').src = cardImg;
//         document.getElementById('dinoName').innerHTML = dinoName;
//     }   
// };

// xhr.open('GET',url);
// xhr.send();


/*#endregion--------------------------------------------*/
/*#region---------Cycle Thru Cards----------------------*/
const mtg = require('mtgsdk')

mtg.card.find(2)
  .then(result => {
    console.log(result.card.name) // "Black Lotus"
})

// const getCard = () => {
//   const xhr = new XMLHttpRequest();
//   const set = '?set=XLN&set=RIX&';
//   const creatureType = document.getElementById('creatureType').value;
//   const url = 'https://api.magicthegathering.io/v1/cards';
//   const urlComplete = `${url}${set}${creatureType}`;
//   xhr.onreadystatechange = () => {
//     if(xhr.readyState === XMLHttpRequest.DONE){ 
//       console.log(xhr.response);
//         results = xhr.response;
//     }
//   };
//   xhr.open('GET',urlComplete);
//   xhr.send();
// };

// document.getElementById('creatureType').addEventListener('change',getCard);