function loadImagesLazy (image) {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
}

let images = document.querySelectorAll("img[data-src]")

if ("IntersectionObserver" in window) {
    const observerLazy = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImagesLazy(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    images.forEach((image) => {
        observerLazy.observe(image);
    });
} else {
    images.forEach(loadImages);
}