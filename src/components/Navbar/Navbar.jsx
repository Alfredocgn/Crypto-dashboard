import { useState } from "react";
import { IoSearchSharp,IoApps  } from "react-icons/io5";
import { BsFillBellFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import logo from '../../assets/logo-blue-meeteam.png'
import { NavbarButton } from "../NavbarButton/NavbarButton";

const Navbar = () => {

  const [selected,setSelected] = useState(null)

  return (
    <div className="flex items-center w-full justify-between  gap-4 py-12">
      <div className="flex justify-center items-center flex-grow gap-4 text-gray-200">
        <NavbarButton selected={selected} setSelected={setSelected} buttonName='Monthly' />
        <NavbarButton selected={selected} setSelected={setSelected} buttonName='Weekly' />
        <NavbarButton selected={selected} setSelected={setSelected} buttonName='Daily' />      
      </div>
    <div className="flex gap-4 items-center">
      <IoSearchSharp className="text-xl cursor-pointer"/>
      <IoApps className="text-xl cursor-pointer "/>
      <span className="flex items-center gap-1 cursor-pointer bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] rounded-full px-[0.75rem] py-[0.15rem] text-sm text-gray-200">
      <BsFillBellFill className="text-sm "/>
      8
      </span>
      <img src={logo} alt="meet-logo" className="w-[2rem] h-[2rem] rounded-full border cursor-pointer"/>
      <span className="flex items-center mr-1">
        <p className="cursor-pointer mr-1">Meet T.</p>
        <GoTriangleDown className="text-lg cursor-pointer "/>
      </span>

    </div>
  </div>
  )
}


export default Navbar;