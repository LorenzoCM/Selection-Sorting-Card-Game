function changeSuit() {
  var a;
  a = document.getElementById("changing");
  a.innerHTML = "&#9824;";
  a.style.color = "red";
  a.style.fontSize = "50px";
  setTimeout(function () {
    a.innerHTML = "&#9827;";
    a.style.color = "black";
  }, 100);
  setTimeout(function () {
    a.innerHTML = "&#9829;";
    a.style.color = "red";
  }, 200);
  setTimeout(function () {
    a.innerHTML = "&#9830;";
    a.style.color = "black";
  }, 300);
  setTimeout(function () {
    a.innerHTML = "&#9827;";
    a.style.color = "red";
  }, 400);
  setTimeout(function () {
    a.innerHTML = "&#9829;";
    a.style.color = "black";
  }, 500);
  setTimeout(function () {
    a.innerHTML = "&#9830;";
    a.style.color = "red";
  }, 600);
}
changeSuit();
setInterval(changeSuit, 700);

//Crear variables

const header = document.querySelector(".header"); //Div que será padre de todos los divs cartas.
const input = document.getElementById("numberCards"); //Input donde se introduce el numero de cartas.
const drawCards = document.querySelector(".draw"); // Boton que activara y recibirá la información sobre el numero de cartas.
const sortCards = document.querySelector(".sort"); // Botón que activará el Bubble Sort para arreglar las cartas.
const contenedor = document.querySelector(".container"); //Selecciona el contenedor principal para agregar la div "main".

//Códigos para generar cartas random

var classes = ["spades", "cubs", "diamonds", "hearts"];
var colors = ["red", "black"];
const numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  // "11",
  // "12",
  // "13",
  // "14",
];


//Código de recepción del input

drawCards.addEventListener("click", () => {    
  let inputValue = input.value;    
  if (inputValue === "" || inputValue === "0") {
    alert("Please add the number of cards that you want to draw");
  } else {
    inputValue2 = parseInt(inputValue);        
    var cardsArray = [];    
    const createDiv = document.createElement("div");
    const createP1 = document.createElement("p");
    createDiv.setAttribute("class", "main");
    createP1.setAttribute("class", "title");
    createP1.innerHTML = "Here you have your unsorted cards! &#128565;";
    contenedor.appendChild(createDiv);
    createDiv.appendChild(createP1);           
    var cardStorage = function addCards() {
      for (i = 0; i < inputValue2; i++) {        
        var createDiv2 = document.createElement("div");
        var createDiv3 = document.createElement("div");
        createDiv2.setAttribute("class", "card");
        createDiv3.classList.add("carta", "number");
        //Creación de numeros Random para las cartas.
        var random1 = Math.floor(Math.random() * classes.length);
        var random2 = Math.floor(Math.random() * 2);
        var random3 = Math.floor(Math.random() * 9);
        const uno = createDiv3.innerHTML = numbers[random3]; //Contiene el número de cada carta que se le hará sort.
        const dos = createDiv3.style.color = colors[random2];
        const tres = createDiv3.classList.add(classes[random1]);
        const tres1 = classes[random1]; // Me otorga la clase que se obtiene en cada iteración ya que la var tres genera un array debido a que genera una clase.
        createDiv.appendChild(createDiv2);
        createDiv2.appendChild(createDiv3);           
        let groupCards = {
          number: uno,
          color: dos,
          suit: tres1
        }
        cardsArray.push(groupCards);                                                                               
      }
    }
    cardStorage();    
    
    sortCards.addEventListener("click", () => {
        contenedor.removeChild(createDiv);       
                          
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("class", "main");
        var makeP1 = document.createElement("p");
        makeP1.setAttribute("class", "title");
        makeP1.innerHTML = "Here you have your organized set of cards! &#128565;";
        makeDiv.appendChild(makeP1);        
        contenedor.appendChild(makeDiv);
        var bubbleLog = document.createElement("div");
        var bubbleP = document.createElement("p");
        var nuevaDiv = document.createElement("div");
        bubbleP.innerHTML = "Bubble Log";
        bubbleP.style.fontSize = "30px";
        bubbleLog.style.marginTop = "20px";
        bubbleLog.appendChild(bubbleP);
        contenedor.appendChild(bubbleLog);
        var lastDiv = document.createElement("div");
        lastDiv.classList.add("bloque");
        contenedor.appendChild(lastDiv);  

        const selectSort = (cardsArray) => {
          let min = 0;
          while (min < cardsArray.length - 1) {
              for( let i = min+1; i < cardsArray.length; i++ ) {
                if (parseInt(cardsArray[min].number) > parseInt(cardsArray[i].number)) {
                  let aux = cardsArray[min];
                  cardsArray[min] = cardsArray[i];
                  cardsArray[i] = aux;
                } 
                var lastDiv = document.createElement("div");               
                lastDiv.classList.add("bloque");                                     
                contenedor.appendChild(lastDiv);                
                cardsArray.forEach((element) => {                  
                  var makeDiv2 = document.createElement("div");
                  var makeDiv3 = document.createElement("div");
                  makeDiv2.setAttribute("class", "card", "bloque");
                  makeDiv3.classList.add("number");
                  makeDiv3.innerHTML = parseInt(element.number);
                  makeDiv3.style.color = element.color;
                  makeDiv3.classList.add(element.suit);
                  makeDiv2.appendChild(makeDiv3);
                  lastDiv.appendChild(makeDiv2); 
              });                                           
              }
              min++;                            
          }
        return cardsArray;
      };

      selectSort(cardsArray);
      console.log(selectSort(cardsArray));
        
            
        for (i = 0; i < cardsArray.length; i++) {
        var makeDiv2 = document.createElement("div");
        var makeDiv3 = document.createElement("div");
        makeDiv2.setAttribute("class", "card");
        makeDiv3.classList.add("number");
        makeDiv3.innerHTML = parseInt(cardsArray[i].number);
        makeDiv3.style.color = cardsArray[i].color;
        makeDiv3.classList.add(cardsArray[i].suit);
        makeDiv2.appendChild(makeDiv3);
        makeDiv.appendChild(makeDiv2); 
      }            
    })      
  }  
});
