        //Exercise 1
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
  for (let i = 1; i <= count; i++){
    if(i % 2 !=0){
      console.log(i);
    }
  }
}
printOdds(10);
printOdds(3);


        //Exercise 2
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName,age){
 let aboveSixteen=`Congrats ${userName}, you can drive!`;
 let belowSixteen=`Sorry ${userName}, you need to wait till you're 16.`;

 if (age < 16){
  console.log(belowSixteen);
 }else{
  console.log(aboveSixteen);
  }
}
checkAge("B",21);
checkAge("G",14);


        //Exercise 3 
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x,y){
  if(x > 0 && y > 0){
    return 1;
  }else if(x < 0 && y > 0){
    return 2;
  }else if(x < 0 && y < 0){
    return 3;
  }else if (x > 0 && y < 0){
    return 4; 
  }else{
    return"origin";
  }
}

console.log(checkQuadrant(1,1));
console.log(checkQuadrant(-1,1));
console.log(checkQuadrant(-1,-1));
console.log(checkQuadrant(11, 0));
console.log(checkQuadrant(0,0));


        //Exercise 4 
console.log("EXERCISE 4:\n==========\n");
function isValidTriangle(a,b,c){
  return a + b > c &&a + c > b &&b + c > a ;
}

function checkTriangle(a,b,c){
  let isValid=isValidTriangle(a,b,c);
  if (isValid){
    if(a == b && b == c){
      return `Equilateral`;
    }else if(a == b ||b == c ||a == c )
      return`Isosceles`;
  }else{
    return `Not a valid triangle.`;
  }
}
console.log(checkTriangle(2,2,2));//eq
console.log(checkTriangle(1,2,2));//isosceles
console.log(checkTriangle(1,1,2));//invalid




