/* eslint-disable react/jsx-key */
import Image from "next/image";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import bronzePack from "../../../../public/_events/bronze-pack.jpg";
import goldPack from "../../../../public/_events/gold-pack.jpg";
import silverPack from "../../../../public/_events/silver-pack.jpg";

SwiperCore.use([Autoplay, Pagination]);

const AdventurersPackSlide = () => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{ delay: 3000 }}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>
        <div className="relative w-full h-144 drop-shadow-xl">
          <Image
            src={goldPack}
            layout="fill"
            objectFit="contain"
            alt="Gold Pack - Adventurer's Pack"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-144 drop-shadow-xl">
          <Image
            src={silverPack}
            layout="fill"
            objectFit="contain"
            alt="Silver Pack - Adventurer's Pack"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-144 drop-shadow-xl">
          <Image
            src={bronzePack}
            layout="fill"
            objectFit="contain"
            alt="Bronze Pack - Adventurer's Pack"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default AdventurersPackSlide;
