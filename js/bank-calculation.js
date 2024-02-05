

document.getElementById('deposite-filed').addEventListener('click', function() {

 const newDepositeFiled =document.getElementById('input-filed-area');
 const newDepositeString =newDepositeFiled.value;
 const newDeposite= parseFloat(newDepositeString);
 newDepositeFiled.value='';

 if(isNaN(newDeposite)){
    alert("please provide a number");
    return ;

 }

 
 const previousDepositeAmount =document.getElementById('balance-filed');
 const previousDepositeAmountString =previousDepositeAmount.innerText;
 const previousDeposite=parseFloat(previousDepositeAmountString);

 const totalAmount =newDeposite + previousDeposite;
 previousDepositeAmount.innerText= totalAmount;


 const previousTotalAmount = document.getElementById('previous-total-amount');
 const previousTotalAmountString = previousTotalAmount.innerText;
 const previousAmount = parseFloat(previousTotalAmountString);
 
 const total = totalAmount + previousAmount;

 previousTotalAmount.innerText=total;


});

document.getElementById('Withdraw-btn').addEventListener('click', function () {

    // Get the new withdrawal amount entered by the user
    const newWithdrawAmount = document.getElementById('Withdraw-filed');
    const newWithdrawAmountString = newWithdrawAmount.value;
    const WithdrawAmount = parseFloat(newWithdrawAmountString);
    newWithdrawAmount.value='';

    if(isNaN(WithdrawAmount)){
        alert("please provide a Number");
        return;
    }

   

    // Get the previous withdrawal amount from the balance element
    const previousWithdrawAmount = document.getElementById('Withdraw-balance');
    const previousWithdrawAmountString = previousWithdrawAmount.innerText;
    const previousWithdraw = parseFloat(previousWithdrawAmountString);

    

    const previousBalanceTotal =document.getElementById('previous-total-amount');
    const previousBalanceTotalString = previousBalanceTotal.innerText;
    const previousBalance =parseFloat(previousBalanceTotalString);


    if(WithdrawAmount > previousBalance){
        alert('tk nai');
        return;
    }
    // Calculate the total withdrawal amount
    const totalWithdraw = WithdrawAmount + previousWithdraw;
    previousWithdrawAmount.innerText = totalWithdraw;

    const WithdrawAllBalance =previousBalance - totalWithdraw;
    previousBalanceTotal.innerText= WithdrawAllBalance;

});




