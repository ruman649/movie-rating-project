
let cast = document.getElementById("cast");
let story = document.getElementById("story");
let locationX = document.getElementById("location");
let dialogue = document.getElementById("dialogue");
let action = document.getElementById("action");
let graphic = document.getElementById("graphic");
let raomaintic = document.getElementById("raomaintic");
let backMusic = document.getElementById("backMusic");
let videoGraphice = document.getElementById("videoGraphice");
let sideCast = document.getElementById("sideCast");



let iTag = document.getElementById('iTag');
cast.addEventListener("blur", () => {

    let castVaue = cast.value;
    // console.log(castVaue)
    let castErr = document.getElementById('castErr');
    // console.log(castErr)
    let reg = /^([0-9\.]){0,3}$/;
    if (reg.test(castVaue)) {
        if (castVaue < 11) {
            // console.log("valid")
            castErr.innerHTML = "";
            iTag.classList.add('one');
        }
        else {
            // console.log("add 0 to 10")
            castErr.innerHTML = "add 0 to 10";
            castErr.setAttribute("style", "color:red");
        }
    }
    else {
        // console.log("plz add number")
        castErr.innerHTML = "Only add 2 number";
        castErr.setAttribute("style", "color:red");
    }
    // console.log(castVaue)
});


story.addEventListener("blur", () => {
    let storyValue = story.value;
    let reg = /^([0-9\.]){0,3}$/;

    let storyErr = document.getElementById('storyErr');
    if (reg.test(storyValue)) {
        if (storyValue < 11) {
            // console.log("yes")
            storyErr.innerHTML = '';
            iTag.classList.add('two');

        }
        else {
            // console.log("add 0 to 10")
            storyErr.innerHTML = "add 0 to 10";
            storyErr.setAttribute("style", "color:red");
        }
    }
    else {
        // console.log("no");
        storyErr.innerHTML = "Only add 2 number";
        storyErr.setAttribute("style", "color:red");
    }
})


locationX.addEventListener('blur', () => {
    let locationErr = document.getElementById("locationErr");

    let reg = /^([0-9\.]){0,3}$/;
    let locationXvalue = locationX.value;

    if (reg.test(locationXvalue)) {
        // console.log('true');
        if (locationXvalue < 11) {
            // console.log("valid");
            locationErr.innerHTML = '';
            iTag.classList.add('three');
        }
        else {
            locationErr.innerHTML = "add 0 to 10";
            locationErr.setAttribute("style", "color:red");
        }
    }
    else {
        // console.log("false");
        locationErr.innerHTML = "Only add 2 number";
        locationErr.setAttribute("style", "color:red");
    }
})


dialogue.addEventListener('blur', () => {
    let diologeErr = document.getElementById("dialogueErr");

    let reg = /^([0-9\.]){0,3}$/;
    let dialogueValue = dialogue.value;

    if (reg.test(dialogueValue)) {
        // console.log('true');
        if (dialogueValue < 11) {
            // console.log("valid");
            diologeErr.innerHTML = '';
            iTag.classList.add('four');
        }
        else {
            diologeErr.innerHTML = "add 0 to 10";
            diologeErr.setAttribute("style", "color:red");
        }
    }
    else {
        // console.log("false");
        diologeErr.innerHTML = "Only add 2 number";
        diologeErr.setAttribute("style", "color:red");
    }
})


action.addEventListener('blur', () => {
    let actionErr = document.getElementById("actionErr");

    let reg = /^([0-9\.]){0,3}$/;
    let actionValue = action.value;

    if (reg.test(actionValue)) {
        // console.log('true');
        if (actionValue < 11) {
            // console.log("valid");
            actionErr.innerHTML = '';
            iTag.classList.add('five');
        }
        else {
            actionErr.innerHTML = "add 0 to 10";
            actionErr.setAttribute("style", "color:red");
        }
    }
    else {
        // console.log("false");
        actionErr.innerHTML = "Only add 2 number";
        actionErr.setAttribute("style", "color:red");
    }
})


graphic.addEventListener('blur', () => {
    let graphicErr = document.getElementById("graphicErr");

    let reg = /^([0-9\.]){0,3}$/;
    let graphicValue = graphic.value;

    if (reg.test(graphicValue)) {
        // console.log('true');
        if (graphicValue < 11) {
            // console.log("valid");
            graphicErr.innerHTML = '';
            iTag.classList.add('six');
        }
        else {
            graphicErr.innerHTML = "add 0 to 10";
            graphicErr.setAttribute("style", "color:red");
        }
    }
    else {
        // console.log("false");
        graphicErr.innerHTML = "Only add 2 number";
        graphicErr.setAttribute("style", "color:red");
    }
})


