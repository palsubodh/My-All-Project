var stk=[]
var i=1



document.querySelector("#push").addEventListener("click",push)
document.querySelector("#pop").addEventListener("click",pop)
document.querySelector("#top").addEventListener("click",topElem)
document.querySelector("#print").addEventListener("click",print)
document.querySelector("#printRev").addEventListener("click",printRev)
document.querySelector("#size").addEventListener("click",size)



function push(){
    var sample ={
        size:"prototype"
    }
    var a = Object.create(sample,{size:{value:i}})
    stk.push(a)
    i++  
    console.log(stk)
}
function pop(){
    if(stk.length!=0){
        i--
        stk.pop()
        console.log(stk)
        
    }
}

function topElem(){
    console.log(stk[stk.length-1].size)
}

function print(){
    var arr=[]
    for(var j=0;j<stk.length;j++){
        arr.push(stk[j].size)
    }
    console.log(arr)
    document.querySelector("#show").innerHTML=""
    document.querySelector("#show").append(`[ ${arr} ]`)
}
function printRev(){
    var arr=[]
    for(var j=stk.length-1;j>=0;j--){
        arr.push(stk[j].size)
    }
    console.log(arr)
    document.querySelector("#show").innerHTML=""
    document.querySelector("#show").append(`[ ${arr} ]`)
}
function size(){
    console.log(stk.length)
    document.querySelector("#sizeShow").innerHTML=""
    document.querySelector("#sizeShow").append(stk.length)
}