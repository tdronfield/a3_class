// import your packages here
// when using AJAX, we do not need to import files
// import Team from "./modules/DataModule.js";
// import NavSystem from "./modules/TheNavSystem.js";
import {fetchData} from "./modules/DataMiner.js";

(() => {
    // this receives the data payload from our AJAX req, parses it
    function handleDataSet(data) {
        // populate a lightbox with this data
        // then open it
        let lightbox = document.querySelector(".lightbox");

    }

    function retrieveProjectInfo(event) {
        // console.log(event.target.id);
        // debugger;

        // check for an ID, if there isn't one, dont try fetch call (it would break)
        if (!event.target.id) { return };

        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));

    }

    function renderPortfolioImages(thumb) {
        let userSection = document.querySelector(".users-section"),
            // Cannot reference template itself, need to select the content inside specifically
            userTemplate = document.querySelector("#profs-template").content;

        for (let user in thumb) {

            // clone the template, do a DEEP CLONE - taking the user div and copying it. A deep clone uses (true) to go inside the referenced node and find all the children inside it.
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children; 
                // grabs all the children to utilize in the next statement

            currentUserText[1].src = `images/${thumb[user].avatar}`;
            currentUserText[1].id = thumb[user].id;
            
            // add user to the view
            userSection.appendChild(currentUser);
        }

        // adding a click event to the user Section wrapper
        userSection.addEventListener("click", retrieveProjectInfo);
    }

    // pass in data that will be run through fetchData function in DataMiner.js
    fetchData('./includes/index.php').then(data => renderPortfolioImages(data)).catch(err => console.log(err));

    // fetchData('./includes/index.php').then(data => handleDataSet(data)).catch(err => console.log(err));
})();

