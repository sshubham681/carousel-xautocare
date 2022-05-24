import styles from "../styles/Testimonial.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { data } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <div styles={{ overflow: "hidden" }}>
      <div className={styles.container}>
        <div className={styles.section__heading}>
          Client's <span>Testimonial</span>
        </div>
        <div className={styles.carousel__container}>
          <Swiper
            className={styles.swiper__container}
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            // loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination]}
          >
            {data.map((value) => (
              <SwiperSlide>
                <div key={value.id} className={styles.item}>
                  <img className={styles.img} src={value.imgUrl} alt="" />
                  <div className={styles.text}>
                    <p>
                      <span className={styles.icon}>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                      {value.text}
                      <span className={styles.icon}>
                        <FontAwesomeIcon icon={faQuoteRight} />
                      </span>
                    </p>
                  </div>
                  <strong className={styles.username}>{value.username}</strong>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
