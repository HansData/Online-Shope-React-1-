import ButtonCart from '../Elements/ButtonCart';
import ButtonKategory from '../Elements/ButtonKategory';
import ButtonLike from '../Elements/ButtonLike';
import ButtonLogin from '../Elements/ButtonLogin';
import Logo from '../Elements/Logo';
import InputSearch from '../Elements/InputSearch';
import NavBurger from '../Elements/NavBurger';
const Navbar = () => {
  return (
    <div className="bg-white/70 p-4 flex justify-evenly items-center w-full lg:h-[70px] fixed top-0 z-50">
      <div className="lg:flex hidden lg:justify-evenly lg:items-center lg:w-full">
        <Logo />
        <ButtonKategory />
        <InputSearch type="search" placeholder="masukkan pencarian..." identitas="search" />
        <div className="flex gap-3">
          <ButtonLike />
          <ButtonCart />
        </div>
        <ButtonLogin />
      </div>
      <div className=" lg:hidden flex flex-col justify-evenly items-center w-full gap-4">
        <div className="flex items-center w-full">
          <NavBurger />
          <div className="mx-auto">
            <Logo />
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 w-full">
          <InputSearch type="search" placeholder="masukkan pencarian..." identitas="search" />
          <ButtonCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
