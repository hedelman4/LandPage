//build navigation bar
const navBar = document.querySelector("#navbar");
const navList = document.createElement('ul');
const navSect1 = document.createElement('li');
const navSect2 = document.createElement('li');
const navSect3 = document.createElement('li');
const navSect4 = document.createElement('li');

navList.appendChild(navSect1)
navList.appendChild(navSect2)
navList.appendChild(navSect3)
navList.appendChild(navSect4)

navBar.appendChild(navList)

navSect1.innerHTML = "Section 1"
navSect2.innerHTML = "Section 2"
navSect3.innerHTML = "Section 3"
navSect4.innerHTML = "Section 4"

//identify list tags
const sectList = document.querySelectorAll("li");

//dynamic mouseover/mouseout shading for sections in navigation bar
for (const sect of sectList) {
    sect.addEventListener("mouseover", function () {
        sect.style.backgroundColor = "grey";
    });
    sect.addEventListener("mouseout", function () {
        sect.style.backgroundColor = "rgb(189, 189, 189)";
    });
}

//scroll section into view with click
navSect1.addEventListener("click", function () {
    document.querySelector("#section1").scrollIntoView({behavior: "smooth"});
});
navSect2.addEventListener("click", function () {
    document.querySelector("#section2").scrollIntoView({behavior: "smooth"});
});
navSect3.addEventListener("click", function () {
    document.querySelector("#section3").scrollIntoView({behavior: "smooth"});
});
navSect4.addEventListener("click", function () {
    document.querySelector("#section4").scrollIntoView({behavior: "smooth"});
});

//identify section tags
const sections = document.querySelectorAll("section")

//dynamically make section active
function makeActive(){
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 200 && box.top >= 0 && box.bottom >= 0) {
            section.className = "active"
        } else {
            section.className = ""
        }
     }
}

document.addEventListener("scroll", function() { makeActive();});