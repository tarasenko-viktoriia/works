const button = document.getElementById("button");
const buttonHoverColor = () =>{
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "black";
    });
    
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = ""; 
    });    
}
buttonHoverColor()


// const cardsContainer = document.querySelector(".container");

// cardsContainer.addEventListener("click", (e) => {
//   const target = e.target.closest(".card");

//   if (!target) return;

//   cardsContainer.querySelectorAll(".card").forEach((card) => {
//     card.classList.remove("active");
//   });

//   target.classList.add("active");
// });