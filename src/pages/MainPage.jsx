import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Categories from "../components/Home/Categories";

const data = [
  {
    id: 1,
    image:
      "https://brostore.uz/cdn/shop/files/Banner_m4_3840x2160_crop_center.png?v=1716617179",
  },
  {
    id: 2,
    image:
      "https://brostore.uz/cdn/shop/files/macboom_pro_1_3840x2160_crop_center.png?v=1713942232",
  },
  {
    id: 3,
    image:
      "https://brostore.uz/cdn/shop/files/rrr_1d7b9d14-9133-4d1f-bcb5-b8d111f473b6_3840x2160_crop_center.png?v=1713941350",
  },
  {
    id: 4,
    image:
      "https://brostore.uz/cdn/shop/files/Banner_Ru_3_3840x2160_crop_center.png?v=1708594542",
  },
];

export default function MainPage() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className=" container-css pb-4">
      <div>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img className=" w-100 h-100" src={item.image} alt="" />
              </SwiperSlide>
              
            );
          })}
        </Swiper>
      </div>

      <div>
        <Categories/>
      </div>
    </div>
  );
}
