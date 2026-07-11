import React, { useRef } from "react";
import styles from "./ActivityCarousel.component.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import sliderImagZero from "../../assets/images/activity-hub-new-01.jpg";
import sliderImagZeroOne from "../../assets/images/activity-hub-new-02.jpg";
import sliderImagZeroTwo from "../../assets/images/activity-hub-new-03.jpg";
import sliderImagZeroThree from "../../assets/images/activity-hub-new-04.jpg";
import sliderImagZeroFour from "../../assets/images/activity-hub-new-05.jpg";
import sliderImagZeroFive from "../../assets/images/activity-hub-new-06.jpg";

import "swiper/css";
import "swiper/css/autoplay";

const PrevArrowIcon = () => (
  <svg
    width="13"
    height="24"
    viewBox="0 0 13 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 22.8359L1.29334 12.1293"
      stroke="#222C5D"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 1.42188L1.29333 12.1285"
      stroke="#222C5D"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const NextArrowIcon = () => (
  <svg
    width="13"
    height="24"
    viewBox="0 0 13 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1 1.42188L11.7067 12.1285"
      stroke="#222C5D"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M1 22.8359L11.7067 12.1293"
      stroke="#222C5D"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const carouselImages = [
  {
    id: 1,
    src: sliderImagZero,
    alt: "Storytelling class at Little Lantern Activity Hub",
  },
  {
    id: 2,
    src: sliderImagZeroOne,
    alt: "Speech and drama class at Little Lantern Activity Hub",
  },
  {
    id: 3,
    src: sliderImagZeroTwo,
    alt: "Ballet class at Little Lantern Activity Hub",
  },
  {
    id: 4,
    src: sliderImagZeroThree,
    alt: "Vocal music class at Little Lantern Activity Hub",
  },
  {
    id: 5,
    src: sliderImagZeroFour,
    alt: "Art and craft class at Little Lantern Activity Hub",
  },
  {
    id: 6,
    src: sliderImagZeroFive,
    alt: "Kathak dance class at Little Lantern Activity Hub",
  },
];

const ActivityCarouselComponent: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className={styles.container}>
      <div
        className={styles.carouselBox}
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
      >
        <button
          className={`${styles.navButton} ${styles.left}`}
          id="activityPrevSlide"
          aria-label="Previous slide"
        >
          <PrevArrowIcon />
        </button>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={16}
          loop
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: "#activityNextSlide",
            prevEl: "#activityPrevSlide",
          }}
          onSwiper={(swiper: SwiperClass) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {carouselImages.map((item) => (
            <SwiperSlide className={styles.slide} key={item.id}>
              <img
                className={styles.slideImg}
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`${styles.navButton} ${styles.right}`}
          id="activityNextSlide"
          aria-label="Next slide"
        >
          <NextArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default ActivityCarouselComponent;
