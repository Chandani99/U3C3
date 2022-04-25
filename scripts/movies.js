// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// const query=document.querySelector("#search").value;
let delay_time;
let amountDisplay=document.querySelector("#walletAmount");
let walletAmount=localStorage.getItem("amount")||0;
console.log(walletAmount);
amountDisplay.innerText=walletAmount;

const api_key="5ae35af1"
const findMovie=()=>{
    const query=document.querySelector("#search").value;
    const url=`https://www.omdbapi.com/?s=${query}&apikey=${api_key}`;
    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        // console.log(res.Search);
        displayMovies(res.Search);
      
        
    })
}

let displayArea=document.getElementById("movies");
let displayMovies=(data)=>{
    displayArea.innerHTML=null;
  data.map(function(elem){
    
    let movieDiv=document.createElement("div");
    movieDiv.setAttribute("id","movieDiv");

    let posterImg=document.createElement("img");
    let title=document.createElement("h5");
    let bookMovie=document.createElement("button");
    bookMovie.setAttribute("class","book_now")
    posterImg.src=elem.Poster;
    title.innerText=elem.Title;
    bookMovie.innerText="Book NOW";

    bookMovie.addEventListener("click", function(){
        selectedMovie(elem);
    });
    movieDiv.append(posterImg,title, bookMovie);
    displayArea.append(movieDiv);
})
}

// let selectedmovies=JSON.parse(localStorage.getItem("movie"))||[];
let selectedMovie=(elem)=>{
       
        localStorage.setItem("movie", JSON.stringify(elem));
        window.location.href="checkout.html";
 
}

// let main=()=>{
//     let data=findMovie();
//     if(data==undefined){
//         console.log("Error");

//     }else{
//         console.log(data);
//         displayMovies(data);
//     }
// }

// function debounce(func, delay){
//     if(delay_time){
//         clearTimeout(delay_time);
//     }
//     else{
//         delay_time=setTimeout(function(){
//             func();
//         }, delay);
//     }
// }