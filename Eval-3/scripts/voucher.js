var dataarr =JSON.parse(localStorage.getItem("user"))

var total = dataarr.reduce(function (acc,el) {
    return acc+Number(el.wallet)
},0)

var x=document.querySelector("#wallet_balance")
x.innerText= "Wallet amount"+" "+total

var bigbox=document.querySelector("#voucher_list")


const url =`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

fetch(url).then(function(res){
    return res.json();
}).then(function(res){
    // let store=res[0].vouchers
    console.log(res[0].vouchers)
    appendData(res[0].vouchers)
    //
})
// .catch(function(err){
//     console.log(err)
// })

function appendData(data){
    // document.getElementById("voucher_list").innerHTML=null

    if(bigbox==undefined){
        return false;
    }

data.forEach(function (el){
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
    bigbox.append(div)
    // document.getElementById("voucher_list").append(div)
})
}

function add(el){
    if(total>el.price)
    {
        alert("Hurray! purchase sucessful")
        arr.push(el)
    localStorage.setItem("purchase",JSON.stringify(arr))
    total=total-el.price
    localStorage.setItem("user",JSON.stringify(dataarr))
    }
    else{
        alert("Sorry! Insufficient balance")
    }
    
}