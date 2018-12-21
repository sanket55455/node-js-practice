#include <stdio.h>
#include <stdlib.h>

void pointerSwapDemo()
{
     int a,b;
     int *s=&a,*p=&b;

}

    int main()
    {
        pointerSwapDemo();
     int a,b;
     int *s=&a,*p=&b;



       printf("Input two integers (a & b) to swap\n");
       scanf("%d%d", &a, &b);
       *s=*s+*p;
       *p=*s-*p;
       *s=*s-*p;

       printf("a = %d\nb = %d\n",a,b);
       return 0;
    }
