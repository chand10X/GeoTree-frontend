import { useEffect, useRef } from "react";
import Swiper, { EffectCoverflow } from "swiper"; // Removed Navigation and Autoplay from imports
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface CoverflowSectionProps {
  images: {
    before1: string;
    before2: string;
    before3: string;
    before4: string;
  };
}

const CoverflowSection: React.FC<CoverflowSectionProps> = ({ images }) => {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      modules: [EffectCoverflow], // Removed Navigation and Autoplay from modules
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
        delay: 2000, // Auto swipe every 2 seconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="relative mb-8 coverflow">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {Object.values(images).map((image, index) => (
            <div className="swiper-slide" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default CoverflowSection;
