import React, { useState } from "react";
import BlackLogo from "../assets/BlackLogo.svg";
import Home from "../assets/Home.svg";
import MovieProjector from "../assets/Movie Projector.svg";
import TvShow from "../assets/TV Show.svg";
import Calendar from "../assets/Calendar.svg";
import Logout from "../assets/Logout.svg";
import Logo from "../assets/Logo.svg";
import Menu from "../assets/Menu.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-full lg:w-52 w-full lg:py-10 lg:rounded-r-[62px] lg:border">
      <div className="mx-auto text-center max-lg:hidden">
        <img src={BlackLogo} alt="logo" className="px-8 mb-12" />
        <nav className="nav grid grid-rows-4 mx-auto">
          <div className="flex items-center gap-x-2.5 px-8 py-6">
            <img src={Home} alt="home" />
            <p className="text-lg font-semibold text-gray-500">Home</p>
          </div>
          <div className="bg-pink-100 border-r-8 border-r-pink-700">
            <div className="px-8 py-7 flex items-center gap-x-2.5">
              <img src={MovieProjector} alt="movies" />
              <p className="text-lg font-bold text-pink-800">Movies</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2.5 px-8 py-6">
            <img src={TvShow} alt="tv series" />
            <p className="text-lg font-semibold text-gray-500">TV Series</p>
          </div>
          <div className="flex items-center gap-x-2.5 px-8 py-6">
            <img src={Calendar} alt="calendar" />
            <p className="text-lg font-semibold text-gray-500">Upcoming</p>
          </div>
        </nav>
        <div className="text-start border mx-4 bg-pink-100 border-pink-500 my-7 pt-10 pb-4 px-3 rounded-2xl">
          <p className="font-bold text-gray-600">
            Play movie quizes and earn free tickets
          </p>
          <p className="my-2.5 text-sm font-semibold text-gray-600">
            50k people are playing now
          </p>
          <button className="mx-auto flex items-center mt-2 rounded-full px-3 py-1 text-center bg-pink-300 text-pink-700 font-semibold">
            start playing
          </button>
        </div>
        <div className="flex items-center gap-x-2.5 px-8 my-6">
          <img src={Logout} alt="logout" />
          <p className="text-[20px] font-semibold text-gray-500">Log out</p>
        </div>
      </div>
      <header className="lg:hidden w-full bg-gray-800 top-0 z-50 py-4">
        <div className="w-[80%] mx-auto flex items-center justify-between">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <img src={Menu} alt="menu" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </header>
      <div
        className={`h-full lg:hidden flex flex-col fixed overflow-scroll inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="text-gray-600 text-left text-3xl font-semibold ml-2 mt-4"
        >
          &#x2715;
        </button>
        <div className="mx-auto text-center">
          <nav className="nav grid grid-rows-4 mx-auto">
            <div className="flex items-center gap-x-2.5 px-8 py-6">
              <img src={Home} alt="home" />
              <p className="text-lg font-semibold text-gray-500">Home</p>
            </div>
            <div className="bg-pink-100 border-l-8 border-l-pink-700">
              <div className="px-8 py-7 flex items-center gap-x-2.5">
                <img src={MovieProjector} alt="movies" />
                <p className="text-lg font-bold text-pink-800">Movies</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2.5 px-8 py-6">
              <img src={TvShow} alt="tv series" />
              <p className="text-lg font-semibold text-gray-500">TV Series</p>
            </div>
            <div className="flex items-center gap-x-2.5 px-8 py-6">
              <img src={Calendar} alt="calendar" />
              <p className="text-lg font-semibold text-gray-500">Upcoming</p>
            </div>
          </nav>
          <div className="text-start border mx-4 bg-pink-100 border-pink-500 my-7 pt-10 pb-4 px-3 rounded-2xl">
            <p className="font-bold text-gray-600">
              Play movie quizes and earn free tickets
            </p>
            <p className="my-2.5 text-sm font-semibold text-gray-600">
              50k people are playing now
            </p>
            <button className="mx-auto flex items-center mt-2 rounded-full px-3 py-1 text-center bg-pink-300 text-pink-700 font-semibold">
              start playing
            </button>
          </div>
          <div className="flex items-center gap-x-2.5 px-8 my-6">
            <img src={Logout} alt="logout" />
            <p className="text-[20px] font-semibold text-gray-500">Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
