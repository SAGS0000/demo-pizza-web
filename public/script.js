// window.addEventListener('scroll', setScrollVar);
// window.addEventListener('resize', setScrollVar);

// function setScrollVar() {
//     const htmlElement = document.documentElement;

//     const percentOfScreenHeightScrolled =
//         htmlElement.scrollTop / htmlElement.clientHeight;
//     console.log(
//         Math.min(
//             percentOfScreenHeightScrolled * 100, 100
//         )
//     );
//     htmlElement.style.setProperty('--scroll',
//         Math.min(
//             percentOfScreenHeightScrolled * 100, 100
//         )
//     );
// }
// setScrollVar();

// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// function handleScroll(divElement) {
//     if (isInViewport(divElement)) {
//         console.log('nagshow');
//         divElement.classList.add("show");
//         window.removeEventListener("scroll", () => handleScroll(divElement)); // Remove the scroll event listener for this specific div
//     }
// }

// const divElements = document.querySelectorAll(".animate-on-scroll");
// console.log(divElements);

// divElements.forEach((divElement) => {
//     window.addEventListener("scroll", () => handleScroll(divElement));
// });



