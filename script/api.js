/*#region-----------------Get Random Card----------*/
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
let results;
let x = 0;
let max;
document.getElementById('creatureType').addEventListener('change',getCard = () => {
  const xhr = new XMLHttpRequest();
  const set = '?set=XLN&set=RIX&';
  const creatureType = document.getElementById('creatureType').value;
  const url = 'https://api.magicthegathering.io/v1/cards';
  const urlComplete = `${url}${set}${creatureType}`;
  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){ 
      //console.log(xhr.response);
        results = JSON.parse(xhr.response);
        xhrResponse(x);
        return results;
    }
  };
  xhr.open('GET',urlComplete, true);
  xhr.send();
});
const xhrResponse = (x) => {
  // console.log(results);
  let max = parseInt(results.cards.length-1);
  // console.log(max);
  let cardImg = results.cards[x].imageUrl;
  let dinoName = results.cards[x].name;
  // console.log(cardImg);
  document.getElementById('cardImage').src = cardImg;
  document.getElementById('dinoName').innerHTML = dinoName;
  };
// const previous = ()=> {
//     if (x = 0){
//       console.log(x);
//       x=max-1; 
//       console.log(x);
//       xhrResponse(x);
//       return x; 
//     }else{
//       x--;
//       parseInt(x);  
//       xhrResponse(x);
//       return x;
// }
// };
// const next = (x,max)=> {
//   if (x = max){
//     x = 0; 
//     console.log(x);
//     xhrResponse(x);
//     console.log(xhrResponse(x)); 
//     return x;
//   }else{
//     x++;  
//     console.log(x);
//     xhrResponse(x);
//     console.log(xhrResponse(x));
//     return x;
// }
// };
let previous = () =>{
  x--;
  xhrResponse(x);
}
const next = ()=> {
  x++;
  xhrResponse(x);
};
/*#endregion------------*/