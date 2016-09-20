// tabrisjs-esimerkki: Kivi-paperi-sakset, TUL 2016

var page = new tabris.Page({
  title: "Peli",
  topLevel: true
});

// koneen valinnan arvonta
function arvonta(uc) {
   
  var cc = "";
  // arvo luku
  var arvottuluku = Math.floor((Math.random() * 3) + 1);
  
  if (arvottuluku == 1) {
  computerchoice.set("text", "Kone valitsi kiven!");
  cc = "kivi";
  }
  
  if (arvottuluku == 2) {
  computerchoice.set("text", "Kone valitsi paperin!");
  cc = "paperi";
  }
  
  if (arvottuluku == 3) {
  computerchoice.set("text", "Kone valitsi sakset!");
  cc = "sakset";
  }
  
  tarkistus(uc,cc)
  
}

// tarkistetaan miten kävi
function tarkistus(uc, cc) {
  
  // uc = käyttäjän valinta
  // cc = koneen valinta
 
  // tasapeli
  if ((cc == "kivi") && (uc == "kivi")){
  gameresult.set("text", "Tasapeli!")
  }
  
  // tasapeli
  if ((cc == "sakset") && (uc == "sakset")){
  gameresult.set("text", "Tasapeli!")
  }
  
  // tasapeli
  if ((cc == "paperi") && (uc == "paperi")){
  gameresult.set("text", "Tasapeli!")
  }
  
  // kone voittaa
  if ((cc == "kivi") && (uc == "sakset")){
  gameresult.set("text", "Kone voittaa!")
  }
    
  // kone voittaa
  if ((cc == "sakset") && (uc == "paperi")){
  gameresult.set("text", "Kone voittaa!")
  }

  // kone voittaa
  if ((cc == "paperi") && (uc == "kivi")){
  gameresult.set("text", "Kone voittaa!")
  }
 
  // käyttäjä voittaa
  if ((cc == "kivi") && (uc == "paperi")){
  gameresult.set("text", "Käyttäjä voittaa!")
  }
  
  // käyttäjä voittaa
  if ((cc == "paperi") && (uc == "sakset")){
  gameresult.set("text", "Käyttäjä voittaa!")
  }
  
  // käyttäjä voittaa
  if ((cc == "sakset") && (uc == "kivi")){
  gameresult.set("text", "Käyttäjä voittaa!")
  }
      
}

new tabris.Button({
  layoutData: {left: 10, top: 10},
  text: "Kivi"
}).on("select", function() {
  userchoice.set("text", "Valitsit kiven!");
  arvonta("kivi");
}).appendTo(page);

new tabris.Button({
  layoutData: {left: 10, top: 70},
  text: "Paperi"
}).on("select", function() {
  userchoice.set("text", "Valitsit paperin!");
  arvonta("paperi");
}).appendTo(page);

new tabris.Button({
  layoutData: {left: 10, top: 130},
  text: "Sakset"
}).on("select", function() {
  userchoice.set("text", "Valitsit sakset!");
  arvonta("sakset");
}).appendTo(page);

// käyttäjän valinta
var userchoice = new tabris.TextView({
  font: "24px",
  layoutData: {left: 10, top: 200 }
}).appendTo(page);

// koneen valinta
var computerchoice = new tabris.TextView({
  font: "24px",
  layoutData: {left: 10, top: 270 }
}).appendTo(page);

// tulos
var gameresult = new tabris.TextView({
  font: "24px",
  layoutData: {left: 10, top: 340 }
}).appendTo(page);

page.open();

      
      
      