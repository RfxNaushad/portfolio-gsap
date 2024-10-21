import { useEffect } from "react";
import { gsap } from "gsap";

export default function GalleryCarousel() {
  useEffect(() => {
    const slides = document.querySelectorAll("#gallery-carousel a");
    const prevButton = document.querySelector(".navigation__button_prev");
    const nextButton = document.querySelector(".navigation__button_next");

    const numSlides = slides.length;
    const wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);
    let index = 0;

    // Set initial positions for the slides
    gsap.set(slides, {
      xPercent: (i) => i * 100,
    });

    // Infinite looping animation
    const animation = gsap.to(slides, {
      xPercent: "+=" + numSlides * 100,
      duration: 1,
      ease: "none",
      paused: true,
      repeat: -1,
      modifiers: {
        xPercent: wrapX,
      },
    });

    prevButton.addEventListener("click", () => animateSlides(1));
    nextButton.addEventListener("click", () => animateSlides(-1));

    function animateSlides(direction) {
      index += direction;
      const current = gsap.utils.wrap(0, numSlides)(index);
      gsap.to(slides, {
        xPercent: -100 * current,
        duration: 0.5,
      });
    }

    // Clean up event listeners on unmount
    return () => {
      prevButton.removeEventListener("click", () => animateSlides(1));
      nextButton.removeEventListener("click", () => animateSlides(-1));
    };
  }, []);

  return (
    <div>
      <div id="gallery-carousel" className="relative w-full h-[422px] overflow-hidden flex">
        <a href="#" className="flex-shrink-0 w-1/3 h-full px-4">
          <img src="https://i.ibb.co/HC6SgP8/01.jpg" alt="" className="h-full w-full object-cover" />
        </a>
        <a href="#" className="flex-shrink-0 w-1/3 h-full px-4">
          <img src="https://i.ibb.co/sCHycDz/02.jpg" alt="" className="h-full w-full object-cover" />
        </a>
        <a href="#" className="flex-shrink-0 w-1/3 h-full px-4">
          <img src="https://i.ibb.co/ss53B9D/03.jpg" alt="" className="h-full w-full object-cover" />
        </a>
        <a href="#" className="flex-shrink-0 w-1/3 h-full px-4">
          <img src="https://i.ibb.co/LZhnvLr/04.jpg" alt="" className="h-full w-full object-cover" />
        </a>
        <a href="#" className="flex-shrink-0 w-1/3 h-full px-4">
          <img src="https://i.ibb.co/rbsvsZK/05.jpg" alt="" className="h-full w-full object-cover" />
        </a>
        <a href="#" className="flex-shrink-0 w-1/3 h-full px-4">
          <img src="https://i.ibb.co/P448Zv8/06.jpg" alt="" className="h-full w-full object-cover" />
        </a>
        <a href="#" className="flex-shrink-0 w-1/3 h-full px-4">
          <img src="https://i.ibb.co/VT59X3x/07.jpg" alt="" className="h-full w-full object-cover" />
        </a>
      </div>

      <div className="navigation mt-4 flex justify-center space-x-4">
        <button type="button" className="navigation__button_prev bg-gray-800 text-white px-4 py-2 rounded">
          Prev
        </button>
        <button type="button" className="navigation__button_next bg-gray-800 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
