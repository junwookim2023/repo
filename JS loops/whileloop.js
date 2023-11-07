"use strict";
/*
Demonstration on loops
*/
// Do not edit: the main function to house our program code
function main()
{

    let i = 1;
    let str ="";
    console.log("/**** print 1 - 10 *****/");
    while(i<11)
    {
        str = str + " "+ i; ///i goes from 1 to <11 (10)
        i++;
    }
    str+="\n"; //add linebreak
    console.log(str);

    //print all even numbers from 1 - 100
    console.log("/***** print all even numbers from 1 - 100 ******/");
    i = 2;
    str = "";
    while (i<101)
    {
        str = str +" "+ i; // i goes from 2 to < 101 (100)
        i+2;
    }
    str+="\n";
    console.log(str);
    
}