import styles from "./index.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller } from "swiper/modules";
import { useEffect, useState } from "react";
import type SwiperCore from "swiper";
import cs from "classnames/bind";

const cx = cs.bind(styles);
const mockArray = Array.from({ length: 12 }, (_, i) => String(i + 1));

interface SliderProps {
  onSectionClick: VoidFunction;
}

export default function Slider({ onSectionClick }: SliderProps) {
  const [firstControlledSwiper, setFirstControlledSwiper] =
    useState<SwiperCore>();
  const [secondControlledSwiper, setSecondControlledSwiper] =
    useState<SwiperCore>();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.layout} onClick={onSectionClick}>
      <div className={styles.title}>갤러리</div>
      <div className={styles.container}>
        <div className={styles.outer}>
          <div className={styles.wrapper}>
            <Swiper
              modules={[Pagination, Controller]}
              spaceBetween={5}
              pagination={{
                type: "progressbar",
              }}
              onSwiper={setFirstControlledSwiper}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
              controller={{ control: secondControlledSwiper }}
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
          <div className={styles.inner}>
            <Swiper
              modules={[Controller]}
              slidesPerView={5}
              spaceBetween={5}
              onSwiper={setSecondControlledSwiper}
              controller={{ control: firstControlledSwiper }}
              onClick={(swiper) => {
                firstControlledSwiper?.slideTo(swiper.clickedIndex);
                const elem = document.getElementsByClassName(
                  "swiper-wrapper"
                )[1] as HTMLDivElement;

                if (swiper.clickedIndex <= 2) {
                  elem.style.setProperty(
                    "transform",
                    "translate3d(0px,0px,0px)"
                  );
                }
              }}
              allowTouchMove={false}
              centeredSlides
              centeredSlidesBounds
              containerModifierClass="swiper-init"
            >
              {mockArray.map((num, index) => (
                <SwiperSlide key={`mini_${num}`} className={styles.slide}>
                  <div
                    className={cx({
                      blur: index !== activeIndex,
                    })}
                  >
                    <Image
                      src={`https://www.itscard.co.kr/mobile/new_m/mcard/images/common/gallery_sample_${num.padStart(
                        2,
                        "0"
                      )}.jpg?v=0.0.1`}
                      alt="청첩장 사진1"
                      width={64}
                      height={64}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
