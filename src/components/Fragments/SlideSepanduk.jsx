import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <Swiper
      className="mt-[70px] bg-blue-300 mySwiper"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log('oke')}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}>
      <SwiperSlide key="slider1">
        <div className="p-4 bg-pink-300 flex justify-center">
          <img className="inline-block w-[80%]" src="/aset/slide_benner-1.svg" alt="benner_image" />
        </div>
      </SwiperSlide>
      <SwiperSlide key="slider2">
        <div className="p-4 bg-pink-300 flex justify-center">
          <img className="inline-block w-[80%]" src="/aset/slide_benner-2.svg" alt="benner_img" />
        </div>
      </SwiperSlide>
      <SwiperSlide key="slider3">
        <div className="p-4 bg-pink-300 flex justify-center">
          <img className="inline-block w-[80%]" src="/aset/slide_benner-3.svg" alt="benner_img" />
        </div>
      </SwiperSlide>
      <SwiperSlide key="slider4">
        <div className="p-4 bg-pink-300 flex justify-center">
          <img className="inline-block w-[80%]" src="/aset/slide_benner-1.svg" alt="benner_img" />
        </div>
      </SwiperSlide>
      <SwiperSlide key="slider5">
        <div className="p-4 bg-pink-300 flex justify-center">
          <img className="inline-block w-[80%]" src="/aset/slide_benner-2.svg" alt="benner_img" />
        </div>
      </SwiperSlide>
      <SwiperSlide key="slider6">
        <div className="p-4 bg-pink-300 flex justify-center">
          <img className="inline-block w-[80%]" src="/aset/slide_benner-3.svg" alt="benner_img" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
