import React  from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import { useTranslation } from "react-i18next";
import "./cursor.css";
function Home() {


	const { t } = useTranslation();

	return (
		<>
			<div
				id="home"
				className="semicircle overflow-hidden">
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
					delay: 2500,
					disableOnInteraction: false,
					}}
					pagination={{
					clickable: true,
					}}
					// navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className=" bg-hero bg-fixed bg-cover  h-screen w-full  text-white flex items-center justify-center">
							<div className="hero_title absolute top-[80vh] lg:left-20 sm:left-3">
								<div className="mt-5 mx-1 h-2 w-12 bg-green-400"></div>
								<span className="mt-5 mx-1">{t("hero_title")}</span>
							</div>
							<div className=" relative shadowglow  lg:h-[70px] sm:h-[40px] lg:w-[320px] sm:w-[200px] rounded-r-[15%] rounded-l-[15%] bg-[#10ee56d0]"></div>
							<span className=" absolute lg:text-3xl sm:text-xl font-semibold">
							{t("hotel").toLocaleUpperCase()}
							</span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-fixed bg-zomin bg-cover bg-bottom  h-screen w-full  text-white flex items-center justify-center">
							<div className="hero_title absolute top-[80vh] lg:left-20 sm:left-3">
								<div className="mt-5 mx-1 h-2 w-12 bg-green-400"></div>
								<span className="mt-5 mx-1">{t("hero_title")}</span>
							</div>

							<div className=" relative shadowglow  lg:h-[70px] sm:h-[40px] lg:w-[360px] sm:w-[250px] rounded-r-[15%] rounded-l-[15%] bg-[#10ee56d0]"></div>
							<span className=" absolute lg:text-3xl sm:text-xl font-semibold">
							{t("zomin").toLocaleUpperCase()}
							</span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-fixed bg-bakhmal  bg-top lg:bg-contain sm:bg-cover  h-screen w-full  text-white flex items-center justify-center">
							<div className="hero_title absolute top-[80vh] lg:left-20 sm:left-3">
								<div className="mt-5 mx-1 h-2 w-12 bg-green-400"></div>
								<span className="mt-5 mx-1">{t("hero_title")}</span>
							</div>

							<div className=" relative shadowglow  lg:h-[70px] sm:h-[40px] lg:w-[420px] sm:w-[270px] rounded-r-[15%] rounded-l-[15%] bg-[#10ee56d0]"></div>
							<span className=" absolute lg:text-3xl sm:text-xl font-semibold">
							{t("baxmal").toLocaleUpperCase()}
							</span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-fixed bg-tog  bg-top bg-cover  h-screen w-full  text-white flex items-center justify-center">
							<div className="hero_title absolute top-[80vh] lg:left-20 sm:left-3">
								<div className="mt-5 mx-1 h-2 w-12 bg-green-400"></div>
								<span className="mt-5 mx-1">{t("hero_title")}</span>
							</div>

							<div className=" relative shadowglow   lg:h-[70px] sm:h-[40px] lg:w-[420px] sm:w-[230px] rounded-r-[15%] rounded-l-[15%] bg-[#10ee56d0]"></div>
							<span className=" absolute lg:text-3xl sm:text-xl font-semibold">
							{t("tog").toLocaleUpperCase()}
							</span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-fixed bg-aydarkol  bg-top bg-cover  h-screen w-full  text-white flex items-center justify-center">
							<div className="hero_title absolute top-[80vh] lg:left-20 sm:left-3">
								<div className="mt-5 mx-1 h-2 w-12 bg-green-400"></div>
								<span className="mt-5 mx-1">{t("hero_title")}</span>
							</div>

							<div className=" relative shadowglow   lg:h-[70px] sm:h-[40px] lg:w-[420px] sm:w-[200px] rounded-r-[15%] rounded-l-[15%] bg-[#10ee56d0]"></div>
							<span className=" absolute lg:text-3xl sm:text-xl font-semibold">
							{t("partner").toLocaleUpperCase()}
							</span>
						</div>
					</SwiperSlide>
					
				</Swiper>
			</div>
		</>
	);
}

export default Home;
