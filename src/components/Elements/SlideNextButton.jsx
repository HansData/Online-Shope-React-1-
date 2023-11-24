import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()} className="bg-slate-300 h-10 w-10 m-4 inline-block">
      <FontAwesomeIcon icon={faCircleChevronRight} />
    </button>
  );
};

export default SlideNextButton;
