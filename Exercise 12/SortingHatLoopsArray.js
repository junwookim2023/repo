"use strict";
let readlineSYnc = require("readline-sync");
/*
Author: Junwoo Kim
Date: 10-25-2023
Description: Exercise 12 - Advanced loop
*/

// DO NOT EDIT: The main function to house our program code 
const housename= ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

function assignHouse(lname)

{
    if (lname == "Potter"){
            house = 0;
            return(0);
    } else if (lname == "Malfoy"){
        house = 3;
        return(3);
    }else {
        let randomNum = parseInt(Math.random()*housename.length);
        return(randomNum);
}  
}
function main()
{ 
let housecount= []; //array for each house
for (let i=0; i<housename.length; i++)
    {
        housecount.push(0); //insert a new counter for each house in the array
    }
    for(let counter = 10; counter > 0; counter--)
    {
        //input
        //Prompt for student lastname and assign it to "lastname"
let lastname = readlineSYnc.question("please enter the last name of the student: ").toLowerCase();
//Declare a variable "house" with an empty value
let houseAssigned = assignHouse(lastname);

housecount[houseAssigned] = housecount[houseAssigned] +1;
//output
//print the assigned house on the screen
console.log("assigned House: "+ houseAssigned)
    }
for (let i = 0; i <4; i++)
    {
        console.log("Student(s) assigned to "+ housename[i]+ ": "+ housecount[i]);
    }
}
// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
