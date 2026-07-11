import React, { useRef } from "react";
import styles from "./AdmissionTopSlider.component.module.scss";
import admissionSlideOne from "../../assets/images/admission-new-01.jpg";
import admissionSlideTwo from "../../assets/images/admission-new-02.jpg";
import admissionSlideThree from "../../assets/images/admission-new-03.jpg";
import admissionSlideFour from "../../assets/images/admission-new-04.jpg";
import nextArrow from "../../assets/images/next-arrow.svg";
import prevArrow from "../../assets/images/prev-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Import Navigation styles

const AdmissionTopSliderComponent: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className={styles.container}>
      {/* Left Navigation Button */}

      <div
        className={styles.sliderBox}
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
      >
        <button
          className={`${styles.navButton} ${styles.left}`}
          id="prevSlide"
          aria-label="Previous slide"
        >
          <img src={prevArrow} alt="" aria-hidden="true" />
        </button>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          loop={false}
          speed={5000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: "#nextSlide",
            prevEl: "#prevSlide",
          }}
          onSwiper={(swiper: SwiperClass) => {
            swiperRef.current = swiper;
          }}
          onReachEnd={(swiper: SwiperClass) => {
            swiper.autoplay.stop();
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
          }}
        >
          <SwiperSlide>
            <img
              src={admissionSlideOne}
              alt="Children playing at Little Lantern admissions open day"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={admissionSlideTwo}
              alt="Little Lantern campus and learning environment"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={admissionSlideThree}
              alt="Early learning activities at Little Lantern"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={admissionSlideFour}
              alt="Happy children at Little Lantern preschool"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
        <button
          className={`${styles.navButton} ${styles.right}`}
          id="nextSlide"
          aria-label="Next slide"
        >
          <img src={nextArrow} alt="" aria-hidden="true" />
        </button>
      </div>

      {/* Right Navigation Button */}
    </div>
  );
};

export default AdmissionTopSliderComponent;
