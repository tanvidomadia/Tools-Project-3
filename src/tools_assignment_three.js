
window.onload = function()
{
var player1;
var player2;
var game = new Phaser.Game(1050, 750);
var background = [];
var screen_text = [];
var video=[];
var video_play= [];
var answer_option = [];
var pause_button;
var play_button;
var feedback = [];
var feedback_next = [];
var left_button = [];
var right_button = [];
var image1;
var sprite1;
var videosprite = [];
var feedback_count = [0,0,0,0,0,0,0,0,0];
var style3;
var style4;
var input_answer = [];
var student_points = [];
var group_points = [];
var style2;
var group_score = 0;
var individual_score = [0,0,0];
var x = Papa.parse("assets/Answers.csv", {
download: true,
complete: function(results) {
		console.log(results);
	}
// rest of config ...
})
var y = Papa.parse("assets/Questions.csv", {
download: true,
complete: function(results) {
console.log(results);
}
// rest of config ...
})

 //code for starting screen
 var start_screen = function(game){}
 start_screen.prototype =
 {
  init : function()
  {
     game.load = new CustomLoader(game);
  },
   preload : function()
  {

   // game.load.video('intro','assets/introduction.mp4');
    game.load.image('after','assets/left.png');
    game.load.image('before','assets/right.png');
   // game.load.image('play','assets/playbutton.png');



 },
 start : function()
 {

     //  After 5 seconds we'll swap to a new video
     game.time.events.add(5000, changeSource, this);
     //  This would swap on a mouse click
     // game.input.onDown.addOnce(changeSource, this);

 },
  create : function()
  {

    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    this.game.stage.backgroundColor = "#ffffff";

  style2 = { font: "14px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
  var text1 = game.add.text(20,64, "Please enter your names below",style2);
  var text2 = game.add.text(20,104, "Student 1 : ",style2);
  var text3 = game.add.text(20,142, "Student 2 : ", style2);
  var text4 = game.add.text(20,182, "Student 3 :", style2);
  left_button[0] = game.add.sprite(30,235,'after');
  left_button[0].scale.setTo(0.08,0.08);
  left_button[0].inputEnabled = true;
  //left_button[0].events.onInputDown.add(this.backtosecondscsreen,this);

  var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
//  screen_text[0] = game.add.text(352,17,'Let us learn about how a pan with water works',style);
  //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
  // reg.modal = new gameModal(game);
    //  this.createModals();

  },
}




game.state.add('start_screen',start_screen);
game.state.start('start_screen');
}
