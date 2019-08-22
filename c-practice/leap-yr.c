#include<stdio.h>
#include<stdlib.h>

int main()
{
    int yr;
    printf("Enter the year");
    scanf("%d",&yr);

   if(yr%4==0)
{
    printf("leap year.");
}
else
{
    printf("it is not leap year");
}
return 0;
}