#include<stdio.h>
#include<stdlib.h>

int main()
{
    int integer;
    printf("Enter any no.");
    scanf("%d",&integer);

if(integer%2==0)
{
    printf("Even no.");
}
else
{
    printf("odd no.");
}
return 0;
}