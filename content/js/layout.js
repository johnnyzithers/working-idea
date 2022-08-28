const e = require("express");

window.onclick = e => {
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
} 
function closeDiv(item) {
    console.log("EVER?");
    const element = document.getElementById($(item).attr("id")).parentElement;
    element.remove();
    // item.
}