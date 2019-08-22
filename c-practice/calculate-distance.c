#include<stdio.h>
#include <stdlib.h>

void main()
{
    float km;
    float meter;
    float feet;
    float inches;
    float centimeters;

    printf("Enter the distance ");
    scanf("%f",&km);

    meter=(km*1000);         //formula
    feet=(km*3280.84);       //formula
    inches=(km*39370.1);     //formula
    centimeters=(km*100000); //formula

    printf("meter  : %f\n",meter);
    printf("feet  : %f\n",feet);
    printf("inches  : %f\n",inches);
    printf("centimeters  : %f\n",centimeters);
}