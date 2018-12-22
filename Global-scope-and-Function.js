var myGlobal = 10;
function fun1() 
{
    oopsGlobal = 5;
}

function fun2()
var  output = "";

if (typeof myGlobal != "undefine")
{
    output += "myGlobal: " + myGlobal;
} 
if (typeof oopsGlobal != "undefine")
{
    output += "oopsGlobal: " + oopsGlobal;
}
    console.log(output);
    {
        fun1();
        fun2();
    }