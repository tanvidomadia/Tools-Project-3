
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
var g;
var h;
var isReady = false;
var answer_pool1 = [];
var answer_pool2 = [];
var answer_pool3 = [];
var answer_pool4 = [];
var z;
var input_answer = [];
var student_points = [];
var group_points = [];
var style2;
var count = 1; //counter for quiz questions
var score_for_each_question;
var group_score = 0;
var individual_score = [0,0,0];
var x = Papa.parse("assets/Answers.csv", {
download: true,
complete: function(results) {
	g = results;
//	isReady = true;

	//	k = results;
	}
// rest of config ...
})
var y = Papa.parse("assets/Questions.csv", {
download: true,
complete: function(results) {
h = results;

//y = results;

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
		// if(score[count] > 1)
		// {
	 // setTimeout(function () {
		 console.log(g);
		 console.log(h);
		 this.game.scale.pageAlignHorizontally = true;
		 this.game.scale.pageAlignVertically = true;
		 this.game.scale.refresh();
		 this.game.stage.backgroundColor = "#ffffff";

	 style2 = { font: "14px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };

	 left_button[0] = game.add.sprite(30,235,'after');
	 left_button[0].scale.setTo(0.08,0.08);
	 left_button[0].inputEnabled = true;
	 //left_button[0].events.onInputDown.add(this.backtosecondscsreen,this);

	 var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };
 console.log(h.data[2][2]);

	 //displaying questions for mcq
	 console.log(h.data[count][0]);
		 if( h.data[count][0] == "MC (Multiple choice)" || h.data[count][0] == "MC")
		 {
			 console.log('hi');
		 screen_text[1] = game.add.text(92,30,h.data[2][2],style);
		 var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850};
		 console.log('hi1');
		 screen_text[2] = game.add.text(95,200,'Click on the correct text answer below.',style1);
		 var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };

		 answer_option[0] = game.add.text(100,240,'A.' + g.data[count][0],style2);
		 answer_option[1] = game.add.text(100,400,'B.' + g.data[count+1][0],style2);
		 answer_option[2] = game.add.text(100,560,'C.' + g.data[count+2][0],style2);
		 answer_option[3] = game.add.text(100,720,'D.' + g.data[count+3][0],style2);
		 style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 }; //correctanswer
		 feedback[0] = game.add.text(95,502,'',style3);
		 style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };//wrong answer
		 feedback_next[0]=game.add.text(95,530,'',style3);
		 feedback[1] = game.add.text(95,502,'',style4);
		 feedback_next[1]=game.add.text(95,530,'',style4);
		 //
		 for(i=0;i<4;i++)
		 {
		 answer_option[i].inputEnabled = true;
		 //answer_option[i].events.onInputDown.add(this.feedback_function,this);
		 //answer_option[i].events.onInputOver.add(over, this);
		 //answer_option[i].text.events.onInputOut.add(out, this);
		 console.log('hey');
		 }
	 }
	 // }
	 //displaying questions for Sa -- converting to mcq

	 else
	 {
		 console.log('hi1');
		 screen_text[1] = game.add.text(92,146,h.data[count][2],style);
		 var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800 };

		 screen_text[2] = game.add.text(95,190,'Click on the correct text answer below.',style1);
		 var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800 };

		 answer_option[0] = game.add.text(100,230,'A.' + g.data[count][0],style2);
		 answer_option[1] = game.add.text(100,260,'B.' + g.data[count][0],style2);
		 answer_option[2] = game.add.text(100,290,'C.' + g.data[count][0],style2);
		 answer_option[3] = game.add.text(100,320,'D.' + g.data[count][0],style2);
		 style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800}; //correctanswer
		 feedback[0] = game.add.text(95,502,'',style3);
		 style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800 };//wrong answer
		 feedback_next[0]=game.add.text(95,530,'',style3);
		 feedback[1] = game.add.text(95,502,'',style4);
		 feedback_next[1]=game.add.text(95,530,'',style4);
		 //
		 for(i=0;i<4;i++)
		 {
		 answer_option[i].inputEnabled = true;
		 //answer_option[i].events.onInputDown.add(this.feedback_function,this);
		 //answer_option[i].events.onInputOver.add(over, this);
		 //answer_option[i].text.events.onInputOut.add(out, this);
		 console.log('hey');
		 }
	 }
	 // }, 100);


  },
}
game.state.add('start_screen',start_screen);
game.state.start('start_screen');
}
