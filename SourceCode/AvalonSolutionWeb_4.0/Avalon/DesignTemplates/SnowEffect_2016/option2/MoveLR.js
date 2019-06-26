



      // <!--



          var distanceBall=0; 



          var directionBall=1; 

          document.getElementById('animatedImage').style.top = 10;
          document.getElementById('animatedImage').style.left = 10;



          var timerToggle=null; 

         animateBall();
          



          function animateBall() {   



              document.getElementById("animatedImage").style.left=distanceBall + "px";
              //document.getElementById("animatedImage").style.top=distanceBall + "px";


              distanceBall+=directionBall;


//400
              if (distanceBall>window.screen.width) { 
	//directionBall=-1; 
document.getElementById('animatedImage').style.top = 10;
document.getElementById('animatedImage').style.left = 10;
distanceBall=0;
}



              if (0>distanceBall) { directionBall=1; }



              timerToggle=setTimeout(function() { animateBall(); },10);



          }



          



          function checkButton() {



              if (document.getElementById("ballButton").value=="Animate Basketball") {


                  animateBall();



              } else {


                  clearTimeout(timerToggle);



              }



          }