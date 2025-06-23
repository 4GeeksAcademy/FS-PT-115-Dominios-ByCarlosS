import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const pronoun = ["Carro", "Puerta", "Pistola", "Fortnite", "Residen_Evil_4", "The_Forest"];
  const adj = ["Rapido", "Madera", "Peligrosa", "Free_Play", "Terror", "Adrenalina"];
  const sus = ["rojo", "amarillo", "naranja", "azul", "gris", "morado"];
  for(let i = 0; i < pronoun.length; i++){
    for (let j = 0; j < adj.length; j++){
      for (let k = 0; i < sus.length; k++){
        const element = pronoun[i] + adj[j] + sus[k]
        console.log(element);
        
      };
    };
  };
};
