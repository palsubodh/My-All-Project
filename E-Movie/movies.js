let amount = localStorage.getItem("amount") || 0

document.getElementById("wallet").innerText = amount
function myfun(){
    let q = document.getElementById("search").value;
   
    fetch(`https://www.omdbapi.com/?s=${q}&apikey=e18b3001`)
        .then(function(res){
            // console.log(res);
            return res.json();
        }).then(function(res){
            // console.log(res)
            appendData(res.Search);
        })
        .catch(function(err){
            console.log(err);
        })
}



function appendData(data) {
    document.getElementById("movies").innerHTML = null

    if(data == undefined){
        return false;
    }



    data.forEach(function(el) {
        // console.log(el)

        let div = document.createElement("div")
        let img = document.createElement("img")

        img.src = el.Poster;
        title = document.createElement("p")
        title.innerText = el.Title
        btn = document.createElement("button")
        btn.setAttribute("class", "book_now")
        btn.innerText="Book Now";
        btn.addEventListener("click", function() {
            // console.log(el)
            CheckoutPage(el)
        })
        div.append(img, title, btn)


        document.getElementById("movies").append(div)


    })
}

function CheckoutPage(el) {
    localStorage.setItem("movie", JSON.stringify(el))
    // console.log(el)
    window.location.href = "checkout.html"
}
async function func(){

}

let id;
function debounce(delay) {
    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(function () {
        myfun()
    }, delay);
}