function game()
{
    let num1=parseInt(prompt("Enter a number : "));
    let num2=parseInt(prompt("Enter a number : "));
    let sym=prompt("Enter a sign : ");
    if(sym=='+')
    {
        console.log("The sum of numbers is : "+(num1+num2));
    }
    else if(sym=='-')
    {
        console.log("The difference of numbers is : "+(num1-num2));
    }
    else if(sym=='*')
    {
        console.log("The product of numbers is : "+(num1*num2));
    }
    
    else if(sym=='/')
    {
        console.log("The quotient of numbers is : "+(num1/num2));
    }
    else if(sym=='%')
    {
        console.log("The remainder of numbers is : "+(num1/num2));
    }
    
}
