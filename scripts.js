/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
} //turns degree to radians

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
} // moves the artist the value of distance to the place it's facing

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
} // makes the artist turn in clockwise by a given angle

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
} // makes the artist turn in counter-clockwise by a given angle

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
}

// Our code art project
function jumpBackward(distance, context) {
    let a = radian(angle) + Math.PI;
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.moveTo(x, y);
} // Makes the artist go backward without drawing anything

function drawSnowflakeBranch(context) {
    for (let i=0; i<3; i++) {
        moveForward(10,context);
        turnRight(45);
        moveForward(10, context);
        jumpBackward(10, context);
        turnLeft(90); // Makes sure the second tiny branch is drawn
        moveForward(10, context);
        jumpBackward(10, context)
        turnRight(45); // resets the direction where the snowflake is facing
        context.stroke();
    }
} // Draws a branch of a snowflake

function drawSnowflake(context) {
    for (let i=0; i<8; i++) {
        drawSnowflakeBranch(context);
        jumpBackward(30, context); // jumps to the center of the snowflake
        turnLeft(45); // turns it so the snowflake branches don't collapse
    }
} // Draws a snowflake with 8 branches

function drawLargeSnowflake(context) {
    // Inspired by Code with Anna and Else (code.org) lesson 20
    // https://studio.code.org/s/frozen/lessons/1/levels/20
    // We got inspiration from the block named 'create a snowflake of type fractal', and used our creativty
    // to make something interesting from it
    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.beginPath();
    context.moveTo(x, y);
    for (let i=0; i<6; i++) {
        moveForward(60, context);
        drawSnowflake(context);
        jumpBackward(60, context);
        turnRight(60);
        // Creates the branches of snowflake using small snowflakes 
    }
} //uses 6 snowflakes to draw a larger one



// This function is used to show or hide  information when a "More" button is clicked.
// If the information is currently hidden, it will display the text and make it visible.
// If the information is already visible, it will hide it again.

function showMessage(memberId, message) {
    const element = document.getElementById(memberId);
    if (element.style.display === "none" || element.style.display === "") {
        element.innerText = message;
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
