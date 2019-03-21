function more() {

    if (document.getElementById("more").innerHTML === "więcej +") {

        document.getElementById("meet_us_grid").style.display = "grid";
        document.getElementById("more").innerHTML = "mniej -";

    } else {
        
        document.getElementById("meet_us_grid").style.display = "none";
        document.getElementById("more").innerHTML = "więcej +";
        
    }
}


function MeetUsDesktopBehavior(z) {
    if (z.matches) { // If media query matches
        
       try {
           
               document.getElementById("meet_us_grid").style.display = "grid";
               document.getElementById("meetus_expand").remove();
               document.getElementById("meetus_expand_button").remove();
           
       } catch (error) {
           console.error(error);
           // expected output: ReferenceError: nonExistentFunction is not defined
           // Note - error messages will vary depending on browser
       }
        
    }
}

function MeetUsMobileBehavior(x) {
    if (x.matches) { // If media query matches
        document.getElementById("meet_us_grid").style.display = "none";

        document.getElementById("meet_us").appendChild(document.createElement("div")).setAttribute("id", "meetus_expand")
        document.getElementById("meetus_expand").innerHTML = "<p>Nasz zespół</p><p>Poznaj nasz zespół</p>"
        document.getElementById("meet_us").appendChild(document.createElement("div")).setAttribute("id", "meetus_expand_button")
        document.getElementById("meetus_expand_button").innerHTML = "<p id='more'>więcej +</p>"

        document.getElementById("more").addEventListener("click", more);

    }
}

module.exports = {
    more,
    MeetUsMobileBehavior,
    MeetUsDesktopBehavior
};