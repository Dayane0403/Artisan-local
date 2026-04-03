(function () {
    const mainImage = document.getElementById("main-product-image");
    const thumbs = Array.from(document.querySelectorAll("[data-gallery-thumb]"));

    if (!mainImage || thumbs.length === 0) {
        return;
    }

    const setActiveThumb = (targetThumb) => {
        thumbs.forEach((thumb) => {
            thumb.classList.toggle("active", thumb === targetThumb);
        });
    };

    thumbs.forEach((thumb) => {
        thumb.addEventListener("click", () => {
            const nextSrc = thumb.getAttribute("data-gallery-thumb");

            if (!nextSrc) {
                return;
            }

            mainImage.src = nextSrc;
            setActiveThumb(thumb);
        });
    });
})();
