// Detect event when wheel scroll down
var prevScrollPos = window.pageYOffset;
addEventListener("wheel", (event) => { });

// onwheel = (event) => {
//     var currentScrollPos = window.pageYOffset;
//     var scrollPosition = window.scrollY;

//     const headerBrand = document.getElementById("header-brand");
//     const navbar = document.getElementById("wrap-navbar");
    
//     if (prevScrollPos > currentScrollPos) {
//         // Cuộn lên
//         if (scrollPosition < 150) {
//             headerBrand.style.display = "block";
//             navbar.style.position = "relative";
//         }
//     } else {
//         // Cuộn xuống
//         if (scrollPosition > 40) {
//             headerBrand.style.display = "none";
//             navbar.style.position = "fixed";
//         }
//     }
//     prevScrollPos = currentScrollPos;
// };
