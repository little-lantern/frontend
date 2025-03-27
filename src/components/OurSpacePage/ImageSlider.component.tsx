import React, { useRef } from "react";
import styles from "./ImageSlider.component.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper"; // Import Swiper type
import sliderImagOne from "../../assets/images/slider-4-1.jpg";
import sliderImagTwo from "../../assets/images/slider-4-2.jpg";
import sliderImagThree from "../../assets/images/slider-4-3.jpg";
import sliderImagFour from "../../assets/images/slider-4-4.jpg";
import sliderImagFive from "../../assets/images/slider-4-5.jpg";
import sliderImagSix from "../../assets/images/slider-4-6.jpg";
import sliderImagSeven from "../../assets/images/slider-4-7.jpg";
import sliderImagEight from "../../assets/images/slider-4-8.jpg";
import sliderImagNine from "../../assets/images/slider-4-9.jpg";
import sliderImagTen from "../../assets/images/slider-4-10.jpg";
// import sliderImagEleven from "../../assets/images/slider-4-11.jpg";
// import sliderImagTwelve from "../../assets/images/slider-4-12.jpg";
// import sliderImagThirteen from "../../assets/images/slider-4-13.jpg";
import nextArrow from "../../assets/images/next-arrow.svg";
import prevArrow from "../../assets/images/prev-arrow.svg";

import "swiper/css";
import "swiper/css/autoplay";

const data = [
  { id: 1, imgUrl: sliderImagOne, caption: "Harmony Hub" },
  { id: 2, imgUrl: sliderImagTwo, caption: "Colour Splash Studio" },
  { id: 3, imgUrl: sliderImagThree, caption: "Wonder Workshop" },
  { id: 4, imgUrl: sliderImagFour, caption: "Story Nest" },
  { id: 5, imgUrl: sliderImagFive, caption: "Innovator’s Lab" },
  { id: 6, imgUrl: sliderImagSix, caption: "Adventure Arena" },
  { id: 7, imgUrl: sliderImagSeven, caption: "Classroom" },
  { id: 8, imgUrl: sliderImagEight, caption: "Sand pit" },
  { id: 9, imgUrl: sliderImagNine, caption: "Kitchen Garden" },
  { id: 10, imgUrl: sliderImagTen, caption: "Playground" },
];

const ImageSliderComponent: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null); // Type for Swiper instance
  return (
    <div className={styles.container}>
      <div
        className={styles.imageSliderBox}
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
      >
        <button className={`${styles.navButton} ${styles.left}`} id="prevSlide">
          <img src={prevArrow} alt="" />
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
          modules={[Autoplay, Navigation]} // ✅ Include Navigation module
          navigation={{
            nextEl: "#nextSlide", // ✅ Connect to buttons
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
          {data &&
            data.map((item) => (
              <SwiperSlide className={styles.box} key={item.id}>
                <img className={styles.sliderImg} src={item.imgUrl} alt="" />
                {/* <div className={styles.caption}>{item.caption}</div> */}
              </SwiperSlide>
            ))}
        </Swiper>
        <button
          className={`${styles.navButton} ${styles.right}`}
          id="nextSlide"
        >
          <img src={nextArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ImageSliderComponent;
