
// const nav = document.querySelector(".nav");
// const navList = nav ? nav.querySelectorAll("li") : [];
// const totalNavList = navList.length;
// const allSection = document.querySelectorAll(".section");
// const totalSection = allSection.length;


// if (navList.length > 0) {
//     for (let i = 0; i < totalNavList; i++) {
//         const a = navList[i].querySelector("a");
//         a.addEventListener("click", function() {
//             removeBackSection();
//             for (let j = 0; j < totalNavList; j++) {
//                 if (navList[j].querySelector("a").classList.contains("active")) {
//                     addBackSection(j);
//                 }
//                 navList[j].querySelector("a").classList.remove("active");
//             }
//             this.classList.add("active");
//             showSection(this);
//             if (window.innerWidth < 1200) {
//                 asideSectionTogglerBtn();
//             }
//         });
//     }
// }


// function removeBackSection() {
//     for (let i = 0; i < totalSection; i++) {
//         allSection[i].classList.remove("back-section");
//     }
// }


// function addBackSection(num) {
//     if (allSection[num]) {
//         allSection[num].classList.add("back-section");
//     }
// }


// function showSection(element) {
//     for (let i = 0; i < totalSection; i++) {
//         allSection[i].classList.remove("active");
//     }
//     const target = element.getAttribute("href").split("#")[1];
//     const targetSection = document.querySelector("#" + target);
//     if (targetSection) {
//         targetSection.classList.add("active");
//     }
// }


// function updateNav(element) {
//     for (let i = 0; i < totalNavList; i++) {
//         navList[i].querySelector("a").classList.remove("active");
//         const target = element.getAttribute("href").split("#")[1];
//         if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
//             navList[i].querySelector("a").classList.add("active");
//         }
//     }
// }




// const navTogglerBtn = document.querySelector(".nav-toggler");
// const aside = document.querySelector(".aside");

// if (navTogglerBtn && aside && allSection.length > 0) {
//     navTogglerBtn.addEventListener("click", () => {
//         asideSectionTogglerBtn();
//     });

//     function asideSectionTogglerBtn() {
//         aside.classList.toggle("open");
//         navTogglerBtn.classList.toggle("open");
//         allSection.forEach(section => section.classList.toggle("open"));
//     }
// }

// ============= Send mail =============
function openMailClient() {
    window.location.href = "mailto:rakibulhasanrihad@gmail.com";
}

// ============= Last modified date display =============
const lastMod = new Date(document.lastModified);
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'Asia/Dhaka'
};
const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(lastMod);
const lastModifiedElement = document.getElementById("last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent += `${formattedDateTime} (BD Local Time, GMT+6)`;
}

// ============= Page location =============
const pageUrl = window.location.href;
const pageUrlElement = document.getElementById("page-url");
if (pageUrlElement) {
    pageUrlElement.textContent = `Current Page at: ${pageUrl}`;
}
