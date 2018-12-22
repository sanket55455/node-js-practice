var outWear = "t-shirt";//this is outside of function,(global variable)

function myOutFit()
{
    var outWear = "sweater";//this is inside of function
    return outWear;

}
   console.log(myOutFit());