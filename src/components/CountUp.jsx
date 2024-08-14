import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const CountUps = () => {
  const { t } = useTranslation();

  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <div className=" mb-44">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className=" text-center flex flex-col justify-center items-center text-black font-semibold text-3xl">
          <div className="ml-8  inline-block h-1 w-20 bg-green-400"></div>
          {t("soil_title")}
        </h1>
      </motion.div>
      <ScrollTrigger
        onEnter={() => setViewPortEntered(true)}
        onExit={() => setViewPortEntered(false)}
      >
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 row-gap-8 md:grid-cols-4">
            <div className="text-center border-blue-500 md:border-r">
              {" "}
              {viewPortEntered && (
                <>
                  <CountUp
                    className=" text-4xl font-[900] font-primary text-[#4338ca]"
                    start={0}
                    end={1460000}
                    duration={6}
                    delay={1}
                  />{" "}
                </>
              )}
              <p className="text-sm mb-2 font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Aholi
              </p>
            </div>
            <div className="text-center border-blue-500 md:border-r">
              {" "}
              {viewPortEntered && (
                <>
                  <CountUp
                    className=" text-4xl font-[900] font-primary text-[#4338ca]"
                    start={0}
                    end={21000}
                    duration={3}
                    delay={1}
                  />{" "}
                </>
              )}
              km<sup>2</sup>
              <p className="text-sm mb-2 font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Maydon
              </p>
            </div>
            <div className="text-center border-blue-500 md:border-r">
              {" "}
              {viewPortEntered && (
                <>
                  <CountUp
                    className=" text-4xl font-[900] font-primary text-[#4338ca]"
                    start={0}
                    end={735000}
                    duration={4}
                    delay={1}
                  />{" "}
                </>
              )}
              <p className="text-sm mb-2 font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Erkaklar
              </p>
            </div>
            <div className="text-center border-blue-500 md:border-r">
              {" "}
              {viewPortEntered && (
                <>
                  <CountUp
                    className=" text-4xl font-[900] font-primary text-[#4338ca]"
                    start={0}
                    end={723000}
                    duration={4}
                    delay={1}
                  />{" "}
                </>
              )}
              <p className="text-sm mb-2 font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Ayollar
              </p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default CountUps;
