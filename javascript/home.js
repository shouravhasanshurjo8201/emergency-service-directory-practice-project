
let heartIconClick = Number(document.getElementById("heart-count").innerText);
let copyButtonClick = Number(document.getElementById("Copy-count").innerText);

document.getElementById("Emergency-Hotline-Section").addEventListener("click", function(Event){
    // Heart Icons Functionality start
    if(Event.target.classList.contains("heart-icon")){
        heartIconClick = heartIconClick + 1;
        document.getElementById("heart-count").innerText = heartIconClick;
        Event.target.style.color = "red";
        Event.target.style.opacity = "60%";
    }
    // Heart Icons Functionality End

    // Copy Buttons Functionality start
    if(Event.target.classList.contains("Copy-button")){
        copyButtonClick = copyButtonClick + 1;
        document.getElementById("Copy-count").innerText = copyButtonClick;

        const card = Event.target.closest(".Hotline-card");
        const helplineNumber = card.querySelector(".Helpline-Number").innerText;

        navigator.clipboard.writeText(helplineNumber).then(function(){
            alert("Copied Number : " + " " + helplineNumber);
        })
    }
    // Copy Buttons Functionality End

   
})