raomaintic.addEventListener('blur', () => {
    let raomainticErr = document.getElementById("raomainticErr");

    let reg = /^([0-9\.]){0,3}$/;
    let raomainticValue = raomaintic.value;

    if (reg.test(raomainticValue)) {
        // console.log('true');
        if (raomainticValue < 11) {
            // console.log("valid");
            raomainticErr.innerHTML = '';
            iTag.classList.add('seven');
        }
        else {
            raomainticErr.innerHTML = "add 0 to 10";
            raomainticErr.setAttribute("style", "color:red");
        }
    }
    else {
        // console.log("false");
        raomainticErr.innerHTML = "Only add 2 number";
        raomainticErr.setAttribute("style", "color:red");
    }
})



backMusic.addEventListener('blur', () => {
    let backMusicErr = document.getElementById("backMusicErr");

    let reg = /^([0-9\.]){0,3}$/;
    let backMusicValue = backMusic.value;

    if (reg.test(backMusicValue)) {
        // console.log('true');
        if (backMusicValue < 11) {
            // console.log("valid");
            backMusicErr.innerHTML = '';
            iTag.classList.add('eight');
        }
        else {
            backMusicErr.innerHTML = "add 0 to 10";
            backMusicErr.setAttribute("style", "color:red");
        }
    }
    else {
        // console.log("false");
        backMusicErr.innerHTML = "Only add 2 number";
        backMusicErr.setAttribute("style", "color:red");
    }
})



videoGraphice.addEventListener('blur', () => {
    let videoGraphiceErr = document.getElementById("videoGraphiceErr");

    let reg = /^([0-9\.]){0,3}$/;
    let videoGraphiceValue = videoGraphice.value;

    if (reg.test(videoGraphiceValue)) {
        // console.log('true');
        if (videoGraphiceValue < 11) {
            // console.log("valid");
            videoGraphiceErr.innerHTML = '';
            iTag.classList.add('nine');
        }
        else {
            videoGraphiceErr.innerHTML = "add 0 to 10";
            videoGraphiceErr.setAttribute("style", "color:red");
        }
    }
    else {
        // console.log("false");
        videoGraphiceErr.innerHTML = "Only add 2 number";
        videoGraphiceErr.setAttribute("style", "color:red");
    }
})



sideCast.addEventListener('blur', () => {
    let sideCastErr = document.getElementById("sideCastErr");

    let reg = /^([0-9\.]){0,3}$/;
    let sideCastValue = sideCast.value;

    if (reg.test(sideCastValue)) {
        // console.log('true');
        if (sideCastValue < 11) {
            // console.log("valid");
            sideCastErr.innerHTML = '';
            iTag.classList.add('ten');
        }
        else {
            sideCastErr.innerHTML = "add 0 to 10";
            sideCastErr.setAttribute("style", "color:red");
        }
    }
    else {
        // console.log("false");
        sideCastErr.innerHTML = "Only add 2 number";
        sideCastErr.setAttribute("style", "color:red");
    }
})



//show button
let showButton = document.getElementById('showButton');
showButton.addEventListener("click", (e) => {

    let myTag = document.getElementById("iTag").getAttribute('class');
    // console.log(myTag.length)

    if (myTag.length === 48) {
        // console.log('its 48')
        let target = document.querySelector('.submit');
        //  console.log(target)
        target.setAttribute("id", "submit");
        target.innerHTML = "Submit to watch the result";
        showButton.innerHTML = "";
        showButton.removeAttribute("id");

    }
    else {
        //  console.log("its not ")
        let messageBox = document.getElementById("messageBox");
        messageBox.innerHTML = "<p class='messageBox'>Please fill up this all box!</p>";
        setTimeout(() => {
            messageBox.innerHTML = "";
        }, 5000);
    }

    e.preventDefault();
})


let submit = document.querySelector(".submit");
submit.addEventListener('click', (e) => {
    // console.log("success")

    let sum = Number(cast.value) + Number(story.value) + Number(locationX.value) + Number(dialogue.value) + Number(action.value) + Number(graphic.value) + Number(raomaintic.value) + Number(backMusic.value) + Number(videoGraphice.value) + Number(sideCast.value);

    sum /=10;
//    sum = sum.toFixed(1);
    
    document.getElementById("rating").innerHTML = sum.toFixed(1);
    e.preventDefault();
})




//reset
document.getElementById("reset").addEventListener("click", ()=>{
    location.reload();
})