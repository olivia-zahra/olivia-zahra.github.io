//=============================== MENU SHOW Y HIDDEN =========================/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

//======= MENU SHOW ========/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click",() => {
        navMenu.classList.add("show-menu");
    });
}

//====== MENU HIDDEN ======/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

//================= REMOVE MENU MOBILE ===============/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//================= ACCORDION SKILLS ==================/
const skillContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for (i=0; i<skillContent.length;i++){
        skillContent[i].className = "skills_content skills_close";
    }
    if (itemClass === "skills_content skills_close"){
        this.parentNode.className = "skills_content skills_open";
    }
}
skillsHeader.forEach((el)=>{
    el.addEventListener("click",toggleSkills);
});

//================ QUALIFICATION TABS =================/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
    });
});

//==================== SERVICES MODAL =====================/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, index) => {
    modalBtn.addEventListener("click", () => {
        modal(index);
    });
});

modalCloses.forEach((modalClose, index) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        });
    });
});

//=================== PORTFOLIO SWIPER ==========================/
var swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//==================== SCROLL SECTIONS ACTIVE LINK ==================/
const sections = document.querySelectorAll("section[id");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                  .querySelector(".nav__menu a[href*=" + sectionId + "]")
                  .classList.add("active-link");
        } else {
            document
                  .querySelector(".nav__menu a[href*=" + sectionId + "]")
                  .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

//================ CHANGE BACKGROUND HEADER ===================/
function scrollHeader() {
    const nav = document.getElementById("header");
    // when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

//================ SHOW SCROLL UP ==========================/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // when the scroll is higher than 500 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//================= DARK LIGHT THEME ====================/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the curret theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// we validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
    );
}

// Activate / deativate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // we save the theme and the curret icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});