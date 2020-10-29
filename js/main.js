// import your packages here
// when using AJAX, we do not need to import files
// import Team from "./modules/DataModule.js";
// import NavSystem from "./modules/TheNavSystem.js";
import {fetchData} from "./modules/DataMiner.js";

(() => {
    // this receives the data payload from our AJAX req, parses it
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

            currentUserText[1].src = `images/${data[user].avatar}`;
            currentUserText[2].textContent = data[user].name;
            currentUserText[3].textContent = data[user].role;
            currentUserText[4].textContent = data[user].nickname;

            userSection.appendChild(currentUser);
        }
    }

    // pass in data that will be run through fetchData function in DataMiner.js
    fetchData('./includes/functions.php').then(data => handleDataSet(data)).catch(err => console.log(err));
})();