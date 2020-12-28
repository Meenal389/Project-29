const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint;

function setup(){
    createCanvas(1300,500)
    engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

    //grounds
    g1=new Ground(550,400,300,10)//(PYRAMID1BASE)
    g2=new Ground(1000,220,200,10)//(PYRAMID2BASE)
    g3=new Ground(650,495,1300,10)//(MAIN GROUND)

    //pyramid1
    //row1#bottom
    b1=new LPBox(460,380,35,40)
    b2=new LPBox(490,380,35,40)
    b3=new LPBox(520,380,35,40)
    b4=new LPBox(550,380,35,40)
    b5=new LPBox(580,380,35,40)
    b6=new LPBox(610,380,35,40)
    b7=new LPBox(640,380,35,40)
    //row#bottom2
    b8=new GBox(490,360,35,40)
    b9=new GBox(520,360,35,40)
    b10=new GBox(550,360,35,40)
    b11=new GBox(580,360,35,40)
    b12=new GBox(610,360,35,40)
    //row#middle
    b13=new LBBox(520,340,35,40)
    b14=new LBBox(550,340,35,40)
    b15=new LBBox(580,340,35,40)
    //row#top2
    b16=new YBox(535,320,35,40)
    b17=new YBox(565,320,35,40)
    //row#top
    b18=new PBox(550,300,35,40)

    //PYRAMID2
    //row#bottom
    b19=new GBox(960,200,35,40)
    b20=new GBox(995,200,35,40)
    b21=new GBox(1015,200,35,40)
    b22=new GBox(1030,200,35,40)
    //row#middle
    b23=new PBox(995,180,35,40)
    b24=new PBox(1015,180,35,40)
    //row#top
    b25=new YBox(1005,160,35,40)

    //polygon
    p1=new Polygon(100,300,20)

    s1=new String(p1.body,{x:150,y:300})
}

function draw(){
   background(0)
   g1.display()
   g2.display()
   g3.display()
   b1.display()
   b2.display()
   b3.display()
   b4.display()
   b5.display()
   b6.display()
   b7.display()
   b8.display()
   b9.display()
   b10.display()
   b11.display()
   b12.display()
   b13.display()
   b14.display()
   b15.display()
   b16.display()
   b17.display()
   b18.display()
   b19.display()
   b20.display()
   b21.display()
   b22.display()
   b23.display()
   b24.display()
   b25.display()
   p1.display()
   s1.display()

}

function mouseDragged(){
    Matter.Body.setPosition(p1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    s1.fly()
}

