// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amountDisplay=document.querySelector("#walletAmount");
let walletAmount=localStorage.getItem("amount")||0;
console.log(walletAmount);
amountDisplay.innerText=walletAmount;

    let displaymovieInfo=document.querySelector("#movie");
    let movieinfo=JSON.parse(localStorage.getItem("movie"));
    console.log(movieinfo);
    let movieDiv=document.createElement("div");
    movieDiv.setAttribute("id","movieDiv");

    let posterImg=document.createElement("img");
    posterImg.src=movieinfo.Poster;
    let title=document.createElement("h5");
    title.innerText=movieinfo.Title;
   
    movieDiv.append(posterImg,title);
    displaymovieInfo.append(movieDiv)

    let confirmed=()=>{
        let numOfSeat=document.getElementById("number_of_seats").value;
        let userName=document.getElementById("user_name").value;
        if(numOfSeat=="" ||userName==""){
            alert("Enter the required Information");
        }
        else{
            let wallAmount=localStorage.getItem("amount")||0;
        
            let requiredAmount=Number(numOfSeat)*100;
            let amount=Number(wallAmount)
            if(amount>=requiredAmount){
                amount=amount-requiredAmount;
                localStorage.setItem("amount",amount)
                alert("Booking successful!");
               window.location.href="index.html";
            }else{
            alert("Insufficient Balance!");
            }
        }
    }
