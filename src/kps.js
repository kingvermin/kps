// tabrisjs-esimerkki: Kivi-paperi-sakset, TUL 2016/2017

// muuttujien alustukset
var cpoints = 0 // koneen pisteet
var upoints = 0 // pelaajan pisteet

const {Button, ImageView, TextView, ui} = require('tabris');

// käyttäjän valintakuvat
new ImageView({
  width: 10, height: 10, 
  layoutData: {width: 150,top: 30},
  image: {src: "http://vaolabs.fi/tul/tabrisjs/kivi.png"},
  highlightOnTouch: true
}).on("tap", function() {
  arvonta("kivi");  
}).appendTo(ui.contentView);

new ImageView({
  layoutData: {width: 150, top: 170},
  image: {src: "http://vaolabs.fi/tul/tabrisjs/paperi.png"},
  highlightOnTouch: true
}).on("tap", function() {
  arvonta("paperi");  
}).appendTo(ui.contentView);

new ImageView({
  layoutData: {width: 150, top: 320},
  image: {src: "http://vaolabs.fi/tul/tabrisjs/sakset.png"},
  highlightOnTouch: true
}).on("tap", function() {
  arvonta("sakset");  
}).appendTo(ui.contentView);

// koneen vastauskuva
var ccpic = new ImageView({
  layoutData: {width: 150, top: 300, left: 200, top: 150},
  highlightOnTouch: true
}).on("tap", function() {
  // 
}).appendTo(ui.contentView);


// "teksti: Pelaaja:"
new TextView({
  font: "12px",
  layoutData: {left: 10, top: 10 },
  text: "Pelaaja: "
}).appendTo(ui.contentView);

// "teksti: Kone:"
new TextView({
  font: "12px",
  layoutData: {left: 200, top: 120 },
  text: "Kone: "
}).appendTo(ui.contentView);

// tekstikenttä tulokselle
var gameresult = new TextView({
  font: "24px",
  layoutData: {centerX: 0, top: 500 }
}).appendTo(ui.contentView);

// tekstikenttä pelaajan pisteille
var userpoints = new TextView({
  font: "24px",
  layoutData: {left: 10, top: 500 },
  text: "0"
}).appendTo(ui.contentView);

// tekstikenttä koneen pisteille
var computerpoints = new TextView({
  font: "24px",
  layoutData: {left: 300, top: 500 },
  text: "0"
}).appendTo(ui.contentView);

// koneen valinnan arvonta
function arvonta(uc) {
   
  var cc = "";
  
  // arvo luku
  var arvottuluku = Math.floor((Math.random() * 3) + 1);
  
  if (arvottuluku == 1) {
  ccpic.set("image", "http://vaolabs.fi/tul/tabrisjs/kivi.png");
  cc = "kivi";
  }
  
  if (arvottuluku == 2) {
  ccpic.set("image", "http://vaolabs.fi/tul/tabrisjs/paperi.png");
  cc = "paperi";
  }
  
  if (arvottuluku == 3) {
  ccpic.set("image", "http://vaolabs.fi/tul/tabrisjs/sakset.png");
  cc = "sakset";
  }
  
  // kutsutaan tarkistusta 
  tarkistus(uc,cc);
  
}

// tarkistetaan miten kävi
function tarkistus(uc, cc) {
  
  // uc = käyttäjän valinta
  // cc = koneen valinta
 
  // tasapeli
  if ((cc == "kivi") && (uc == "kivi")){
  gameresult.set("text", "Tasapeli!");
  }
  
  // tasapeli
  if ((cc == "sakset") && (uc == "sakset")){
  gameresult.set("text", "Tasapeli!");
  }
  
  // tasapeli
  if ((cc == "paperi") && (uc == "paperi")){
  gameresult.set("text", "Tasapeli!");
  }
  
  // kone voittaa
  if ((cc == "kivi") && (uc == "sakset")){
  gameresult.set("textColor", "red");
  gameresult.set("text", "Kone voittaa!");
  cpoints += 1;
  computerpoints.set("text", cpoints);
  }
    
  // kone voittaa
  if ((cc == "sakset") && (uc == "paperi")){
  gameresult.set("textColor", "red");
  gameresult.set("text", "Kone voittaa!");
  cpoints += 1;
  computerpoints.set("text", cpoints);
  }

  // kone voittaa
  if ((cc == "paperi") && (uc == "kivi")){
  gameresult.set("textColor", "red");
  gameresult.set("text", "Kone voittaa!");
  cpoints += 1;
  computerpoints.set("text", cpoints);
  }
 
  // käyttäjä voittaa
  if ((cc == "kivi") && (uc == "paperi")){
  gameresult.set("textColor", "green");
  gameresult.set("text", "Pelaaja voittaa!");
  upoints += 1;
  userpoints.set("text", upoints);
  }
  
  // käyttäjä voittaa
  if ((cc == "paperi") && (uc == "sakset")){
  gameresult.set("textColor", "green");
  gameresult.set("text", "Pelaaja voittaa!");
  upoints += 1;
  userpoints.set("text", upoints);
  }
  
  // käyttäjä voittaa
  if ((cc == "sakset") && (uc == "kivi")){
  gameresult.set("textColor", "green");
  gameresult.set("text", "Pelaaja voittaa!");
  upoints += 1;
  userpoints.set("text", upoints);
  }
      
}
