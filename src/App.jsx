import React, { useEffect, useRef, useState } from "react";
import { CookiesProvider } from "react-cookie";
import AnimatedCursor from "react-animated-cursor";

// components
import Home from "./components/home/Home";
import About from "./components/about/About";
import ParticlesBack from "./particlesBack";
import Service from "./components/Service";
import Service2 from "./components/Service2";
import Footer from "./components/Footer";
// Translation
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Service3 from "./components/Service3";
import CountUps from "./components/CountUp";
import Header from "./components/header/Header";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the loading process is completed
    }, 1000); // Adjust the timeout duration as needed
  }, []);

  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 1200) {
        headerRef.current.classList.add("bgwhite");
      } else {
        headerRef.current.classList.remove("bgwhite");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      supportedLngs: ["en", "uz", "ru"],
      fallbackLng: "en",
      detection: {
        order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
        caches: ["cookie"],
      },
      backend: {
        loadPath: "/assets/locales/{{lng}}/translation.json",
      },
      react: { useSuspense: false },
    });

  return (
    <CookiesProvider>
      <div className="" ref={headerRef}>
        {isLoading ? (
          <div className=" h-screen flex justify-center items-center ">
            <div
              aria-label="Orange and tan hamster running in a metal wheel"
              role="img"
              className="wheel-and-hamster "
            >
              <div className="wheel"></div>
              <div className="hamster">
                <div className="hamster__body">
                  <div className="hamster__head">
                    <div className="hamster__ear"></div>
                    <div className="hamster__eye"></div>
                    <div className="hamster__nose"></div>
                  </div>
                  <div className="hamster__limb hamster__limb--fr"></div>
                  <div className="hamster__limb hamster__limb--fl"></div>
                  <div className="hamster__limb hamster__limb--br"></div>
                  <div className="hamster__limb hamster__limb--bl"></div>
                  <div className="hamster__tail"></div>
                </div>
              </div>
              <div className="spoke"></div>
            </div>
          </div>
        ) : (
          <>
            <ParticlesBack />
            <div className="w-full absolute top-0">
              <Header />
              <Home />

              <div className="xl:mx-[100px]  sm:mx-[10px] ">
                <About />
              </div>
            </div>
            <div className="bg_custom pb-20  mb-20 ">
              <div className="xl:mx-[100px] sm:mx-[10px] ">
                <Service />
              </div>
              <div className="xl:mx-[100px]  sm:mx-[10px] ">
                <Service2 />
              </div>
            </div>
            <CountUps />
            <div className="xl:mx-[100px] mb-36 sm:mx-[10px] ">
              <Service3 />
            </div>
            <Footer />
            <div className="semicircle"></div>
            <AnimatedCursor
              innerSize={8}
              outerSize={10}
              color="193, 11, 114"
              outerAlpha={0.8}
              innerScale={0.9}
              outerScale={5}
              innerStyle={{}}
              outerStyle={{
                backgroundColor: "blue",
                mixBlendMode: "difference",
              }}
              clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
              ]}
            />
          </>
        )}
      </div>
    </CookiesProvider>
  );
};

export default App;
