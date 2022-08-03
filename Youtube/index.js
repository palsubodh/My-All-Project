//  HTTP/1.1

// const  API="AIzaSyADDPyLUx4bQsRmVGctlkHqMPrSsmiG1ls"

const API = "AIzaSyAGd2pJ636_CEHhVdS0zSAW7h07fSTB0WA";
count=0
const searchmovies=async ()=>{
    count++
    try{
        const q=document.getElementById("search").value
   
        const res= await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`
        )
        const data =await res.json()
        // console.log(data.items)
        append(data.items)

    }catch(err){
        console.log(err)
    }
}
if(count==0){
    const searchVdeos1 = async () => {
 
     
        try {
            q="the most popular videos in India"
    
            const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}&key=${API}`);
    
            const data = await res.json();
            // console.log(data.items)
            append(data.items);
            
        } catch (error) {
            console.log(error)        
        }
    }
    searchVdeos1()
}
const append=(videos)=>{
   


    let show_videos=document.getElementById("append");
    
    show_videos.innerHTML=null;

    videos.forEach(({id:{videoId},snippet:{title,thumbnails}}) => {
        let div=document.createElement("div")
        // div.style.border="none"
         div.style.height="fit-content"
        let video=document.createElement("iframe")
        
        video.src=`https://www.youtube.com/embed/${videoId}`;

//         let img=document.createElement("img")
//    img.src=thumbnails.high.url
//    img.style.width="100%"
//    img.style.aspectRatio="16/9"
//    ifarme.width="100%"
//    ifarme.style.overflow="none"
//    ifarme.style.aspectRatio="16/9"
//    ifarme.height="300px"
   video.allow="fullscreen"

   let data={
       title,
       videoId
   }
  
div.onclick=()=>{
    showVideo(data)
}
   let name =document.createElement("h5")
   name.innerText=title
   div.append(video,name)
   show_videos.append(div)
    });
}

const showVideo=(x)=>{

    window.location.href="video.html"
    localStorage.setItem("video",JSON.stringify(x))
}