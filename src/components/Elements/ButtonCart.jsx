import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ButtonCart = () => {
  return (
    <button className="h-[46px] min-w-[46px] bg-[#ECF4FF] flex justify-center items-center rounded-md">
      <FontAwesomeIcon icon={faCartShopping} className="text-[#0D63F3] text-[20px]" />
    </button>
  );
};

export default ButtonCart;
