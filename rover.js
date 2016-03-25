


function startRover(){
  var input=prompt('Enter f to move Forward, b to move Backward, l to turn Left and r to turn Right or s to Stop');

  if (input.toLowerCase()==='f') {
        goForward(myRover);
        startRover();
      }

      else if (input.toLowerCase()==='b'){
        goBackward(myRover);
        startRover();
      }

      else if (input.toLowerCase()==='l'){
        turnLeft(myRover);
        startRover();
      }

      else if (input.toLowerCase()==='r'){
        turnRight(myRover);
        startRover();
      }

      else {
        alert('Rover halted');
      }
}



var myRover = {     //rover object
  position: [0,0], 
  direction: 'N'
};





// ------------------------

function goForward(rover) {  //move forward in direction that is it currently facing
  switch(rover.direction) {
    case 'N':
        if (rover.position[0] >=5) {
          rover.position[0]=-5;
          //rover.direction='S'
        }

        else {
          rover.position[0]++
        }
      break;

    case 'E':
      if (rover.position[1] >= 5) {
        rover.position[1]=-5;
        //rover.direction='W'
      }

      else {
        rover.position[1]++
      }
      break;

    case 'S':
        if (rover.position[0] <= -5) {
          rover.position[0]=5;
          //rover.direction='N'
        }

        else {
          rover.position[0]--
        }
      break;

    case 'W':
        if (rover.position[1] <= -5){
          rover.position[1]=5;
          //rover.direction='E'
        }
        else {
      rover.position[1]--
        }
      break;

  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}



function goBackward(rover) {
switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
    }

    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}



function turnLeft(rover) {

      switch(rover.direction) {
        case 'N':
          rover.direction='W'
          break;

        case 'W':
          rover.direction='S'
          break;

        case 'S':
          rover.direction='E'
          break;

        case 'E':
          rover.direction='N'
          break;

        };

  }
  

function turnRight(rover) {

      switch(rover.direction) {
        case 'N':
          rover.direction='E'
          break;

        case 'E':
          rover.direction='S'
          break;

        case 'S':
          rover.direction='W'
          break;

        case 'W':
          rover.direction='N'
          break;

        };

  }

//goForward(myRover);
//goBackward(myRover);
//turnRight(myRover);
//goForward(myRover);
//goForward(myRover);  //call to move object "forward" 


startRover();

