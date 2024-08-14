import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { images } from "../image_data";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";
const Service3 = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ===================== Our Soil ==================== */}{" "}
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        className=" my-20"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className=" mt-4 text-center flex flex-col justify-center items-center text-black font-semibold text-3xl">
          <div className="ml-8  inline-block h-1 w-20 bg-green-400"></div>
          {t("partner")}
        </h1>{" "}
      </motion.div>
      <div className="flex justify-between lg:flex-row sm:flex-col">
        {images.map((i, index) => (
          <img key={index} className="my-2" src={i} alt="" />
        ))}
      </div>
    </>
  );
};

export default Service3;
