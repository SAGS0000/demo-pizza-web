// useScrollAnimation.js
import { useEffect } from 'react';

function isInViewport(el, offset = 0) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= -offset &&
        rect.left >= -offset &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
    );
}

function useScrollAnimation(className) {
    useEffect(() => {
        function handleScroll() {
            const divElements = document.querySelectorAll(`.${className}`);
            console.log(divElements.length);
            divElements.forEach((divElement) => {
                if (divElement.classList.contains("show")) {
                    return;
                }
                if (isInViewport(divElement, 100)) { // You can adjust the offset here if needed
                    divElement.classList.add("show");
                }
            });
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [className]);
}

export default useScrollAnimation;


// add function to component