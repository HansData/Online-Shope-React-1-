import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const ButtonLike = () => {
  return (
    <button className=" h-[46px] min-w-[46px] bg-[#ECF4FF] flex justify-center items-center rounded-md">
      <FontAwesomeIcon icon={faHeart} className="text-[#0D63F3] text-[20px]" />
    </button>
  );
};

export default ButtonLike;
