"use strict";
/*
Demonstration on loops
*/
// Do not edit: the main function to house our program code
function main()
{
    let str="";
    let lines = 6;
    for (let i = 1; i< lines; i++)
    {
        for (let k = i; k<lines; k++)
        {

        //k goes from 1 to 6
        str = str+" "+k;
        }
        str +="\n"; //add line break
    }
    console.log(str);
}