// import your packages here
import Team from "./modules/DataModule.js";
import NavSystem from "./modules/TheNavSystem.js";

(() => {
    // stub * just a place for non-component-specific stuff
    let userSection = document.querySelector(".users-section"),
    // Cannot reference template itself, need to select the content inside specifically
        userTemplate = document.querySelector("#profs-template").content;
    
    // console.log('loaded');
    // console.log(Team);

    debugger;

    
    // This is static for now
    // userSection[1].textContent = Team["Justin"].name;
    // userSection[2].textContent = Team["Justin"].role;
    // userSection[3].textContent = Team["Justin"].nickname;

    //select our user elements and load the content
    function handleDataSet(data) {
        for (let user in data) {
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

    handleDataSet(Team);

})();