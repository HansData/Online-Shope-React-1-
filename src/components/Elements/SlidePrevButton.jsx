import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()} className="bg-slate-300 h-full w-full">
      <FontAwesomeIcon className="w-full h-full" icon={faCircleChevronLeft} />
    </button>
  );
};

export default SlidePrevButton;
