
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
var try_again_button = [];
var try_again_button2 = [];
var turn = 0;
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
var final_array = [question, question_id, score_for_each_question, correct_ans, answer_pool1, answer_pool2, answer_pool3, answer_pool4];
function sortJSON(data, key, way) {
return data.sort(function(a, b) {
 var x = a[key]; var y = b[key];
 if (way === '123' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
 if (way === '321') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
});
}
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
		game.load.image('tryagain','assets/tryagain.png');
		game.load.image('submit','assets/submit.png');

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

   //score_for_each_question = 0;
		// if(score[count] > 1)
		// {
	 // setTimeout(function () {
  //  var cool = game.time.create();
		 if(turn == 0)
		 {
		 console.log(g);
		 console.log(h);
		 this.game.scale.pageAlignHorizontally = true;
		 this.game.scale.pageAlignVertically = true;
		 this.game.scale.refresh();
		 this.game.stage.backgroundColor = "#ffffff";
	 style2 = { font: "14px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
	 //
	 // left_button[0] = game.add.sprite(30,235,'after');
	 // left_button[0].scale.setTo(0.08,0.08);
	 // left_button[0].inputEnabled = true;
	 //left_button[0].events.onInputDown.add(this.backtosecondscsreen,this);
	 var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };
	 //displaying questions for mcq
		 if(h.data[count][0] == "MC (Multiple choice)" || h.data[count][0] == "MC")
		 {
			 // if (score_for_each_question < 1)
			 {
				 question = h.data[count][2];
				 final_array[0] = question;

				 console.log(question);
				 answer_pool1[0] = h.data[count][4];
				 answer_pool2[0] = h.data[count][6];
				 answer_pool3[0] = h.data[count][8];
				 answer_pool4[0] = h.data[count][10];
				 correct_ans = h.data[count][3];
				  question_id = h.data[count][1];
				 final_array[1] = question_id;
				 final_array[2] = correct_ans;
				// final_array[3] =
			 }
			 //find the max average score
			 var max = [];
			 console.log(g.data);
			 delete g.data[0];
			// g.data = sortJSON(g.data, 'Question_id','123');
			//g.data = _.sortBy(g.data,2);
			 g.data =  _.sortBy(g.data);
			 //console.log(g.data);
			 console.log(g.data);
			 // for(j=0;j<4;j++)
			 // {
			 // max[j] = 0;
		 		// }
			 //parsing the answer pool
			 for(i=0;i<g.data.length-1;i++)
			 {
				 if(g.data[i][1] == h.data[count][1]) //matching question ids
				 {
					 if(g.data[i][3] == "A") //
					 {
						 //max =  g.data[i][4];
						 answer_pool1.push(g.data[i][0]);
					 }
					 if(g.data[i][3] == "B") //g.data[i][4] > max[1] &&
					 {
						 //max =  g.data[i][4];
						 answer_pool2.push(g.data[i][0]);
					 }
					 if(g.data[i][3] == "C") //g.data[i][4] > max[2]
					 {
						 //max[2] =  g.data[i][4];
						 answer_pool3.push(g.data[i][0]);
					 }
					 if(g.data[i][3] == "D") //g.data[i][4] > max[3] &&
					 {
						// max[3] = g.data[i][4];
						 answer_pool4.push(g.data[i][0]);
					 }
				 }
			 }
     }
     game.time.events.add(Phaser.Timer.SECOND * 1, this.showOptions, this);

 // code for selecting SA
 console.log(h.data[count][0]);
 if(h.data[count][0] == "SA (Select all that apply)" || h.data[count][0] == "SA")
 {
   console.log('hi');
   // if (score_for_each_question < 1)
   {
     question = h.data[count][2];
     final_array[0] = question;

     console.log(question);
     //answer_pool1[0] = h.data[count][4];
     // answer_pool2[0] = h.data[count][6];
     // answer_pool3[0] = h.data[count][8];
     // answer_pool4[0] = h.data[count][10];
     correct_ans = h.data[count][3];
      question_id = h.data[count][1];
     final_array[1] = question_id;
     final_array[2] = correct_ans;
     console.log(final_array[2]);
    // final_array[3] =
   }
   //find the max average score
   var max = [];
   console.log(g.data);
   delete g.data[0];
  // g.data = sortJSON(g.data, 'Question_id','123');
  //g.data = _.sortBy(g.data,2);
   g.data =  _.sortBy(g.data);
   //console.log(g.data);
   console.log(g.data);

   // for(j=0;j<4;j++)
   // {
   // max[j] = 0;
    // }
   //parsing the answer pool
   for(i=0;i<g.data.length-count;i++)
   {
     console.log('hiiiiii');
     if(g.data[i][1] == question_id) //matching question ids
     {

       if(g.data[i][2] == 1) //
       {
         //max =  g.data[i][4];
         answer_pool1.push(g.data[i][0]);
         console.log('hi');
       }
       if(g.data[i][2] == 0.75 ) //g.data[i][4] > max[1] &&
       {
         //max =  g.data[i][4];
         answer_pool2.push(g.data[i][0]);
         console.log('hi1');
       }
       if(g.data[i][2] == 0.5) //g.data[i][4] > max[2]
       {
         //max[2] =  g.data[i][4];
         answer_pool3.push(g.data[i][0]);
         console.log('hi2');
       }
       if(g.data[i][2] == 0) //g.data[i][4] > max[3] &&
       {
        // max[3] = g.data[i][4];
         answer_pool4.push(g.data[i][0]);
         console.log('hi3');
       }
     }
   }
   console.log(answer_pool1);
   console.log(answer_pool2);

 }
		 screen_text[1] = game.add.text(30,30,question,style);
		 var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850};

		 screen_text[2] = game.add.text(30,200,'Click on the correct text answer below.',style1);
     var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };


			//  for (i=1;i<h.data.length;i++)
			//  {
	    //   question_pool[i][1] = h.data[][];
			// 	question_pool[i][1] = score;
			// 	// //adding the question options in the first aloop
	    // }

		 //
		 //
			// //adding the student generated responses in the answer pool
		 //
		 // }
		 //adding all answers for a question in one text
		 // Phaser.Timer(100);
		 // answer_option[0] = game.add.text(100,240,'A.' + answer_pool1[0],style2);
		 // answer_option[1] = game.add.text(100,400,'B.' + answer_pool2[0],style2);
		 // answer_option[2] = game.add.text(100,560,'C.' + answer_pool3[0],style2);
		 // answer_option[3] = game.add.text(100,720,'D.' + answer_pool4[0],style2);
		 // for(i=0;i<4;i++)
		 // {
		 // answer_option[i].inputEnabled = true;
		 // answer_option[i].events.onInputDown.add(this.feedback_function,this);
     //
		 // console.log('hey');
		 // }





		 // //
		 // for(i=0;i<4;i++)
		 // {
		 // answer_option[i].inputEnabled = true;
		 // //answer_option[i].events.onInputDown.add(this.feedback_function,this);
		 // //answer_option[i].events.onInputOver.add(over, this);
		 // //answer_option[i].text.events.onInputOut.add(out, this);
		 // console.log('hey');
		 // }


	 // //displaying questions for Sa -- converting to mcq
	 // else
	 // {
		//  console.log('hi1');
		//  screen_text[1] = game.add.text(92,146,h.data[count][2],style);
		//  var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800 };
	 //
		//  screen_text[2] = game.add.text(95,190,'Click on the correct text answer below.',style1);
		//  var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800 };
	 //
		//  answer_option[0] = game.add.text(100,230,'A.' + g.data[count][0],style2);
	 //
		//  answer_option[1] = game.add.text(100,260,'B.' + g.data[count][0],style2);
		//  answer_option[2] = game.add.text(100,290,'C.' + g.data[count][0],style2);
		//  answer_option[3] = game.add.text(100,320,'D.' + g.data[count][0],style2);
		//  style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800}; //correctanswer
		//  feedback[0] = game.add.text(95,502,'',style3);
		//  style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800 };//wrong answer
		//  feedback_next[0]=game.add.text(95,530,'',style3);
		//  feedback[1] = game.add.text(95,502,'',style4);
		//  feedback_next[1]=game.add.text(95,530,'',style4);
		//  //
		//  for(i=0;i<4;i++)
		//  {
		//  answer_option[i].inputEnabled = true;
		//  //answer_option[i].events.onInputDown.add(this.feedback_function,this);
		//  //answer_option[i].events.onInputOver.add(over, this);
		//  //answer_option[i].text.events.onInputOut.add(out, this);
		//  console.log('hey');
	 //
		//  }
	 // }
	 // }, 100);
	 console.log(final_array);
}
  },
	feedback_function : function(item)
	{
    console.log('hi');
    console.log(item.choice);
		turn = turn + 1;
		// var correct = correctanswer
		// console.log(item.text);
		if(correct_ans == item.choice && turn ==1)
		{
		style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 }; //correctanswer
		feedback[0] = game.add.text(95,710,'That is the correct answer.',style3);
		next_button = game.add.sprite(750,700,'after');
		next_button.inputEnabled = true;
    next_button.scale.setTo(0.08,0.08);

		next_button.events.onInputDown.add(this.next1,this);

		//answer_option[i].events.onInputDown.add(this.feedback_function,this);
		}
		else if(turn == 1)
		{
		style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };//wrong answer
		//feedback_next[0]=game.add.text(95,530,'',style3);
		feedback[1] = game.add.text(95,710,'That is not correct. The correct answer is ' + correct_ans,style4);
		//feedback_next[1]=game.add.text(95,530,'',style4);\\
		try_again_button = game.add.sprite(750,700,'tryagain');
    try_again_button.scale.setTo(0.3,0.3);
		try_again_button.inputEnabled = true;
		try_again_button.events.onInputDown.add(this.next2, this);

		}
    //
    //

	},
	feedback_function1 : function(item)
	{
    // console.log()
    console.log('hi');
  	if(item.choice == correct_ans)
		{
		style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 }; //correctanswer
		feedback[0] = game.add.text(95,502,'',style3);
		next_button1 = game.add.sprite(400,700,'after');
    next_button1.scale.setTo(0.08,0.08);

		next_button1.inputEnabled = true;
		next_button1.onInputDown.add(this.next22, this);


	}
  else {
		style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };//wrong answer
	//	feedback_next[0]=game.add.text(95,530,'',style3);
		feedback[1] = game.add.text(95,502,'',style4);
		feedback_next[1]=game.add.text(95,530,'',style4);
		try_again_button2 = game.add.sprite(400,700,'tryagain');
		try_again_button2.inputEnabled = true;
		try_again_button2.onInputDown.add(this.next23, this);

  }



	},
	next1 : function()
	{
    turn = 0;
	 count = count + 1;
   console.log(count);
   final_array = [];
   answer_pool1 = [];
   answer_pool2 = [];
   answer_pool3 = [];
   answer_pool4 = [];
	 game.state.start('start_screen');
	},
	next2 : function()
	{
		//turn  = turn + 1;
		game.state.start('second_screen');
	},

	next22 : function()
	{
 count++;
 game.state.start(start_screen);
	},
	next23 : function()
	{
    console.log('yes11');
   game.state.start('second_screen');
	},
	showOptions : function()
	{

       var style2 = { font: "18px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };
		if(answer_pool1.length > 2)

		{
		answer_option[0] = game.add.text(100,220,'A.' + answer_pool1[0],style2);
		answer_option[1] = game.add.text(100,360,'B.' + answer_pool2[0],style2);
		answer_option[2] = game.add.text(100,520,'C.' + answer_pool3[0],style2);
		answer_option[3] = game.add.text(100,630,'D.' + answer_pool4[0],style2);
    //if(SA (Select all that apply))
    answer_option[0].choice = "A";
    answer_option[1].choice = "B";
    answer_option[2].choice = "C";

    answer_option[3].choice = "D";
    //console.log('hi1');
		for(i=0;i<4;i++)
		{
    answer_option[i].inputEnabled = true;
		answer_option[i].events.onInputDown.add(this.feedback_function,this);
    //console.log('hi');
		}
	}
},
}
var second_screen = function(game){}
second_screen.prototype =
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
	 game.load.image('tryagain','assets/tryagain.png');
	 game.load.image('submit','assets/submit.png');

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

	//score_for_each_question = 0;
	 // if(score[count] > 1)
	 // {
	// setTimeout(function () {
  var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };
  screen_text[1] = game.add.text(92,146,h.data[count][2],style);
  var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800 };

  screen_text[2] = game.add.text(95,190,'Click on the correct text answer below.',style1);
  var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800 };
