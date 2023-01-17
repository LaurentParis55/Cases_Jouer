

const canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");

var nbreDePions = 10;
var nombreDeCases = 10;
canvas.width = 901;
canvas.height = 901;
let gamegrid = [];
PlayThis = [];
const cellSize = 90;
var ArrayPionsBlancs = [[45,45],[135,45],[225,45],[315,45],[405,45],[495,45],[585,45],[675,45],[765,45],[855,45]];
var ArrayPionsBruns  = [[45,856],[135,856],[225,856],[315,856],[405,856],[495,856],[585,856],[675,856],[765,856],[855,856]];
var ArrayPionsBlancs_PV = [{x:45, y:45},{x:135, y:45},{x:225,y:45},{x:315, y:45},{x:405,y:45},{x:495,y:45},{x:585, y:45},{x:675,y:45},{x:765, y:45},{x:855,y:45}];
const pawns_radius = 40;
let nbreDeCoupsJoués = 0;
const mod = nbreDeCoupsJoués%2;
const loc_from = document.querySelector("#from_input");
const loc_to = document.querySelector("#to_input");
const loc_move = document.querySelector("#move_radio");
const loc_eat = document.querySelector("#eat_radio");

inpts = ["loc_from", "loc_to"]








const TableauVal =

  [{ x: 0, y: 0, id: 1, vacant: false, color: "Silver" }, caseDeJeu_2 = { x: cellSize, y: 0, id: 2, vacant: false, color: "Silver" },

   caseDeJeu_3 = { x: 2 * cellSize, y: 0, id: 3, vacant: false, color: "Silver" }, caseDeJeu_4 = { x: 3 * cellSize, y: 0, id: 4, vacant: false, color: "Silver" },

   { x: 4 * cellSize, y: 0, id: 5, vacant: false, color: "Silver" }, { x: 5 * cellSize, y: 0, id: 6, vacant: false, color: "Silver" },

  { x: 6 * cellSize, y: 0, id: 7, vacant: false, color: "Silver" }, { x:7*cellSize, y:0, id:8, vacant:false, color:"Silver" }, 
  
  { x:8*cellSize, y:0, id:9, vacant:false, color:"Silver" }, { x: 9 * cellSize, y: 0, id: 10, vacant: false, color: "Silver" }, 






  { x:0, y:cellSize, id:11, vacant:true, color:"none" },          { x:cellSize, y:cellSize, id:12, vacant:true, color:"none" },

  { x:2*cellSize, y:cellSize, id:13, vacant:true, color:"none" }, { x:3*cellSize, y:cellSize, id:14, vacant:true, color:"none"},

  { x:4*cellSize, y:cellSize, id:15, vacant:true, color:"none" }, { x:5*cellSize, y:cellSize, id:16, vacant:true, color:"none"},

  { x:6*cellSize, y:cellSize, id:17, vacant:true, color:"none" }, { x:7*cellSize, y:cellSize, id:18, vacant:true, color:"none"}, 
  
  { x:8*cellSize, y:cellSize, id:19, vacant:true, color:"none" }, { x:9*cellSize, y:cellSize, id:20, vacant:true, color:"none"}, 


  { x:0, y:2*cellSize, id:21, vacant:true, color:"none" },          { x:cellSize, y:2*cellSize, id:22, vacant:true, color:"none" },

  { x:2*cellSize, y:2*cellSize, id:23, vacant:true, color:"none" }, { x:3*cellSize, y:2*cellSize, id:24, vacant:true, color:"none"},

  { x:4*cellSize, y:2*cellSize, id:25, vacant:true, color:"none" }, { x:5*cellSize, y:2*cellSize, id:26, vacant:true, color:"none"},

  { x:6*cellSize, y:2*cellSize, id:27, vacant:true, color:"none" }, { x:7*cellSize, y:2*cellSize, id:28, vacant:true, color:"none"}, 
  
  { x:8*cellSize, y:2*cellSize, id:29, vacant:true, color:"none" }, { x:9*cellSize, y:2*cellSize, id:30, vacant:true, color:"none"}, 


  { x:0, y:3*cellSize, id:31, vacant:true, color:"none" },          { x:cellSize, y:3*cellSize, id:32, vacant:true, color:"none" },

  { x:2*cellSize, y:3*cellSize, id:33, vacant:true, color:"none" }, { x:3*cellSize, y:3*cellSize, id:34, vacant:true, color:"none"},

  { x:4*cellSize, y:3*cellSize, id:35, vacant:true, color:"none" }, { x:5*cellSize, y:3*cellSize, id:36, vacant:true, color:"none"},

  { x:6*cellSize, y:3*cellSize, id:37, vacant:true, color:"none" }, { x:7*cellSize, y:3*cellSize, id:38, vacant:true, color:"none"}, 
  
  { x:8*cellSize, y:3*cellSize, id:39, vacant:true, color:"none" }, { x:9*cellSize, y:3*cellSize, id:40, vacant:true, color:"none"}, 


  { x:0, y:4*cellSize, id:41, vacant:true, color:"none" },          { x:cellSize, y:4*cellSize, id:42, vacant:true, color:"none" },

  { x:2*cellSize, y:4*cellSize, id:43, vacant:true, color:"none" }, { x:3*cellSize, y:4*cellSize, id:44, vacant:true, color:"none"},

  { x:4*cellSize, y:4*cellSize, id:45, vacant:true, color:"none" }, { x:5*cellSize, y:4*cellSize, id:46, vacant:true, color:"none"},

  { x:6*cellSize, y:4*cellSize, id:47, vacant:true, color:"none" }, { x:7*cellSize, y:4*cellSize, id:48, vacant:true, color:"none"}, 
  
  { x:8*cellSize, y:4*cellSize, id:49, vacant:true, color:"none" }, { x:9*cellSize, y:4*cellSize, id:50, vacant:true, color:"none"}, 



  { x:0, y:5*cellSize, id:51, vacant:true, color:"none" },          { x:cellSize, y:5*cellSize, id:52, vacant:true, color:"none" },

  { x:2*cellSize, y:5*cellSize, id:53, vacant:true, color:"none" }, { x:3*cellSize, y:5*cellSize, id:54, vacant:true, color:"none"},

  { x:4*cellSize, y:5*cellSize, id:55, vacant:true, color:"none" }, { x:5*cellSize, y:5*cellSize, id:56, vacant:true, color:"none"},

  { x:6*cellSize, y:5*cellSize, id:57, vacant:true, color:"none" }, { x:7*cellSize, y:5*cellSize, id:58, vacant:true, color:"none"}, 
  
  { x:8*cellSize, y:5*cellSize, id:59, vacant:true, color:"none" }, { x:9*cellSize, y:5*cellSize, id:60, vacant:true, color:"none"}, 



  { x:0, y:6*cellSize, id:61, vacant:true, color:"none" },          { x:cellSize, y:6*cellSize, id:62, vacant:true, color:"none" },

  { x:2*cellSize, y:6*cellSize, id:63, vacant:true, color:"none" }, { x:3*cellSize, y:6*cellSize, id:64, vacant:true, color:"none"},

  { x:4*cellSize, y:6*cellSize, id:65, vacant:true, color:"none" }, { x:5*cellSize, y:6*cellSize, id:66, vacant:true, color:"none"},

  { x:6*cellSize, y:6*cellSize, id:67, vacant:true, color:"none" }, { x:7*cellSize, y:6*cellSize, id:68, vacant:true, color:"none"}, 
  
  { x:8*cellSize, y:6*cellSize, id:69, vacant:true, color:"none" }, { x:9*cellSize, y:6*cellSize, id:70, vacant:true, color:"none"}, 


  { x:0, y:7*cellSize, id:71, vacant:true, color:"none" },          { x:cellSize, y:7*cellSize, id:72, vacant:true, color:"none" },

  { x:2*cellSize, y:7*cellSize, id:73, vacant:true, color:"none" }, { x:3*cellSize, y:7*cellSize, id:74, vacant:true, color:"none"},

  { x:4*cellSize, y:7*cellSize, id:75, vacant:true, color:"none" }, { x:5*cellSize, y:7*cellSize, id:76, vacant:true, color:"none"},

  { x:6*cellSize, y:7*cellSize, id:77, vacant:true, color:"none" }, { x:7*cellSize, y:7*cellSize, id:78, vacant:true, color:"none"}, 
  
  { x:8*cellSize, y:7*cellSize, id:79, vacant:true, color:"none" }, { x:9*cellSize, y:7*cellSize, id:80, vacant:true, color:"none"}, 



  { x:0, y:8*cellSize, id:81, vacant:true, color:"none" },          { x:cellSize, y:8*cellSize, id:82, vacant:true, color:"none" },

  { x:2*cellSize, y:8*cellSize, id:83, vacant:true, color:"none" }, { x:3*cellSize, y:8*cellSize, id:84, vacant:true, color:"none"},

  { x:4*cellSize, y:8*cellSize, id:85, vacant:true, color:"none" }, { x:5*cellSize, y:8*cellSize, id:86, vacant:true, color:"none"},

  { x:6*cellSize, y:8*cellSize, id:87, vacant:true, color:"none" }, { x:7*cellSize, y:8*cellSize, id:88, vacant:true, color:"none"}, 
  
  { x:8*cellSize, y:8*cellSize, id:89, vacant:true, color:"none" }, { x:9*cellSize, y:8*cellSize, id:90, vacant:true, color:"none"}, 


  { x: 0, y: 9 * cellSize, id: 91, vacant: false, color:"Brown" }, { x: cellSize, y: 9 * cellSize, id: 92, vacant: false, color: "Brown" }, 
  
  { x: 2 * cellSize, y: 9 * cellSize, id: 93, vacant: false, color: "Brown" }, { x: 3 * cellSize, y: 9 * cellSize, id: 94, vacant: false, color: "Brown" },
  
  { x: 4 * cellSize, y: 9 * cellSize, id: 95, vacant: false, color: "Brown" }, { x: 5 * cellSize, y: 9 * cellSize, id: 96, vacant: false, color: "Brown" },

  { x: 6 * cellSize, y: 9 * cellSize, id: 97, vacant: false, color: "Brown" }, { x: 7 * cellSize, y: 9 * cellSize, id: 98, vacant: false, color: "Brown" }, 
  
  { x:8*cellSize, y:0, id:9, vacant:false, color:"Brown" }, { x: 9 * cellSize, y: 9 * cellSize, id: 100, vacant: false, color: "Brown" }]


  function isWhitePawn (element) {if (element.color !== "none" && element.color == "Silver") {return true
  }else{return false}   }   
   
   let whitePawns = TableauVal.filter(isWhitePawn);
  
  
  
   function isBrownPawn (element) {if (element.color !== "none" && element.color == "Brown") {return true
   }else{return false}   }   
  
  
   let brownPawns = TableauVal.filter(isBrownPawn);
    
  


