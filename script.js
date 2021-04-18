var Pin = "";
var enteredNum = "";

// Hide fail and success message
const notifySection = document.getElementById("notification");
notifySection.style.display ="none";

// Generate pin button event handler
const GeneratorBtn = document.getElementById("generator");
GeneratorBtn.addEventListener("click", function(){
    const generatedPin = generatePin("display-pin");
    resetTry("tries");
    hideNotification();
    Pin = "";
    document.getElementById("display-area").value =  "";
})
        

// Submit button event handler
const  submitBtn = document.getElementById("btn-submit");
submitBtn.addEventListener("click", function(){
    let disp =  document.getElementById("display-area").value;
    if (disp.length == 4) {
        enteredNum = document.getElementById("display-area").value;
        console.log(enteredNum+ "enum")
        randomNum = getGeneratedNum("display-pin");
        console.log(randomNum+"rnum");
        if (enteredNum == randomNum) {
            resetTry("tries");
            updateNotification("success", "fail");
        } else {
            updateNotification("fail", "success");
            var remainingTry = tryLeft("tries");
            document.getElementById("display-area").value = "";
            if (remainingTry==0) {
                Pin = "1234";
                zeroTry("zero-tries");
            }
        }
    } 
})

// funciton to hide notification
function hideNotification() {
    const  notifySection = document.getElementById("notification");
    notifySection.style.display = "none";
}

// function to generate a random 4 digit pin and display
function generatePin(id2) {
    const randomPin = Math.floor(1000+Math.random()*9000);
    document.getElementById(id2).value = randomPin;
    return randomPin;
}

// updates the display with the 4 digit pin
function updateDisp(clicked_id) {
var displayArea = document.getElementById("display-area")
const clickedBtn = clicked_id;
// var Pin="";
if (Pin.length < 4) {
        Pin = Pin.concat(clickedBtn);
        displayArea.value = Pin;
        if (Pin.length==4) {
            Pin = "";
        }
    }
}

// function to get the generated number
function getGeneratedNum(id) {
    let generatedNum = document.getElementById(id).value;
    return generatedNum;
}

// function to update notification area
function updateNotification(id1, id2) {
    //  id1 for success, id2 for failure
    notifySection.style.display = "block";
    let Text1 = document.getElementById(id2);
    Text1.style.display = "none";                
    let Text2 = document.getElementById(id1);
    Text2.style.display = "block";
    document.getElementById("zero-tries").style.display = "none";
}

// Resets  the total number of tries  to 3 after successful pin
function resetTry(id) {
    let numTry = document.getElementById(id).innerText;
    var  num = numTry.substring(1);
    num = "3" + num;
    document.getElementById(id).innerText = num;
}

//  Function to  update the  remaining tries after failure
function tryLeft(id) {
    const tryNum = document.getElementById(id).innerText;
    var subTry = tryNum[0]-1;
    var tryText = tryNum.substring(1);
    tryText = subTry + tryText;
    document.getElementById(id).innerText = tryText;
    return subTry;
}

// If zero tries remain
function zeroTry(id) {
    let message = document.getElementById(id);
    notifySection.style.display = "block";
    let Text1 = document.getElementById("success");
    Text1.style.display = "none";                
    let Text2 = document.getElementById("fail");
    Text2.style.display = "none";
    message.style.display = "block";
}
