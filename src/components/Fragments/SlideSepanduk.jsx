import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideNextButton from '../Elements/SlideNextButton';
import SlidePrevButton from '../Elements/SlidePrevButton';

const Slider = () => {
  return (
    <>
      <Swiper
        className="mt-[70px] bg-blue-300 mySwiper relative flex justify-center"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log('oke')}
        navigation={false}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, A11y]}>
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
        <div className="absolute bg-red-500 h-10 w-10 z-50 left-0 top-[45%]">
          <SlidePrevButton />
        </div>
        <div>
          <SlideNextButton />
        </div>
      </Swiper>
      {/* <button className="bg-slate-300 p-4 rounded-md">ini button</button> */}
    </>
  );
};

export default Slider;
