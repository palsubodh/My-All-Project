var data=JSON.parse(localStorage.getItem("products"))

data.map(function(el,index){
    let div = document.createElement("div")

    let Name = document.createElement("p")
    Name.innerText=el.type;

    let Des = document.createElement("p")
    Des.innerText=el.desc;

    let Pri = document.createElement("p")
    Pri.innerText=el.price;

    let Img = document.createElement("img")
    Img.src=el.image;

    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click",function(){
        removeData(el,index)
    })
    div.append(Name,Des,Pri,Img,btn)
    document.querySelector("#all_products").append(div)
    
})
function removeData(el,index){
    data.splice(index,1)
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload();
}