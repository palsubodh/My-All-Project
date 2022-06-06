var dataarr =JSON.parse(localStorage.getItem("user"))

var total = dataarr.reduce(function (acc,el) {
    return acc+Number(el.wallet)
},0)

var x=document.querySelector("#wallet_balance")
x.innerText= "Wallet amount"+" "+total

var arr=JSON.parse(localStorage.getItem("purchase"))||[]
var big=document.querySelector("#purchased_vouchers")

arr.forEach(function (el){
    let div = document.createElement("div")
    div.setAttribute("class", "voucher")
    let name= document.createElement("h2")
    name.innerText=el.name;
    let img = document.createElement("img")
    img.src=el.image
    let price = document.createElement("p")
    price.innerText=el.price
    let btn = document.createElement("button")
    btn.setAttribute("class","buy_voucher")
    btn.innerText="Buy"
    btn.addEventListener("click",function(){
        add(el)
    })
    div.append(name,img,price,btn)
    big.append(div)
    // document.getElementById("voucher_list").append(div)
})
