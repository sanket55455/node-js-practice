function testNotEqual(val)
{
    if (val != 99)
    {
        return "Not-Equal";
    }
        return "Equal";
}
   console.log(testNotEqual(10))


   //comparison with the strict inequality operator

   function testStrictNotEqual(val)
{
    if (val !== 70)
    {
        return "Not-Equal";
    }
        return "Equal";
}
   console.log(testStrictNotEqual(10))
