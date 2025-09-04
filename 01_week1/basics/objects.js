/*
    Objects
    creating an object via object literal notation


*/

let ball = {
  color: "red",
  shape: "round",
  canBounce: true,
  bounce: function () {
    //anonymous function
    if (this.canBounce) {
      console.log("bouncing...");
    } else {
      console.log("nope, not bouncing");
    }
  },
};

console.log(ball);

/* get */
// dot notation
console.log(ball.shape);
// bracket notation
console.log(ball["shape"]);

let key = "shape";

console.log(ball[key]);

// dot notation
ball.color = "blue";

console.log(ball);

// bracket

ball["canBounce"] = false;

console.log(ball);

// invoke method

ball.bounce();
ball["bounce"]();
