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
       game.add.plugin(PhaserInput.Plugin);
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
  left_button[0].events.onInputDown.add(this.backtosecondscsreen,this);

  var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
//  screen_text[0] = game.add.text(352,17,'Let us learn about how a pan with water works',style);
  //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
  // reg.modal = new gameModal(game);
    //  this.createModals();
    input_answer[0] = game.add.inputField(92, 95, {
font: '11px Arial',
fill: '#212121',
fontWeight: 'bold',
width: 100,
padding: 8,
borderWidth: 1,
borderColor: '#0EC2F5',
borderRadius: 6,
});
input_answer[1] = game.add.inputField(92,135,{
font: '11px Arial',
fill: '#212121',
fontWeight: 'bold',
width: 100,
padding: 8,
borderWidth: 1,
borderColor: '#0EC2F5',
borderRadius: 6,

});
input_answer[2] = game.add.inputField(92,175,{
font: '11px Arial',
fill: '#212121',
fontWeight: 'bold',
width: 100,
padding: 8,
borderWidth: 1,
borderColor: '#0EC2F5',
borderRadius: 6,

});
  },
  backtosecondscsreen : function()
  {
    console.log(input_answer[0].text._text);
    if(input_answer[0].text._text =="" || input_answer[1].text._text =="" || input_answer[2].text._text=="")
    {
      game.add.text(20,340, "Please enter all the names",style2);
    }
    else {
      game.state.start('middle_screen1');
    }
  },

  //
  // render : function()
  //        {
  //         game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
  //       },
          // handsscreen : function()
          // {
          //
          // },
 }


 var quiz_screen = function(game){}
 quiz_screen.prototype =
 {

  init : function()
  {
     game.load = new CustomLoader(game);
  },
   preload : function()
  {
  //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
   game.load.webfont('tahoma','Tahoma');
   game.load.image('before','assets/left.png');
   game.load.image('after','assets/right.png');
  // game.load.video('demo','assets/SummerBreeze.mp4');

 },
  create : function()
  {
  //   sessionstart();

  //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
  //submit_button = game.add.button()
  this.game.stage.backgroundColor = "#ffffff";
  left_button[0] = game.add.sprite(38,12,'after');
  left_button[0].scale.setTo(0.08,0.08);
  left_button[0].inputEnabled = true;
  left_button[0].events.onInputDown.add(this.backtosecondscreen,this);
  right_button[0] = game.add.sprite(950,12,'before');
  right_button[0].scale.setTo(0.08,0.08);

  this.game.scale.pageAlignHorizontally = true;
  this.game.scale.pageAlignVertically = true;
  this.game.scale.refresh();
  var style = { font: "23px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
  screen_text[20] = game.add.text(92,100,'Question only for ' + input_answer[0].text._text + " : " ,style);
  screen_text[1] = game.add.text(92,146,'What do you think happened between their hands?',style);
  var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };

  screen_text[2] = game.add.text(95,190,'Click on the correct text answer below.',style1);
  var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle" };

  answer_option[0] = game.add.text(100,230,'A. Heat flows from warmer to cooler hand until they both are at same temperature.',style2);
  answer_option[1] = game.add.text(100,260,'B. There is friction between their two hands',style2);
  style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle" }; //correctanswer
  style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle" };//wrong answer
  feedback[0] = game.add.text(95,502,'',style3);
  feedback_next[0]=game.add.text(95,530,'',style3);
  feedback[1] = game.add.text(95,502,'',style4);
  feedback_next[1]=game.add.text(95,530,'',style4);
  //
  for(i=0;i<2;i++)
  {
  answer_option[i].inputEnabled = true;
  answer_option[i].events.onInputDown.add(this.feedback_function,this);
  //answer_option[i].events.onInputOver.add(over, this);
  //answer_option[i].text.events.onInputOut.add(out, this);
  console.log('hey');
  }

  },



  /*render : function()
         {
          game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
        },*/
   feedback_function : function(item)
   {
  //   feedback_count[0] = feedback_count[0] + 1;
     console.log('hi');
     var fb = item.text;
     console.log(item.text);

    //  if(feedback[0] == "" && feedback[0] == "")
    //  {
    //
    //  }
    // else
    // {
    //   feedback[0].setText
    // }
     if (fb == "A. Heat flows from warmer to cooler hand until they both are at same temperature.")
     {
       //hiding all previous feedback
       //if(feedback_count[0] == 1) {
       if(feedback[1] != '' && feedback_next[1] != '')
       {
         feedback[1].text = '';
         feedback_next[1].text ='';
       }
       feedback[0].text = 'Feedback : That is right. Heat always flows from warmer region to colder region.';
       feedback_next[0].text = 'Let us understand this more. Click on the next button.';

       right_button[0].inputEnabled = true;
       right_button[0].events.onInputDown.add(this.gototoconductionscreen,this);
       // for (i=0; i<2; i++)
       // {
       //   if(feedback[i])
       //   {
       //   if (feedback[i] !==0 && i!== 0)
       //   {
       //     feedback[i].destroy();
       //   }
       // }
       // if(feedback_next[i])
       // {
       //   if (feedback_next[i] !==0 && i!== 0)
       //   {
       //     feedback_next[i].destroy();
       //   }
       // }
       // }

     //}
   }
     else if (fb == "B. There is friction between their two hands" )
     {
       if(feedback[0] != '' && feedback_next[0]!= '')
       {
         feedback[0].text = '';
         feedback_next[0].text ='';
       }
         //game.state.start('conduction_screen');
      //if(feedback_count[0] == 1) {
       //feedback[] = game.add.text(95,502,'You may think that Sasha’s hands got warm because of friction.',style4);
       //feedback_next[1] = game.add.text(95,532,'But only by holding hands together, Tanvi’s hands can transfer heat to Sasha’s.',style4);
       feedback[1].text = "You may think that Sasha’s hands got warm because of friction.";
       //feedback[0]
       // feedback[0].setText('');
       // feedback_next[0].setText('');
       // feedback[0].setText('Feedback : You may think that Sasha’s hands got warm because of friction');
       feedback_next[1].text = "But only by holding hands together, Tanvi’s hands can transfer heat to Sasha’s";
       // feedback[0].addColor('#FF0000', 0) ;
       // feedback_next[0].addColor('#FF0000',0);
       right_button[0].inputEnabled = true;
       right_button[0].events.onInputDown.add(this.gotowrongone,this);
       // for (i=0; i<2; i++)
       // {
       //   if(feedback[i])
       //   {
       //   if (feedback[i] !==0 && i!== 1)
       //   {
       //     feedback[i].destroy();
       //   }
       // }
       // if(feedback_next[i])
       // {
       //   if (feedback_next[i] !==0 && i!== 1)
       //   {
       //
       //     feedback_next[i].destroy();
       //   }
       // }
       // }
     //}
   }


   },
   gototoconductionscreen : function()
   {
     game.state.start('conduction_screen');
   },
   gotowrongone : function()
   {
     game.state.start('wrong_one');
   },
   backtosecondscreen : function()
   {
     game.state.start('hands_screen');
   }

 }



      var quiz3_screen = function(game){}
      quiz3_screen.prototype =
      {

       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {
       //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
        game.load.webfont('tahoma','Tahoma');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');
       // game.load.video('demo','assets/SummerBreeze.mp4');

      },
       create : function()
       {
       //   sessionstart();

       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       this.game.stage.backgroundColor = "#ffffff";
       this.game.scale.pageAlignHorizontally = true;
       this.game.scale.pageAlignVertically = true;
       this.game.scale.refresh();
       left_button[8] = game.add.sprite(38,12,'after');
       left_button[8].scale.setTo(0.08,0.08);
       left_button[8].inputEnabled = true;
       left_button[8].events.onInputDown.add(this.sunrisescreen,this);
       right_button[8] = game.add.sprite(950,12,'before');
       right_button[8].scale.setTo(0.08,0.08);


       var style = { font: "23px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       screen_text[22] = game.add.text(92,100,'Question only for ' + input_answer[2].text._text + " : " ,style);

       screen_text[6] = game.add.text(92,146,'How did heat transfer happen from Sun to Earth?',style);
       var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };

       screen_text[7] = game.add.text(95,190,'Click on the correct text answer below.',style1);
       var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle" };

       answer_option[4] = game.add.text(100,230,'A. The sun can only transfer heat to Earth by air.',style2);
       answer_option[5] = game.add.text(100,260,'B. There is vaccum between Sun and Earth and the sun can still transfer heat.', style2);
       var hint_text = game.add.text(100, 400, 'Hint : Vaccum is the space between the Sun and the Earth',style)
       //
       for(i=4;i<6;i++)
       {
       answer_option[i].inputEnabled = true;
       answer_option[i].events.onInputDown.add(this.feedback3_function,this);
       console.log('hey');
       }
       style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle" }; //correctanswer
       style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle" };//wrong answer
       feedback[4] = game.add.text(95,502,'',style4);
       feedback_next[4] = game.add.text(95,530,'',style4);
       feedback[5] = game.add.text(95,502,'',style3);
       feedback_next[5] = game.add.text(95,532,'',style3);




       },



       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
        feedback3_function : function(item)
        {
          console.log('hi');
          var fb = item.text;
          console.log(item.text);




          if (fb == "A. The sun can only transfer heat to Earth by air.")
          {
            //hiding all previous feedback
            if(feedback[5] != '' && feedback_next[5] != '')
            {
              feedback[5].text = '';
              feedback_next[5].text ='';
            }
            feedback[4].text = 'That is not right. There is some vaccum in between Sun and Earth.';
            feedback_next[4].text = 'Let us understand this more. Click on the next button.';
            right_button[8].inputEnabled = true;
            right_button[8].events.onInputDown.add(this.wrong_three,this);
            // for (i=4; i<6; i++)
            // {
            //   if(feedback[i])
            //   {
            //   if (feedback[i] !==0 && i!== 4)
            //   {
            //     feedback[i].destroy();
            //   }
            // }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 4)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
            // }

          }

          else if (fb == "B. There is vaccum between Sun and Earth and the sun can still transfer heat.")
          {
            if(feedback[4] != '' && feedback_next[4] != '')
            {
              feedback[4].text = '';
              feedback_next[4].text ='';
            }
            feedback[5].text = 'That is right. Heat is travels to Earth in the form of electromagnetic waves (radiation).';
            feedback_next[5].text = 'Let us understand this better in the next section.';

            right_button[8].inputEnabled = true;
            right_button[8].events.onInputDown.add(this.radiationscreen,this);
          //   for (i=4; i<6; i++)
          //   {
          //     if(feedback[i])
          //     {
          //     if (feedback[i] !==0 && i!== 5)
          //     {
          //       feedback[i].destroy();
          //     }
          //   }
          //   if(feedback_next[i])
          //   {
          //     if (feedback_next[i] !==0 && i!== 5)
          //     {
          //       feedback_next[i].destroy();
          //     }
          //   }
          // }
          }

        },
        sunrisescreen : function()
        {
          game.state.start('sunrise_screen');
        },
        radiationscreen : function()
        {
          game.state.start('radiation_screen');
        },
        wrong_three : function()
        {
          game.state.start('wrong_three');
        }
      }



      var end_screen2 = function(game){}
      end_screen2.prototype =
      {

       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {
       //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
        game.load.webfont('tahoma','Tahoma');
        game.load.image('after','assets/right.png');


       game.load.video('lecture','assets/lecture.mp4');

      },
       create : function()
       {
       //   sessionstart();
       video_play[13] = 0;
       video[13] = game.add.video('lecture');
       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       video[13].play(true);
       video[13].loop = false;
       video[13].onComplete.add(this.video13_stop,this);

       videosprite[9] = video[13].addToWorld(0,60,0,0);
      videosprite[9].scale.setTo(0.6,0.6);
          game.input.onDown.add(this.pause13, this);
          console.log('hi');

       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       this.game.stage.backgroundColor = "#ffffff";
       this.game.scale.pageAlignHorizontally = true;
       this.game.scale.pageAlignVertically = true;
       this.game.scale.refresh();
       left_button[14] = game.add.sprite(38,12,'after');
       left_button[14].scale.setTo(0.08,0.08);
       left_button[14].inputEnabled = true;
       left_button[14].events.onInputDown.add(this.pan1,this);
       var style = { font: "23px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       //screen_text[10] = game.add.text(92,146,'What kind of heat transfer is seen here?',style);
       right_button[14] = game.add.sprite(950,12,'before');
       right_button[14].scale.setTo(0.08,0.08);
       right_button[14].inputEnabled = true;
       right_button[14].events.onInputDown.add(this.pan12,this);

       },
        pan1 : function()
        {
          game.state.start('quiz6_screen');
        },
        pause13 : function()
        {

        video[13].paused = (video[13].paused) ? false : true;

        },
        video13_stop : function()
        {
       videosprite[9].kill();
            //video[13].onComplete.add(this.video_stop,this);
         //game.state.start('');

        },
        pan12 : function()
        {
          game.state.start('interimscreen3');
        }
      }



var final_screen = function(game){}
final_screen.prototype =
{
  init : function()
  {
     game.load = new CustomLoader(game);
  },
   preload : function()
  {
  //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
   game.load.webfont('tahoma','Tahoma');
   game.load.image('before','assets/left.png');
   game.load.image('after','assets/right.png');
  // game.load.video('demo','assets/SummerBreeze.mp4');

 },
  create : function()
  {
  //   sessionstart();

  //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
  //submit_button = game.add.button()
  this.game.stage.backgroundColor = "#ffffff";
  this.game.scale.pageAlignHorizontally = true;
  this.game.scale.pageAlignVertically = true;
  this.game.scale.refresh();



  var style = { font: "23px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };


  var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
  if(group_score == 0)
  {
      screen_text[8] = game.add.text(92,146,'Your group grade is 0/50 as you got no answers correct',style);
  }
  else if(group_score == 1)
  {
    screen_text[8] = game.add.text(92,146,'Your group grade is 25/50 as you got one answer correct out of two',style);
  }
  else if (group_score == 2)
  {
    screen_text[8] = game.add.text(92,146,'Your group grade is 50/50 as you got both answers correct',style);

  }
  //for 2
  if(individual_score[0] == 0)
  {
    screen_text[9] = game.add.text(92,200,input_answer[0].text._text + " your individual grade is 0/50",style);

  }
  else if(individual_score[0] == 1)
  {
    screen_text[9] = game.add.text(92,200,input_answer[0].text._text + " your individual grade is 25/50",style);
  }
  else if (individual_score[0] == 2)
  {
    screen_text[9] = game.add.text(92,200,input_answer[0].text._text + " your individual grade is 50/50",style);


  }
  //for 3
  if(individual_score[1] == 0)
  {
    screen_text[10] = game.add.text(92,300,input_answer[1].text._text + " your individual grade is 0/50 ",style);

  }
  else if(individual_score[1] == 1)
  {
    screen_text[10] = game.add.text(92,300,input_answer[1].text._text + " your individual grade is 25/50",style);

  }
  else if (individual_score[1] == 2)
  {

    screen_text[10] = game.add.text(92,300,input_answer[1].text._text + " your individual grade is 50/50",style);

  }
  //for 3
  if(individual_score[2] == 0)
  {
    screen_text[11] = game.add.text(92,400,input_answer[2].text._text + " your individual grade is 0/50 ",style);

  }
  else if(individual_score[2] == 1)
  {
    screen_text[11] = game.add.text(92,400,input_answer[2].text._text + " your individual grade is 25/50 ",style);

  }
  else if (individual_score[2] == 2)
  {
    screen_text[11] = game.add.text(92,400,input_answer[2].text._text + " your individual grade is 50/50 ",style);


  }


},
pan122 : function()
{
 game.state.start('interimscreen1');
}
}


game.state.add('start_screen',start_screen);
game.state.add('quiz_screen',quiz_screen);
game.state.add('quiz2_screen',quiz2_screen);
game.state.add('quiz3_screen',quiz3_screen);
game.state.add('quiz4_screen',quiz4_screen);
game.state.add('end_screen',end_screen);
game.state.add('final_screen',final_screen);
game.state.add('lastvideoscreen1',lastvideoscreen1);
game.state.start('start_screen');
}
