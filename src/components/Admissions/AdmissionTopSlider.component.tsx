import React, { useRef } from "react";
import styles from "./AdmissionTopSlider.component.module.scss";
import admissionSlideOne from "../../assets/images/admission-slide-01.png";
import admissionSlideTwo from "../../assets/images/admission-slide-02.png";
import admissionSlideThree from "../../assets/images/admission-slide-03.png";
import admissionSlideFour from "../../assets/images/admission-slide-04.png";
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
        <button className={`${styles.navButton} ${styles.left}`} id="prevSlide">
          <img src={prevArrow} alt="" />
        </button>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={10}
          loop={false}
          speed={5000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]} // ✅ Include Navigation module
          navigation={{
            nextEl: "#nextSlide", // ✅ Connect to buttons
            prevEl: "#prevSlide",
          }}
          onSwiper={(swiper: SwiperClass) => {
            swiperRef.current = swiper;
          }}
          onReachEnd={(swiper: SwiperClass) => {
            console.log("Reached last slide. Stopping autoplay.");
            swiper.autoplay.stop();
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2.5 },
          }}
        >
          <SwiperSlide>
            <img src={admissionSlideOne} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={admissionSlideTwo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={admissionSlideThree} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={admissionSlideFour} alt="" />
          </SwiperSlide>
        </Swiper>
        <button
          className={`${styles.navButton} ${styles.right}`}
          id="nextSlide"
        >
          <img src={nextArrow} alt="" />
        </button>
      </div>

      {/* Right Navigation Button */}
    </div>
  );
};

export default AdmissionTopSliderComponent;
