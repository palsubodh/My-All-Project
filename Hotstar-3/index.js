let id;
let movies_div = document.querySelector(".result")
function debounceFunc(main,time){
if(id){
    clearInterval(id)
}

id = setTimeout(function(){

main()


},time)


}


async function main(){
let name = document.querySelector("#input").value
var data = searchMovies(name)
var newData = await data
// console.log(newData.search)
append(newData.Search)
}


async function searchMovies(name){

try{
    var url = `https://www.omdbapi.com/?s=${name}&apikey=43d99e17`

let result =await fetch(url)
let aResult = await result.json()

return (aResult)


}
catch(err){
    console.log(err)
}

}

function append(data){

if(data===undefined){
    movies_div.setAttribute("id","adqed")
    return false
}

console.log(data)

movies_div.innerHTML=""
movies_div.setAttribute("id","show")
data.forEach(function(el) {
    let p = document.createElement("p")
    p.innerText=el.Title
    p.addEventListener("click",function(){
open(p.innerText)
    })
    movies_div.append(p)
});

}


function open(data){

data=data.split(" ")
data=data.join("+")
put(data)

}


async function put(data){
    try{
        var showUrl = `http://www.omdbapi.com/?apikey=43d99e17&t=${data}`
        
        let res = await fetch(showUrl)
        let kabasdad  = await res.json()
        console.log(kabasdad)
        appendResult(kabasdad)

}
catch(err){
    console.log(err)
}
}


function appendResult(data){
    document.querySelector("#result").innerHTML=""
div = document.createElement("div")
img =document.createElement("img")
img.src=data.Poster
// console.log(img)
h2=document.createElement("h2")
h2.innerText=data.Title

year = document.createElement("p")
year.innerText=`Year : ${data.Year}`
cast = document.createElement("p")
cast.innerText=`Cast : ${data.Actors}`
imdb = document.createElement("p")
imdb.innerText=`IMDb : ${data.imdbRating}`


div.append(img,h2,year,cast,imdb)
document.querySelector("#result").append(div)


}