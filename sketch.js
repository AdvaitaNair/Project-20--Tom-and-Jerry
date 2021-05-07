var garden;

var cat, catImg1, catImg2, catImg3 ;
var mouse, mouseImg1, mouseImg2, mouseImg3;

function preload() {
    //load the images here
    garden = loadImage("images/garden.png")

    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png")

    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1500,750);
    //create tom and jerry sprites here
    cat = createSprite(1300, 650, 50, 50);
    cat.addAnimation("cat_sit", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 650, 50, 50);
    mouse.addAnimation("mouse_eat", mouseImg1);
    mouse.scale = 0.15;


}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x <= cat.width/2 + mouse.width/2) {
        cat.velocityX = 0;
        cat.addAnimation("catHappy", catImg3);
        cat.changeAnimation("catHappy");

        mouse.addAnimation(" mouseHappy", mouseImg3);
        mouse.changeAnimation(" mouseHappy");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        cat.addAnimation("cat_tease", catImg2);
        cat.changeAnimation("cat_tease");
        cat.velocityX = -4;

        mouse.addAnimation("mouse_tease", mouseImg2);
        mouse.changeAnimation("mouse_tease");
        mouse.frameDelay = 25;
    }

}
