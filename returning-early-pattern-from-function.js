//returning early pattern from function

function abTest(a,b)
{
    if (a<0 || b<0)
    {
        return undefined;
    }
    return Math.round(math.pow(math.sqrt(a) + math.sqrt(b),2));

}

    console.log(abTest(-2,2))