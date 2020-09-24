// import js files
import Person from "./modules/DataModule.js";
import NavSystem from "./modules/theNavModule.js";


// A self envoking function
(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');

    console.log(Person);
})();