import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const Slider = () => {
  return (
    <Swiper className="mt-[70px] bg-pink-300 h-[300px] mySwiper" spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} navigation={true} modules={[Navigation]}>
      <SwiperSlide className="h-[40px] bg-red-300">Slide 1</SwiperSlide>
      <SwiperSlide className="h-[40px] bg-red-300">Slide 2</SwiperSlide>
      <SwiperSlide className="h-[40px] bg-red-300">Slide 3</SwiperSlide>
      <SwiperSlide className="h-[40px] bg-red-300">Slide 4</SwiperSlide>
      <SwiperSlide className="h-[40px] bg-red-300">Slide 5</SwiperSlide>
      <SwiperSlide className="h-[40px] bg-red-300">Slide 6</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
