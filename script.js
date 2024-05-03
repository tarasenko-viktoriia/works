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
