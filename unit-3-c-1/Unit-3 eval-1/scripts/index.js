//store the products array in localstorage as "products"

function Products(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function storedata(e){
    e.preventDefault();

    let form = document.getElementById("product");

    let Type=form.type.value;
    let Description=form.desc.value;
    let Price=form.price.value;
    let Image=form.image.value;

    let info = new Products(Type,Description,Price,Image)
   
    let data=JSON.parse(localStorage.getItem("products"))||[]
    data.push(info)
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
    // console.log(data)

}