// codage de nouvelles functions avec une classe Pawn, pour initialiser et dessiner les pions //

  class Pawns {
                    constructor(){this.x = x;
                                  this.y = y;
                                  this.radius = Paw  } 
                                                                 

                                                 draw(){ctx.fillStyle = 'Silver';
                                                 ctx.beginPath();
                                                 ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
                                                 ctx.closePath;
                                                 ctx.fill();
                                                }}

                                                whitePawns.forEach((element) =>{ctx.fillStyle='Silver';
                                                                                ctx.arc((element.x+cellSize/2), (cellSize/2), 40, 0, 2*Math.PI);
                                                                                ctx.fill()} )  
                                                
                                                                                 
                                                                                                                                         
        /*  function dessinePionsBlancs(){for(count=0; count<whitePawns.length; count+=cellSize){ctx.fillStyle = "Tomato";       
                                            ctx.arc(((whitePawns[count].x+cellSize)/2), ((whitePawns[count].y+cellSize)/2), 40, 0, 2*Math.PI);
                                            ctx.fill();}
                                            ctx.arc(x, y, rayon, angleDépart, angleFin, sensAntiHoraire);
                                            requestAnimationFrame(dessinePionsBlancs);}
                                      

dessinePionsBlancs();*/
  




  class Blanc{

                      constructor(x, y){ 
                                      this.x = x;
                                      this.y = y;
                                      this.radius = pawns_radius;
                                      this.number = nbreDePions;
                                                                    }
                      draw(){
                               ctx.fillStyle = 'Silver';
                               ctx.beginPath();
                               ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
                               ctx.closePath;
                               ctx.fill();
                                                                                       }
                                                                                          }






