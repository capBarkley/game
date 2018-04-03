var pjs = new PointJS(400, 400);
pjs.system.initFullPage();
// pjs.system.initFullPage(); // for Full Page mode
// pjs.system.initFullScreen(); // for Full Screen mode (only Desctop)

var vector = pjs.vector;
var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var size   = pjs.size;
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Objects manager
var math   = pjs.math;           // More Math-methods

var touch  = pjs.touchControl;
touch.initTouchControl();

// var key   = pjs.keyControl.initKeyControl();
// var mouse = pjs.mouseControl.initMouseControl();
// var touch = pjs.touchControl.initTouchControl();
// var act   = pjs.actionControl.initActionControl();

var width  = game.getWH().w; // width of scene viewport
var height = game.getWH().h; // height of scene viewport

pjs.system.setTitle('Game runner'); // Set Title for Tab or Window

var background1 = game.newImageObject({
	x : 0 , y : 0,
	file : 'img/backgrounds/swamp.png',
	h : height,
	onload : function () {
		background2.x = background1.x + background1.w;
		// body...
	}
});

var background2 = game.newImageObject({
	x : background1.x + background1.w , y : 0,
	file : 'img/backgrounds/swamp.png',
	h : height
});

var character = game.newAnimationObject({
	x : width/12, y : 0,
	h : 256, w : 256,
	delay : 5,
	animation : pjs.tiles.newAnimation('img/character/punk.png', 256, 256, 8)
});

var moveBackground = function (s) {
background1.move(point(-s,0));
background2.move(point(-s,0));
if (background1.x + background1.w < 0) {
	background1.x = background2.x + background2.w;
}
if (background2.x + background2.w < 0) {
	background2.x = background1.x + background1.w;
}
};

// Game Loop
game.newLoop('game', function () {
	// Constructor Game Loop
game.fill('#D9D9D9');
background1.draw();
background2.draw();
character.y = background1.h - character.h * 1.18;
character.draw();
moveBackground(5);
//camera.move(point(1,0));

});

game.startLoop('game');