let amount= localStorage.getItem("amount")|| 0 

document.getElementById("wallet").innerText=amount

function myfunction(){
    // console.log(amount);
    let addAmount=document.getElementById("amount").value;
    // console.log(addAmount)
    let nowAmount= Number(amount) + Number(addAmount);
    // console.log(nowAmount)
document.getElementById("wallet").innerText= nowAmount;
localStorage.setItem("amount",nowAmount)
window.location.reload()

}