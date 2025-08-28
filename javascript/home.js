
let heartIconClick = Number(document.getElementById("heart-count").innerText);
let copyButtonClick = Number(document.getElementById("Copy-count").innerText);
let coinIconCount = Number(document.getElementById("coin-count").innerText);
// let coinIconCount = 10;

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

    // Call Buttons Functionality start
    if(Event.target.classList.contains("Call-button")){
    
        if(coinIconCount >= 20){
            coinIconCount = coinIconCount - 20;
            document.getElementById("coin-count").innerText = coinIconCount;

            const card = Event.target.closest(".Hotline-card");
            const helplineNumber = card.querySelector(".Helpline-Number").innerText;
            const helplineName = card.querySelector(".Service-Name").innerText;

            let now = new Date();
            let hours =  now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let amPm = ""
            if(hours >= 12){
                amPm = "PM";
            }
            else{
                amPm = "AM";
            }
            hours = hours % 12;
            if(hours == 0){
                hours = 12;
            }
            function sss(sss){
                if(sss < 10){
                    sss = '0' + sss;
                }
                return sss
            }
            let time = hours + ":" + sss(minutes) + ":" + sss(seconds) + " " + amPm;
            alert(helplineName + "\n" + "📞 Calling..." + '  ' +  helplineNumber);
            
            const Section = document.getElementById("History-Section");
            const sectionDive = document.createElement("div");
            sectionDive.innerHTML = `
            <div class="bg-gray-100 m-2 p-3 rounded-md flex justify-between items-center">
                <div>
                    <h1 class=" text-[20px] font-bold">${helplineName} </h1>
                    <p class="text-[20px] text-[#656363]">${helplineNumber}</p>
                </div>
                <div class="text-center">
                    <span class="text-[18px] text-[#656363]">${time}</span>
                </div>
            </div> 
            `
            Section.appendChild(sectionDive);
        }else{
            alert("❌ You don't have enough coins. \n You need at least 20 coins to make a call.");
        }
    }
    // Call Buttons Functionality End

})