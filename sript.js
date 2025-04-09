var loader = document.querySelector("#loader"); // Selects the element with id "loader"
var body=document.querySelector("body")
setTimeout(function() {
    loader.style.top = "-110%";
    body.style.overflowY="scroll"
    // Moves the loader up by 100% (presumably out of view)
}, 3000); // Executes after 2000 milliseconds (2 seconds)