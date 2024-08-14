import React from "react";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import about from "../assets/about_2.jpg";
import "../style.scss";

const Service = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className=" my-48 blob">
        {/* ===================== About Us ==================== */}
        <div className="flex lg:flex-row sm:flex-col-reverse justify-around">
          <motion.div
            id="service"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h-[600px] relative lg:mx-[32] sm:mx-0 lg:w-[35%] shadow_2 bg-about_img backdrop-sepia-0 bg-cover  bg-center rounded-t-2xl"
          >
            <div className=" flex md:w-[500px] sm:w-[310px] flex-row-reverse absolute justify-between items-center lg:left-[-50px] sm:left-[-10px] bottom-[30px]">
              <img
                src={about}
                className="pt-2 md:w-56 sm:w-36 bg-green-400 rounded-r-lg  leading-6 custom-shadow  text-white"
              />
              <div className="border-4 mr-4 border-white rounded-l-xl  w-48 h-48 bg-about_1 bg-cover bg-center"></div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-[50%] my-4 md:ml-4 text-center"
          >
            <h1 className="mt-12 mb-6 text-center text-white font-semibold text-3xl">
              {t("about_us")}
              <div className="ml-8 inline-block h-1 w-24 bg-green-400"></div>
            </h1>
            <div className=" relative md:h-96 sm:h-52">
              <iframe
                className=" absolute w-full h-full"
                src="https://www.youtube.com/embed/0SFIW-y8Fn0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Service;
