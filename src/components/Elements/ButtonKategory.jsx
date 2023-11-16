import NavBurger from './NavBurger';
const ButtonKategory = () => {
  return (
    <div className="flex justify-center items-center gap-4 bg-blue-300 p-3 h-[46px] px-4 text-white rounded-md font-semibold bg-gradient-to-r from-[#4D5EF6]/80 to-[#F64D4D]/80">
      <NavBurger tinggi="h-5" lebar="w-6" warna="bg-slate-200" />
      <p>Category</p>
    </div>
  );
};

export default ButtonKategory;
