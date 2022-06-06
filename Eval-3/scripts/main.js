document.querySelector("#form").addEventListener("submit",myrule)

var dataarr=JSON.parse(localStorage.getItem("user"))||[]
function myrule(){
    event.preventDefault();
    var data ={
        name:form.name.value,
        email:form.email.value,
        address:form.address.value,
        wallet:Number(form.amount.value)

    };
    dataarr.push(data)
    localStorage.setItem("user",JSON.stringify(dataarr))
    // console.log(dataarr)
    window.location.reload();
}