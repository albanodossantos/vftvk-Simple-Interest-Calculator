function compute()
{
    // creating variables and assigning values of the inputs
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal*years*rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // We return the values computed here
    document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal
    +"\</mark>,\<br\>at an interest rate of \<mark\>"+rate
    +"\</mark\>%\<br\>You will receive an amount of \<mark\>"+amount+"\</mark\>,\<br\> in the year \<mark\>"+year+"\</mark>\<br\>"

    // Validate the inputs if positive amount user can proceed 
    if (principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
}
//this function read the value of range and displays it 
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        