class Brun{
    constructor(x, y){ this.x = x;
                       this.y = y;
                       this.radius = 40;
                       this.number = nbreDePions;
                                                    }
draw(){
    ctx.fillStyle = 'Maroon';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.closePath;
    ctx.fill();
}}
function initPionsBruns() {
                                pnArray = [];
                                for(let i = 0; i<nbreDePions; i++){
                                    let x = ArrayPionsBruns[i][0];
                                    let y = 856
                                pnArray.push(new Brun(x, y))
                                
                             }}
initPionsBruns();

function dessineb(){
    for(let i = 0; i<pnArray.length; i++){
        pnArray[i].draw();
    }
    requestAnimationFrame(dessineb);
}
dessineb();

//JUSQU'ICI *Initialisation des Pions* //










// function qui trace le terrain de jeu //
function trace() { TableauVal.forEach(element => ctx.strokeRect(element.x, element.y, cellSize, cellSize)); }


// function qui identifie la case //
function identify(event) {

  let ValX = event.clientX;
  let ValY = event.clientY;


  let QX = Math.ceil(ValX / cellSize);
  let QY = Math.ceil(ValY / cellSize);
  const numéroDeCase = (10 * (QY - 1) + (QX));


  // function où l'on rentre ce qu'on veut jouer //
  if (PlayThis.length == 0) {

    loc_from.value = numéroDeCase;
    PlayThis.push(numéroDeCase);

    if (move_radio.checked){PlayThis.push(numéroDeCase+10);
                            alert(PlayThis)} 

    if(eat_radio.checked){PlayThis.push( numéroDeCase+11, numéroDeCase+22);
    alert(PlayThis)}                        
      
} else { loc_to.value = numéroDeCase;
         PlayThis.push(numéroDeCase); } alert(PlayThis);
                                                          }




// functions pour dessiner les pions //

                                                     
                                                        






