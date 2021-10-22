// 1) This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, 
// the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

// 20 steps North, now at (0, 20)
// 30 steps East, now at (30, 20)
// 10 steps South. now at (30, 10)
// 40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).

// Examples:
// trackRobot(20, 30, 10, 40) --> [-10, 10]

// trackRobot() --> [0, 0]
// // No movement means the robot stays at (0, 0).

// trackRobot(-10, 20, 10) --> [20, -20]
// // The amount to move can be negative.

// Notes:
// Each movement is an integer (whole number).


function trackRobot(...nums){
    turns = 0;
    array = nums;
    x = 0;
    y = 0;

    for(var i = 0; i < array.length; i++){
        if(turns === 0){
            y = y + array[i];
        }else if(turns === 1){
            x = x + array[i];
        }else if(turns === 2){
            y = y - array[i];
        }else{
            x = x - array[i];
        }
        turns = ((turns + 1)%4);
    }

    return [x, y];
}

console.log("Testing output for trackRobot()");
console.log(trackRobot(20, 30, 10, 40));
console.log(trackRobot(-10, 20, 10));
console.log(trackRobot());

// 2) Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

// Examples:
// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

// doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

// doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

// doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

// Notes:
// Triangle fits if it has the same or smaller size as the hole.
// The function should return false if the triangle with that dimensions is not possible.

// ******************** MY ANSWER
// This one's example does not make sense. I do not understand why the fourth example is 'false'
// I cannot do this one without further explanation and I connot find another explanation online