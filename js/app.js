//identify anchor tags
const sectList = document.querySelectorAll("a");

//dynamic mouseover/mouseout shading for sections in navigation bar
for (const sect of sectList) {
    sect.addEventListener("mouseover", function () {
        sect.style.backgroundColor = "grey";
    });
    sect.addEventListener("mouseout", function () {
        sect.style.backgroundColor = "rgb(189, 189, 189)";
    });
}

//identify section tags
const sections = document.querySelectorAll("section")

//dynamically make section active
function makeActive(){
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.top >= 0 && box.bottom >= 0) {
            section.className = "active"
        } else {
            section.className = ""
        }
     }
}

document.addEventListener("scroll", function() { makeActive();});