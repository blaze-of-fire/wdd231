let currentTime = new Date();
let currentDay = currentTime.getDay();
const msg = document.getElementById("msg_using_timestamp");

function timestampCheck(theTime, message) {
    if(localStorage.getItem('timestamp') === null){
        localStorage.setItem('timestamp', currentDay.toString());
        message.textContent = "Welcome! Let us know if you have any questions.";
        
    }
    else{
        let storedTimestamp = localStorage.getItem('timestamp');

        if (Number(storedTimestamp) === Number(theTime)){
            message.textContent = "Back so soon! Awesome!";
            localStorage.setItem('timestamp', theTime.toString());

        }
        else{
        let daysAgo = (Number(storedTimestamp) - Number(theTime.toString())).toString();
        message.textContent = `You last visited ${daysAgo} days ago.`;
        localStorage.setItem('timestamp', theTime.toString());
    }
    }
}

timestampCheck(currentDay, msg);