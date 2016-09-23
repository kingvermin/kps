// tabrisjs-esimerkki: Kivi-paperi-sakset, TUL 2016

// muuttujien alustukset
var cpoints = 0 // koneen pisteet
var upoints = 0 // pelaajan pisteet

var page = new tabris.Page({
  title: "Kivi - Paperi - Sakset",
  background: "#99ccff", 
  topLevel: true
});

// käyttäjän valintakuvat
new tabris.ImageView({
  width: 10, height: 10, 
  layoutData: {width: 150,top: 30},
  image: {src: "http://vaolabs.fi/tul/tabrisjs/kivi.png"},
  highlightOnTouch: true
}).on("tap", function() {
  arvonta("kivi");  
}).appendTo(page);

new tabris.ImageView({
  layoutData: {width: 150, top: 170},
  image: {src: "http://vaolabs.fi/tul/tabrisjs/paperi.png"},
  highlightOnTouch: true
}).on("tap", function() {
  arvonta("paperi");  
}).appendTo(page);

new tabris.ImageView({
  layoutData: {width: 150, top: 320},
  image: {src: "http://vaolabs.fi/tul/tabrisjs/sakset.png"},
  highlightOnTouch: true
}).on("tap", function() {
  arvonta("sakset");  
}).appendTo(page);

// koneen vastauskuva
var ccpic = new tabris.ImageView({
  layoutData: {width: 150, top: 300, left: 200, top: 150},
  highlightOnTouch: true
}).on("tap", function() {
  // 
}).appendTo(page);


// "teksti: Pelaaja:"
new tabris.TextView({
  font: "12px",
  layoutData: {left: 10, top: 10 },
  text: "Pelaaja: "
}).appendTo(page);

// "teksti: Kone:"
new tabris.TextView({
  font: "12px",
  layoutData: {left: 200, top: 120 },
  text: "Kone: "
}).appendTo(page);

// tekstikenttä tulokselle
var gameresult = new tabris.TextView({
  font: "24px",
  layoutData: {centerX: 0, top: 500 }
}).appendTo(page);

// tekstikenttä pelaajan pisteille
var userpoints = new tabris.TextView({
  font: "24px",
  layoutData: {left: 10, top: 500 },
  text: "0"
}).appendTo(page);

// tekstikenttä koneen pisteille
var computerpoints = new tabris.TextView({
  font: "24px",
  layoutData: {left: 300, top: 500 },
  text: "0"
}).appendTo(page);

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

page.open();