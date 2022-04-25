var preAmount=localStorage.getItem("amount")|| 0;
const addToWallet=()=>{
    let amount= document.querySelector("#amount").value;
    let totalAmount=Number(amount)+Number(preAmount)
    localStorage.setItem("amount", totalAmount);
    console.log("added");
}

// document.querySelector("#book_movies").addEventListener("click",bookMoviesPage);
const bookMoviesPage=()=>{
    window.location.href="movies.html";
}