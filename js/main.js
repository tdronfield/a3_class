// import your packages here
import Team from "./modules/DataModule.js";
import NavSystem from "./modules/TheNavSystem.js";

(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');

    console.log(Team);

    debugger;

    //select our user elements and load the content
    let userSection = document.querySelector(".users-section").children;

    userSection[1].textContent = Team["Justin"].name;
    userSection[2].textContent = Team["Justin"].role;
    userSection[3].textContent = Team["Justin"].nickname;

})();