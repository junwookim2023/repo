"use strict";
/*
Demonstration on loops
*/
// Do not edit: the main function to house our program code
function main()
{
    let name1="Ada";
    let name2="Bravo";
    let name3="Charlotte";
    let name4="Delta";
    let names=["Ada","Bravo", "Charlotte", "Delta"];
    let ages = [4, 6, 8, 10];

    let totalAge=0;
    for (let i = 0; i<names.length; i++) // print all the elements
    {
        console.log(names[i]);
    }
    console.log("Average age: "+parseFloat(totalAge)/ages.length);

}

// Do not edit: Trigger our main function to launch the program
if (require.main === module)