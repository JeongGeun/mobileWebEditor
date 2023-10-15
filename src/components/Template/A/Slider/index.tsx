import styles from "./index.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const mockArray = Array.from({ length: 12 }, (_, i) => String(i + 1));

export default function Slider() {
  return (
    <div className={styles.layout}>
      <div className={styles.title}>갤러리</div>
      <div className={styles.container}>
        <div className={styles.outer}>
          <div className={styles.wrapper}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              pagination={{
                type: "progressbar",
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {mockArray.map((num) => (
                <SwiperSlide key={num} className={styles.slide}>
                  <Image
                    src={`https://www.itscard.co.kr/mobile/new_m/mcard/images/common/gallery_sample_${num.padStart(
                      2,
                      "0"
                    )}.jpg?v=0.0.1`}
                    alt="청첩장 사진1"
                    width={230}
                    height={343}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
