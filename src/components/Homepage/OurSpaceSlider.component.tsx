import React, { useRef } from "react";
import styles from "./OurSpaceSlider.component.module.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
import sliderImagEleven from "../../assets/images/slider-4-11.jpg";
import sliderImagTwelve from "../../assets/images/slider-4-12.jpg";
import sliderImagThirteen from "../../assets/images/slider-4-13.jpg";

import "swiper/css";
import "swiper/css/autoplay";

const data = [
  { id: 1, imgUrl: sliderImagOne },
  { id: 2, imgUrl: sliderImagTwo },
  { id: 3, imgUrl: sliderImagThree },
  { id: 4, imgUrl: sliderImagFour },
  { id: 5, imgUrl: sliderImagFive },
  { id: 6, imgUrl: sliderImagSix },
  { id: 7, imgUrl: sliderImagSeven },
  { id: 8, imgUrl: sliderImagEight },
  { id: 9, imgUrl: sliderImagNine },
  { id: 10, imgUrl: sliderImagTen },
  { id: 11, imgUrl: sliderImagEleven },
  { id: 12, imgUrl: sliderImagTwelve },
  { id: 13, imgUrl: sliderImagThirteen },
];

const OurSpaceSliderComponent: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null); // Type for Swiper instance
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <h2 className={styles.mainTitle}>Our Space</h2>
        <p>
          At Little Lantern, we have created more than just a preschool—we've
          built a home away from home where children feel safe, inspired, and
          excited to learn.
        </p>
        <Link to="/" className={styles.exploreBtn}>
          Explore More
        </Link>
      </div>
      <div
        className={styles.rightBox}
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
      >
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          speed={8000} // Smooth auto-scroll
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Ensures autoplay pauses on hover
          }}
          modules={[Autoplay]}
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)} // Store Swiper instance
        >
          {data &&
            data.map((item) => (
              <SwiperSlide key={item.id}>
                <img className={styles.sliderImag} src={item.imgUrl} alt="" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurSpaceSliderComponent;
