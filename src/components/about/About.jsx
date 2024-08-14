import React from "react";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic5 from "../../assets/pic5.jpg";
import pic6 from "../../assets/pic6.jpg";
import pic7 from "../../assets/pic7.jpg";
import pic8 from "../../assets/pic8.jpg";
import pic10 from "../../assets/pic10.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className=" " id="about">
      <div className="semicircle2 mt-10 text-white lg:mx-10 sm:mx-2 px-5 py-4 lg:text-2xl text-center bg-black">
        {t("hero_desc")}
      </div>
      <Swiper
        spaceBetween={30}
        // direction="vertical"
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mt-10 "
      >
        <SwiperSlide>
          <div className="md:h-[160vh] md:overflow-hidden sm:overflow-y-auto sm:h-[140vh] ">
            {/* ===================== Company ==================== */}
            <div>
              <img
                src={pic2}
                className="float-right pic1 lg:w-[640px] sm:w-[300px]"
                alt="image"
              />
              <div
                dangerouslySetInnerHTML={{ __html: t("director_title") }}
                className="leading-5 lg:text-xl sm:text-[17px]"
              ></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-[160vh] md:overflow-hidden sm:overflow-y-auto sm:h-[140vh]">
            {/* ===================== Company ==================== */}
            <div>
              <img
                src={pic3}
                className="float-right pic2 lg:w-[640px] sm:w-[300px]"
                alt="image"
              />
              <div
                dangerouslySetInnerHTML={{ __html: t("director_title1") }}
                className="leading-5 lg:text-xl sm:text-[17px]"
              ></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-[160vh] md:overflow-hidden sm:overflow-y-auto sm:h-[140vh]">
            {/* ===================== Company ==================== */}
            <div>
              <img
                src={pic6}
                className="float-right pic3 lg:w-[640px] sm:w-[300px]"
                alt="image"
              />
              <div
                dangerouslySetInnerHTML={{ __html: t("director_title6") }}
                className="leading-5 lg:text-xl sm:text-[17px]"
              ></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-[160vh] md:overflow-hidden sm:overflow-y-auto sm:h-[140vh]">
            {/* ===================== Company ==================== */}
            <div>
              <img
                src={pic7}
                className="float-right pic1 lg:w-[640px] sm:w-[300px]"
                alt="image"
              />
              <div
                dangerouslySetInnerHTML={{ __html: t("director_title2") }}
                className="leading-5 lg:text-xl sm:text-[17px]"
              ></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-[160vh] md:overflow-hidden sm:overflow-y-auto sm:h-[140vh]">
            {/* ===================== Company ==================== */}
            <div>
              <img
                src={pic8}
                className="float-left pic3 lg:w-[640px] sm:w-[300px] md:mx-4"
                alt="image"
              />
              <div
                dangerouslySetInnerHTML={{ __html: t("director_title3") }}
                className="leading-5  lg:text-xl sm:text-[17px]"
              ></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-[160vh] md:overflow-hidden sm:overflow-y-auto sm:h-[140vh]">
            {/* ===================== Company ==================== */}
            <div>
              <img
                src={pic5}
                className="float-right pic2 lg:w-[640px] sm:w-[300px]"
                alt="image"
              />
              <div
                dangerouslySetInnerHTML={{ __html: t("director_title4") }}
                className="leading-5 lg:text-xl sm:text-[17px]"
              ></div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" md:h-[160vh] md:overflow-hidden sm:overflow-y-auto  sm:h-[140vh]">
            {/* ===================== Company ==================== */}
            <div>
              <img
                src={pic10}
                className="float-left pic3 lg:w-[640px] md:mx-4 sm:w-[300px]"
                alt="image"
              />
              <div
                dangerouslySetInnerHTML={{ __html: t("director_title7") }}
                className="leading-5 lg:text-xl sm:text-[17px]"
              ></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;