console.log('yes');
	if (turn ==1)
	{
    console.log('yes1');

   if(answer_pool1.length !== 1)
   {
	 answer_option[0] = game.add.text(100,240,'A.' + answer_pool1[turn],style2);
 }
 else {
    answer_option[0] = game.add.text(100,240,'A.' + answer_pool1[turn-1],style2);
 }
 if(answer_pool2.length !== 1)
 {
	 answer_option[1] = game.add.text(100,400,'B.' + answer_pool2[turn],style2);
 }
 else {
   answer_option[1] = game.add.text(100,400,'B.' + answer_pool2[turn-1],style2);

 }
 if(answer_pool3.length !==1)
 {
	 answer_option[2] = game.add.text(100,560,'C.' + answer_pool3[turn],style2);
 }
 else{
   answer_option[2] = game.add.text(100,560,'C.' + answer_pool3[turn-1],style2);

	}
  if(answer_pool4.length !==1)
  {
    answer_option[3] = game.add.text(100,720,'D.' + answer_pool4[turn],style2);
  }
  else {
    answer_option[3] = game.add.text(100,720,'D.' + answer_pool4[turn-1],style2);
  }
	for(i=0;i<4;i++)
	{
	answer_option[i].inputEnabled = true;
	answer_option[i].events.onInputDown.add(this.feedback_function1,this);

	}

	}
	else
	{
		count = count + 1;
		game.state.start('start_screen');
	}


		//
		for(i=0;i<4;i++)
		{
		answer_option[i].inputEnabled = true;
		//answer_option[i].events.onInputDown.add(this.feedback_function,this);
		//answer_option[i].events.onInputOver.add(over, this);
		//answer_option[i].text.events.onInputOut.add(out, this);
		console.log('hey');
		}



		console.log('hi1');
		screen_text[1] = game.add.text(92,146,h.data[count][2],style);
		var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800 };

		screen_text[2] = game.add.text(95,190,'Click on the correct text answer below.',style1);
		var style2 = { font: "16px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 800 };

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

	// }, 100);
	console.log(final_array);

 },
 feedback_function : function(item)
 {
   console.log('hi11');
	 turn = turn + 1;
	 var correct = correctanswer
	 console.log(item.text);
	 if(item.text == correctanswer)
	 {
	 style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 }; //correctanswer
	 feedback[0] = game.add.text(95,502,'',style3);
	 next_button = game.add.sprite(400,700,'after');
	 next_button.inputEnabled = true;
	 next_button.events.onInputDown.add(this.next1,this);
	 //answer_option[i].events.onInputDown.add(this.feedback_function,this);
	 }
	 else
	 {
	 style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };//wrong answer
	 //feedback_next[0]=game.add.text(95,530,'',style3);
	 feedback[1] = game.add.text(95,502,'',style4);
	 //feedback_next[1]=game.add.text(95,530,'',style4);\\
	 try_again_button = game.add.sprite(400,700,'tryagain');
	 try_again_button.inputEnabled = true;
	 try_again_button.onInputDown.add(this.next2, this);
	 }



 },
 feedback_function1 : function()
 {
	 if(item.text == correctanswer)
	 {
	 style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 }; //correctanswer
	 feedback[0] = game.add.text(95,502,'',style3);
	 next_button1 = game.add.sprite(400,700,'after');
	 next_button1.inputEnabled = true;
	 next_button1.onInputDown.add(this.next22, this);


 }
 else {
	 style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 850 };//wrong answer
 //	feedback_next[0]=game.add.text(95,530,'',style3);
	 feedback[1] = game.add.text(95,502,'',style4);
	 feedback_next[1]=game.add.text(95,530,'',style4);
	 try_again_button2 = game.add.sprite(400,700,'tryagain');
	 try_again_button2.inputEnabled = true;
	 try_again_button2.onInputDown.add(this.next23, this);

 }



 },
 next1 : function()
 {
	count ++;
	game.state.start('start_screen');
 },
 next2 : function()
 {
	 turn  = turn + 1;
	 game.state.start('start_screen');
 },

 next22 : function()
 {
count++;
game.state.start(start_screen);
 },
 next23 : function()
 {

 },
}
game.state.add('start_screen',start_screen);
game.state.add('second_screen',second_screen);
game.state.start('start_screen');
}
