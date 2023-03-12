document.addEventListener("DOMContentLoaded",()=>{
    //ELEMENT REFERENCE

    const top_header = document.querySelector("top-header");
    const header = top_header.querySelector("main-header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const stolen_intro_pers = top_header.querySelector('video[data-stolen-intro-pers="1"]');
    const PlayVideo = false;

    //END ELEMENT REFERENCE

    //MAIN CODE

    console.log("DOM-Content Loaded.");
    
    if (PlayVideo) {
        stolen_intro_pers.addEventListener("ended",()=>{
            console.log("Stolen Intro Pers | Video Finished.");
            cleanUp();
            mainCode();
        },false);

        stolen_intro_pers.addEventListener("loadeddata",()=>{
            console.log("Stolen Intro Pers | Video was loaded.");
            stolen_intro_pers.play();
        });
    } else {
        cleanUp();
        mainCode();
    }

    function cleanUp() {
        stolen_intro_pers.hidden=true;
        main.hidden="";
        footer.hidden="";
        delete stolen_intro_pers;
        header.hidden="";
    }
    function mainCode() {
        delete PlayVideo;
        console.log("Running main code.");
    }

    //END MAIN CODE
})