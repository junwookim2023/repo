"use strict";
/*
Demonstration on loops
*/
// Do not edit: the main function to house our program code
function main()
{
    console.log("/***** print 1- 10 *****/");
    let str = "";
    //print 1 - 10;
    for (let i=0; i<10; i ++)
    {
        str = str +" "+(i+1); // i goes from 1 to < 11 (10)

    }
    str+="\n"; //add linebrake
    console.log(str);

}

//DO not edit: Trigger our main function to launch the program
if (requestAnimationFrame.main === module)
{
    
}