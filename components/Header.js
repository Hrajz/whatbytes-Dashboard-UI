const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white flex justify-between items-center text-black p-4 border-slate-300 border-b">
      <span className="flex items-center">
        <img className="w-12 h-12 mr-2" src="/whatbytes_logo.jpeg" alt="LOGO" />
        <p className="text-2xl font-bold">WhatBytes</p>
      </span>
      <span className="flex items-center border-2 border-slate-200 p-2 rounded-md">
        <img
          className="w-8 h-8 mr-1 rounded-full"
          src="https://i.pinimg.com/236x/f9/75/81/f9758151b717582c500f0dcc33beca4f.jpg"
          alt="dp"
        />
        <p className="text-sm font-bold max-[750px]:hidden">Rahil Siddique</p>
      </span>
    </header>
  );
};

export default Header;
