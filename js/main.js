// import your packages here
// when using AJAX, we do not need to import files
// import Team from "./modules/DataModule.js";
// import NavSystem from "./modules/TheNavSystem.js";

(() => {
    // stub * just a place for non-component-specific stuff
    
    // AJAX REQUESTS STARTS HERE

    // Set up XMLhttp (AJAX) object
    let myReq = new XMLHttpRequest;

    // Make sure we are handling data that comes back or errors
    myReq.addEventListener('readystatechange', handleRequest);

    // open a request and pass through the URL or path of data we want
    // ready state 1
    myReq.open('GET', '../DataSet.json');

    // send the request to execute
    // ready state 2
    myReq.send(); // makes the actual request


    // this is a passive listener function - it gets invoked for every stage of the AJAX request. When the request is done and the data payload is returned from the server it passes that data to the handleDataSet function

    function handleRequest() {
        debugger;

        if (myReq.readyState === XMLHttpRequest.DONE) {
            debugger;
            // check status here and proceed
            if (myReq.status === 200) {
                // 200 means everything is ready!
                debugger;
                handleDataSet(myReq.responseText);

            } else {
                // probably got some kind of error code, so handle that 
                // a 404, 500 etc... can render appropriate error messages here
                console.error(`${myReq.status} : something done broke, son`);
            }
        } else {
            debugger;
            // request isn't ready yet, keep waiting...
            console.log(`Request state: ${myReq.readyState}. Still processing...`);
        }

    }

// AJAX REQUESTS END HERE

    
    
    // console.log('loaded');
    // console.log(Team);

    //debugger;

    // fetch(url)
    //     .then(response => response.jason())
    //     .then( data => console.log(data))
    //     .catch((err) => console.error(err));

    
    // This is static for now
    // userSection[1].textContent = Team["Justin"].name;
    // userSection[2].textContent = Team["Justin"].role;
    // userSection[3].textContent = Team["Justin"].nickname;

    //select our user elements and load the content
    function handleDataSet(data) {
        let myData = JSON.parse(data),
            userSection = document.querySelector(".users-section"),
            // Cannot reference template itself, need to select the content inside specifically
            userTemplate = document.querySelector("#profs-template").content;

        debugger;

        for (let user in data) {

            debugger;


            // clone the template, do a DEEP CLONE - taking the user div and copying it. A deep clone uses (true) to go inside the referenced node and find all the children inside it.
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children; 
                // grabs all the children to utilize in the next statements

            currentUserText[1].textContent = data[user].name;
            currentUserText[2].textContent = data[user].role;
            currentUserText[3].textContent = data[user].nickname;

            userSection.appendChild(currentUser);
        }
    }
    // This gets removed when we start to use AJAX
    // handleDataSet(Team);

})();