#include<stdio.h>
#include <stdlib.h>
#include<math.h>

void main()
{
    float fahrenheit;
    float celcius;

    printf("Enter the temperature");
    scanf("%f",&fahrenheit);

   celcius=(fahrenheit − 32) × 5/9 ;//formula
   printf("Temperature is :%f",celcius);

}