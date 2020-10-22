// import your packages here
// when using AJAX, we do not need to import files
// import Team from "./modules/DataModule.js";
// import NavSystem from "./modules/TheNavSystem.js";

(() => {
    // stub * just a place for non-component-specific stuff
    
    // AJAX REQUESTS STARTS HERE

    fetch('./DataSet.json')
        .then(res => res.json()) // built in method to parse data into plain JS
        .then(data => {
            // this is our data (DataSet.json)
            //convert to plain JS object
            handleDataSet(data);
        })

        .catch((error) => console.log(error));
    

    //select our user elements and load the content
    function handleDataSet(data) {
        let userSection = document.querySelector(".users-section"),
            // Cannot reference template itself, need to select the content inside specifically
            userTemplate = document.querySelector("#profs-template").content;

        debugger;

        for (let user in data) {

            debugger;


            // clone the template, do a DEEP CLONE - taking the user div and copying it. A deep clone uses (true) to go inside the referenced node and find all the children inside it.
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children; 
                // grabs all the children to utilize in the next statements

            currentUserText[1].src = `images/${data[user].avatar}.jpg`;
            currentUserText[2].textContent = data[user].name;
            currentUserText[3].textContent = data[user].role;
            currentUserText[4].textContent = data[user].nickname;

            userSection.appendChild(currentUser);
        }
    }
    // This gets removed when we start to use AJAX
    // handleDataSet(Team);

})();