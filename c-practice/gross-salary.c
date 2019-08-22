#include <stdio.h>
#include <stdlib.h>

int main()
{
    int gross_salary;
    int allowance;
    int rent;
    int basic;

    printf("Enter Basic Salary\n");
    scanf("%d",&basic);

    allowance=(basic * 40)/100;          //formula
    rent=(basic*20)/100;                 //formula
    gross_salary=basic-(allowance+rent); //formula

    printf("\nGross Salary:%d",gross_salary);
    return 0;
}