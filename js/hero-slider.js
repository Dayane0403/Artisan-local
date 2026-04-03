(function () {
    const slider = document.getElementById("hero-media-slider");

    if (!slider) {
        return;
    }

    const slides = Array.from(slider.querySelectorAll(".hero-slide"));
    const dots = Array.from(document.querySelectorAll(".hero-dot"));

    if (slides.length < 2) {
        return;
    }

    const intervalMs = 6500;
    let activeIndex = 0;
    let timerId = null;

    const setVideoState = (slide, shouldPlay) => {
        const video = slide.querySelector(".hero-slide-video");

        if (!video) {
            return;
        }

        if (shouldPlay) {
            const playPromise = video.play();

            if (playPromise && typeof playPromise.catch === "function") {
                playPromise.catch(() => {
                    // Graceful fallback to image background if autoplay is blocked.
                });
            }
        } else {
            video.pause();
        }
    };

    const showSlide = (targetIndex, restartTimer = true) => {
        const normalizedIndex = (targetIndex + slides.length) % slides.length;

        slides[activeIndex].classList.remove("is-active");
        dots[activeIndex]?.classList.remove("active");
        setVideoState(slides[activeIndex], false);

        activeIndex = normalizedIndex;

        slides[activeIndex].classList.add("is-active");
        dots[activeIndex]?.classList.add("active");
        setVideoState(slides[activeIndex], true);

        if (restartTimer) {
            startAutoplay();
        }
    };

    const nextSlide = () => {
        showSlide(activeIndex + 1, false);
    };

    const startAutoplay = () => {
        if (timerId) {
            clearInterval(timerId);
        }

        timerId = setInterval(nextSlide, intervalMs);
    };

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    slider.addEventListener("mouseenter", () => {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        }
    });

    slider.addEventListener("mouseleave", () => {
        startAutoplay();
    });

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            if (timerId) {
                clearInterval(timerId);
                timerId = null;
            }
            setVideoState(slides[activeIndex], false);
            return;
        }

        setVideoState(slides[activeIndex], true);
        startAutoplay();
    });

    slides.forEach((slide, index) => {
        if (index !== activeIndex) {
            setVideoState(slide, false);
        }
    });

    setVideoState(slides[activeIndex], true);
    startAutoplay();
})();
