// url: https://api.unsplash.com//search/photos/?query=${value}&per_page=20client_id=YOUR_ACCESS_KEY
// https://api.unsplash.com//search/photos/?query=car&per_page=20&client_id=y7-T_w7M2qk7qRzZVldDAcOHw8eQGbkVika5xobsTOM

// const apikey="y7-T_w7M2qk7qRzZVldDAcOHw8eQGbkVika5xobsTOM";
// const api ="hMs_d1xN3c09DTri6kMZtd2yL82D7yNq1bRH4XZ0AcI"
// const url =`https://api.unsplash.com//search/photos/?query=${type}&per_page=20&client_id=hMs_d1xN3c09DTri6kMZtd2yL82D7yNq1bRH4XZ0AcI`


const api="hMs_d1xN3c09DTri6kMZtd2yL82D7yNq1bRH4XZ0AcI"

import {navbar} from "../components/navbar.js";
let x = document.getElementById('navbar')
x.innerHTML=navbar()

import {find,append} from "./fetch.js"

//======================================================================
//     appending data to body & featching data using Import Export
//========================================================================

let searchfun =(e)=>{
    if(e.key==="Enter"){
        let type = document.getElementById('query').value;
    find(api,type).then((data)=>{
        

        console.log(data)
        let container=document.getElementById('container')
        container.innerHTML=""
        append(data.results,container)
    });

    }
};
document.getElementById("query").addEventListener("keydown",searchfun);

//========================================================================
//       search funcionaliy accourding to conditions provided
//==========================================================================
let categories = document.getElementById("category").children;
// console.log(categories)


function catsearch(){
    console.log(this.id);
    find(api,this.id).then((data)=>{
        

        console.log(data)
        let container=document.getElementById('container')
        container.innerHTML=""
        append(data.results,container)
    });
}
for(let el of categories){
    el.addEventListener("click",catsearch);
}






//==============================================================
//     filter functionality acourding to condition 
//================================================================

// function fillters(){
//     let x = document.getElementById("select").value;
//     // console.log(x);
//     let val = document.getElementById("query").value;
//     ranSearch(x,val).then((data)=>{
//         // console.log(data.results);
//         let container = document.getElementById("container");
//         container.innerHTML=null;
//         append(data.results,container)
//     });
// }

//  document.getElementById("select").addEventListener("input",fillters);



// make it js
// let find = async()=>{
//     let type = document.getElementById('query').value;
//     try{
//         let res= await fetch(`https://api.unsplash.com//search/photos/?query=${type}&per_page=20&client_id=${api}`);
//         let data = await res.json();
//         console.log(data)

//     }catch(err){
//         console.log(err)
//     }
// };
