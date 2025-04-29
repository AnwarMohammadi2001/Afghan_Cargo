import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDropRightLine } from "react-icons/ri";
import { BiHome } from "react-icons/bi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdAddIcCall } from "react-icons/md";

const GallaryHeader = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <div
      className="relative w-full h-64 md:h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/gall/gallary.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 bg-opacity-60 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Gallary</h1>

        {/* Breadcrumbs */}
        <div className="flex space-x-2 items-center text-base">
          <Link to="/" className="text-amber-400 flex items-center gap-x-2">
            <BiHome />
            Home
          </Link>
          <span>
            <RiArrowDropRightLine size={24} />{" "}
          </span>
          {pathParts.map((part, index) => (
            <span
              key={index}
              className="capitalize text-gray-300 flex items-center gap-x-2"
            >
             <HiOutlineExclamationCircle />
              {part}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallaryHeader;
