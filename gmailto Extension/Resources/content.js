console.log("gmailto: loaded");

window.addEventListener("click", function(event) {
    if (event.target.tagName != "A") return;
    
    // See: https://stackoverflow.com/questions/29223502/how-to-get-href-of-anchor-when-the-event-target-is-htmlimageelement
    const anchor = event.target.closest("a");
    if (!anchor) return;
    const href = event.target.getAttribute("href");
    if (!href || !href.startsWith("mailto:")) return;

    console.log("gmailto: mailto found: " + href);
    
    // stop the click and the propagation
    event.preventDefault();
    event.stopPropagation();
});
