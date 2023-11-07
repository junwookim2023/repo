"use strict";
let readlineSync = reqire('readline-sync');
/*
Demonstration on loops
*/
// Do not edit: the main function to house our program code
function main()
{
    //infinite while loop
    console.log("============= While Loop Version =============");
    let answer = readlineSync.question("Who is the best teacher?");
    while (answer != "Chris")
    {
        console.log("Nope, try again!")
        answer = readlineSync.question("Who is the best teacher?");

    }

    console.log("=========== For Loop Version ======");
    answer = readlineSync.question("Who is the best teacher?");
    //infinite for loop
    for (;answer != "Chris";)
    {
        console.log("Nope, try again!")
        answer = readlineSync.question("Who is the best teacher?");
        
    }
}