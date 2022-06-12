    searchMovies()


    async function searchMovies(){
        
    try{
        var url = `https://api.themoviedb.org/4/list/1?api_key=e7d7f0a4101c9bcb9e48dbc892a9d048`
    
    let result =await fetch(url)
    let aResult = await result.json()
    
    append(aResult.results)
    
    
    }
    catch(err){
        console.log(err)
    }
    
    }



    var append = (data) => {
        console.log(data)
        data.forEach(function({original_title,poster_path}){
            var img = document.createElement("img")
            div = document.createElement("div")
            img.src= `https://image.tmdb.org/t/p/w500/${poster_path}`
var p = document.createElement("h2")
p.innerText = original_title
            console.log(img.src)
            div.append(img,p)
            document.querySelector("#result").append(div)
            console.log(original_title)
            console.log(poster_path)
        });

    }