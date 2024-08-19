const Header = () => {
  return (
    <div className="flex justify-between p-5 border border-b-2 fixed panel w-screen top-0 ">
      <i className="fa-solid fa-bars text-2xl"></i>
      <img src="/images/logo.svg" alt="" />
      <div className="button_gp ">
        <button className="px-4 py-2 border text-cyan-200">
          {" "}
          Sign up/Login
        </button>
        <button className="px-4 py-2 border text-cyan-200 transition hover:text-white">
          Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
