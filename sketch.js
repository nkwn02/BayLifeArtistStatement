let myLogo;

let myFont;

let logoAni;

let gameState = 'title';

function preload(){

  logoAni = loadAnimation('assets/baylogo1.png', 'assets/baylogo2.png');

  myFont = loadFont('assets/PublicPixel.ttf')

 }

function setup() {
  createCanvas(500, 550);
  myLogo = new logo(width/2, height/5, 150);
  textFont(myFont);
}

function draw() {
  background(220);

  //animation(logoAni, 200, 200);

  background(21, 21, 21);
  textSize(6);
  textAlign(CENTER);
  fill(248, 161, 69);
  text('', width * 0.5, height * 0.46);
text('The main topic for my project is Bay Area Life.', width * 0.5, height * 0.45);
text('With this inital idea, I decided to create a choose your own life simulator.', width * 0.5, height * 0.49);
text('I wanted to discuss issues going on in the area, the main ones being', width * 0.5, height * 0.53);
text('I included being housing prices and gentricication', width * 0.5, height * 0.57);
text('The game is not soley based on these issues,', width * 0.5, height * 0.61);
text('as I simply wanted to spread more light on them.', width * 0.5, height * 0.65);
text('I personally like playing lighthearted games,', width * 0.5, height * 0.69);
text('so I incorporated this into a lot of the game endings.', width * 0.5, height * 0.73);
text('The game has 32 different endings, all being affected by your choices in the game.', width * 0.5, height * 0.77);
text('When planning, I got way to ahead of myself in terms of choices.', width * 0.5, height * 0.81);
text('Despite such the long process of writing out all the switches,', width * 0.5, height * 0.85);
text('I have produced a game I am very proud of.', width * 0.5, height * 0.89);
textSize(30);
fill(255, 255, 255);
text('Artist Statement', width * 0.5, height * 0.97);

  myLogo.display();

}

class logo {

  constructor(xpos, ypos, size) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
  }

  display() {
animation(logoAni, 250, 125);
  }
}
