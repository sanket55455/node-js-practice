   //switch statement
   
   function caseInSwitch(val)
    {
        var answer="";
        switch (val)
        {
           case 1:
            answer = "alpha";
            break;

            case 2:
            answer = "beeta";
            break;
            
            case 3:
            answer = "gamma";
            break;
            
            case 4:
            answer = "delta";
            break;
            
        }
        return answer;
    }
         console.log(caseInSwitch(4))



         //Default option in switch statement

         function switchOfStuff(val)
         {
             var answer="";
             switch (val)
             {
                case "a":
                 answer = "apple";
                 break;
     
                 case "b":
                 answer = "bird";
                 break;
                 
                 case "c":
                 answer = "cat";
                 break;
                 
                 case "d":
                 answer = "dog";
                 break;
                 default:
                 answer = "stuff";
                 break;
                 
             }
             return answer;
         }
              console.log(switchOfStuff("b"))
     

              //multiple identical options in switch statement

              function sequentialSize(val)
              {
                  var answer = "";
                  switch (val)
                  {
                     case 1:
                     case 2:
                     case 3:
                      answer = "low";
                      break;

                      case 4:
                     case 5:
                     case 6:
                      answer = "mid";
                      break;

                      case 7:
                     case 8:
                     case 9:
                      answer = "high";
                      break;
     
                  }
                  return answer;
                }
                
                console.log(sequentialSize(8))



                //Replacing if else chain with switch

                function chainWithSwitch(val)
                {
                var answer = "";
                switch (val)
                {
                    case "bob":
                      answer = "marley";
                      break;

                      case 42:
                      answer = "the Answer";
                      break;

                      case 1:
                      answer = "There ia no #1";
                      break;

                      case 99:
                      answer = "Miss me by this much!";
                      break;

                      case 7:
                      answer = "ate nine";
                      break;
                }
                     return answer;
            }
                     console.log(chainWithSwitch(99))
