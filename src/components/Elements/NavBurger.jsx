const NavBurger = (props) => {
  const { lebar = 'w-6', tinggi = 'h-5', warna = 'bg-black' } = props;
  const garisSilang = () => {};
  return (
    <button onClick={garisSilang} type="button" className={`${lebar} ${tinggi} flex flex-col justify-center gap-1 content-between`}>
      <span className={`block w-full h-1 ${warna} rounded-md`}></span>
      <span className={`block w-full h-1 ${warna} rounded-md`}></span>
      <span className={`block w-full h-1 ${warna} rounded-md`}></span>
    </button>
  );
};

export default NavBurger;
