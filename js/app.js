/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * 
*/
const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const sectionsArray = [...sections];

// build the nav

const sectionsId = sectionsArray.forEach((s, i) => {
    s.setAttribute("id", `section${i + 1}`);
    s.setAttribute("data-nav", `Section ${i + 1}`);
})

function navListItem() {
    sections.forEach(section => {
        const createSection = document.createElement("li");
        navList.appendChild(createSection);

        const createLink = document.createElement("a");
        createLink.setAttribute("href", `#${section.id}`);
        createSection.appendChild(createLink);
        createLink.textContent = section.dataset.nav;
    })
}
navListItem();

// Add class 'active' to section when near top of viewport
function isInViewport(el) {
    const element = el.getBoundingClientRect();
    return (element.top >= 0 &&
        element.left >= 0 &&
        element.right <= (document.documentElement.clientWidth) &&
        element.bottom <= (document.documentElement.clientWidth)
    )
}

document.addEventListener("scroll", (e) => {
    e.preventDefault()
    sectionsArray.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add("active")
        } else {
            section.classList.remove("active")
        }
    }
    )
})

// Scroll to anchor ID 
navList.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute("href")).scrollIntoView(true)
    });



