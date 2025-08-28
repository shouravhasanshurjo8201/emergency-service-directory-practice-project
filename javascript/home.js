
let heartIconClick = Number(document.getElementById("heart-count").innerText);

document.getElementById("Emergency-Hotline-Section").addEventListener("click", function(Event){
    // Heart Icons Functionality start
    if(Event.target.classList.contains("heart-icon")){
        heartIconClick = heartIconClick + 1;
        document.getElementById("heart-count").innerText = heartIconClick;
        Event.target.style.color = "red";
        Event.target.style.opacity = "60%";
    }
    // Heart Icons Functionality End

    

})