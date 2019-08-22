//comparison with logical and operator

function testLogicalOr(val)
{
    if (val < 10 || val >20 )
    {
        return "Otuside";
    }
       return "inside";
}

     console.log(testLogicalOr(15))



//comparison with the greather than operator

function testGreaterThan(val)
{
    if (val > 100)
    {
        return "Over 100";
    }
    if (val > 10)
    {
        return "over 10";
    }
        return "10 or Under";
}
   console.log(testGreaterThan(10))


   //comparison with the greather than or equal to operator

   function testGreaterThanOrEqual(val)
{
    if (val >= 20)
    {
        return "20 or over  ";
    }
    if (val >= 10)
    {
        return "10 or over";
    }
        return "less than 10";
}
   console.log(testGreaterThanOrEqual(10))

    //comparison with the less than operator

    function testLessThan(val)
    {
        if (val < 25)
        {
            return "under 25";
        }
        if (val < 55)
        {
            return "under 55";
        }
            return "55 or over";
    }
       console.log(testLessThan(10))


        //comparison with the less than or equal operator

    function testLessThanOrEqual(val)
    {
        if (val <= 12)
        {
            return "smaller than or equal to 12";
        }
        if (val <= 24)
        {
            return "smaller than or equal to 24";
        }
            return "more than 24";
    }
       console.log(testLessThanOrEqual(10))


