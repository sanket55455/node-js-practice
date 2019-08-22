function testElseIf(val)
{       
    if (val > 10)
    {
        return "greater than 10";
    }
    else if (val < 5)  
       {
           return "smaller than 5"
       }
       else {
           return "between 5 or 10"
       }
       
}
     console.log(testElseIf(7))


     //logical order in If Else statement

     function orderMyLogic(val)
     {       
         if (val < 5)
         {
             return "less than 5";
         }
         else if (val < 10)  
            {
                return "less than 10"
            }
            else {
                return "greater than or equal to 10"
            }
            
     }
          console.log(orderMyLogic(3))

          //changing If Else statement

          function testSize(num)
          {
          if (num < 5)
          {
              return "tiny"
          }
          else if (num < 10)
          {
              return "small"
          }          
          else if (num < 15)
          {
              return "medium"
          }
          else if (num < 20)
          {
              return "larger"
          }
          else
          {
              return "huge"
          }
        }
          console.log(testSize(7))
     
     