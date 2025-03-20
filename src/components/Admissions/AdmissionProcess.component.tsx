import React from "react";
import styles from "./AdmissionProcess.component.module.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Import Navigation styles
import "swiper/css";
import "swiper/css/autoplay";
import useIsMobile from "../../hooks/useIsMobile";

const AdmissionProcessComponent: React.FC = () => {
  const isMobile = useIsMobile();
  const spaceBetween = isMobile ? 30 : 0;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>Admission Process</h2>
        <div className={styles.description}>
          Join our warm and nurturing preschool, where learning begins with joy
          and curiosity. Give your child the best start in a caring and engaging
          environment!
        </div>
        <h3 className={styles.subTitle}>Apply in 3 simple steps</h3>
        <div className={styles.stepsWrapper}>
          <Swiper
            slidesPerView={3}
            spaceBetween={spaceBetween}
            loop={false}
            speed={4000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className={styles.stepBox}>
                <h4>01</h4>
                <h5>
                  Fill Out an Online <br className={styles.mobileHide} />{" "}
                  Enquiry Form
                </h5>
                <p className={styles.details}>
                  Begin your journey with us by filling out the online enquiry
                  form on our website. This helps us understand your
                  requirements and gather basic details about your child.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.stepBox}>
                <h4>02</h4>
                <h5>
                  Visit <br className={styles.mobileHide} /> Little Lantern
                </h5>
                <p className={styles.details}>
                  Once we receive your enquiry, we’ll contact you to book a
                  convenient slot for a school tour and a meeting with our Head
                  of School & Director. This is a great opportunity to
                  experience our facilities, understand our philosophy, and
                  address any questions you may have.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.stepBox}>
                <h4>03</h4>
                <h5>
                  Admission <br className={styles.mobileHide} /> Confirmation
                </h5>
                <p className={styles.details}>
                  After the tour and meeting, you will receive an admission
                  decision. Upon confirmation, upload the required documents and
                  deposit the fees to finalize your child’s admission to Little
                  Lantern.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.btnBox}>
          <Link to="/">Apply Now</Link>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcessComponent;
