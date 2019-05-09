
window.onload = function()
{

var game = new Phaser.Game(1050, 750);
var background = [];
var screen_text = [];
var answer_option = [];
var feedback = [];
var feedback_next = [];
var left_button = [];
var right_button = [];
var feedback_count = [0,0,0,0,0,0,0,0,0];
var style3;
var style4;
var g;
var h;
var isReady = false;
//creating answer pool for mcqs
var question;
var question_id;
var answer_pool1 = [];
var answer_pool2 = [];
var answer_pool3 = [];
var answer_pool4 = [];
var z;
var student_points = [];
var group_points = [];
var style2;
var correct_ans;
var count = 1; //counter for quiz questions
var score_for_each_question;
var final_array = [question, question_id, correct_ans, score_for_each_question, answer_pool1, answer_pool2, answer_pool3, answer_pool4];
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

     game.time.events.add(5000, changeSource, this);
     //  This would swap on a mouse click
     // game.input.onDown.addOnce(changeSource, this);

 },


  create : function()
  {
   score_for_each_question = 0;
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
	 //displaying questions for mcq
		 if( h.data[count][0] == "MC (Multiple choice)" || h.data[count][0] == "MC")
		 {
			 if (score_for_each_question < 1)
			 {
				 question = h.data[count][2];
				 console.log(question);
				 answer_pool1[0] = h.data[count][4];
				 answer_pool2[0] = h.data[count][6];
				 answer_pool3[0] = h.data[count][8];
				 answer_pool4[0] = h.data[count][10];
				 correct_ans = h.data[count][3];
			 }
			 //find the max average score
			 var max = [];
			 for(j=0;j<4;j++)
			 {
			 max[j] = 0;
		 		}
			 //parsing the answer pool
			 for(i=1;i<=g.data.length;i++)
			 {
				 if(g.data[i][1] == h.data[count][1]) //matching question ids
				 {
					 if(g.data[i][4] > max[0] && g.data[i][3] == "A")
					 {
						 max[0] =  g.data[i][4];
						 answer_pool1.push(g.data[i][0]);
					 }
					 if(g.data[i][4] > max[1] && g.data[i][3] == "B")
					 {
						 max =  g.data[i][4];
						 answer_pool2.push(g.data[i][0]);
					 }
					 if(g.data[i][4] > max[2] && g.data[i][3] == "C")
					 {
						 max[2] =  g.data[i][4];
						 answer_pool3.push(g.data[i][0]);
					 }
					 if(g.data[i][4] > max[3] && g.data[i][3] == "D")
					 {
						 max[3] = g.data[i][4];
						 answer_pool4.push(g.data[i][0]);
					 }
				 }
			 }


		 screen_text[1] = game.add.text(92,30,h.data[2][2],style);
		 var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850};

		 screen_text[2] = game.add.text(95,200,'Click on the correct text answer below.',style1);
		 var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };

			//  for (i=1;i<h.data.length;i++)
			//  {
	    //   question_pool[i][1] = h.data[][];
			// 	question_pool[i][1] = score;
			// 	// //adding the question options in the first loop
	    // }

		 //
		 //
			// //adding the student generated responses in the answer pool
		 //
		 // }
		 //adding all answers for a question in one text
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
	console.log(final_array);
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
