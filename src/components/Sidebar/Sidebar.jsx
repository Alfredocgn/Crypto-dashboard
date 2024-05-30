

import { BiCalendarStar,BiWallet,BiFile,BiEnvelope,BiChart,BiFlag,BiChat,BiExit,BiPlusCircle } from "react-icons/bi";
import { IoSettingsOutline,IoHelpCircleOutline } from "react-icons/io5";

import title from '../../assets/Logo-meeteam.png'
import { useState } from "react";

const Sidebar = () => {
  const [selected,setSelected] = useState(null)



  return (

    <div className="w-80  bg-[#1d1f32] hidden md:block rounded-xl m-4 border border-gray-600">
      <div className="p-4">
      <div className="flex items-center mb-8 p-4 ">
        <div className="text-xl font-bold"><img src={title} alt="meeteam-title" /></div>
      </div>
      <nav>
        <ul >
          <li className="flex items-center text-lg mt-4">
            Dashboard Overview
          </li>
          <li className={`flex items-center mt-4 hover:text-white hover:cursor-pointer justify-between  ${selected === 'activity' ? 'bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] text-white rounded-xl px-[0.5rem] py-[0.15rem]' : ''}`} onClick={() => setSelected('activity')}>
            <span className="flex"><BiCalendarStar className="mr-2 text-2xl" /> Activity</span>
            <BiPlusCircle className="text-xl"/>
          </li>
          <li className={`flex items-center mt-4 hover:text-white hover:cursor-pointer  ${selected === 'deposit' ? 'bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] text-white rounded-xl px-[0.5rem] py-[0.15rem]' : ''}`} onClick={() => setSelected('deposit')}>
            <BiWallet className="mr-2 text-2xl" /> Deposit          
          </li>
          <li className={`flex items-center mt-4 hover:text-white hover:cursor-pointer justify-between ${selected === 'news' ? 'bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] text-white rounded-xl px-[0.5rem] py-[0.15rem]' : ''}`} onClick={() => setSelected('news')}>
          <span className="flex"><BiFile className="mr-2 text-2xl" /> News</span>
            <span className="rounded-full  w-6 h-6 bg-[#00b37d] flex items-center justify-center text-white text-xs">1</span>
          </li>
          <li className={`flex items-center mt-4 hover:text-white hover:cursor-pointer justify-between  ${selected === 'messages' ? 'bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] text-white rounded-xl px-[0.5rem] py-[0.15rem]' : ''}`} onClick={() => setSelected('messages')}>
            <span className="flex"><BiEnvelope className="mr-2 text-2xl" /> Messages</span>
            <span className="rounded-full  w-6 h-6 bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] flex items-center justify-center text-white text-xs">2</span>
          </li>
          <li className={`flex items-center mt-4 hover:text-white hover:cursor-pointer  ${selected === 'analytics' ? 'bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] text-white rounded-xl px-[0.5rem] py-[0.15rem]' : ''}`} onClick={() => setSelected('analytics')}>
            <BiChart  className="mr-2 text-2xl" /> Analytics
          </li>
          <li className={`flex items-center mt-4 hover:text-white hover:cursor-pointer  ${selected === 'announcements' ? 'bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] text-white rounded-xl px-[0.5rem] py-[0.15rem]' : ''}`} onClick={() => setSelected('announcements')}>
            <BiFlag className="mr-2 text-2xl" /> Announcements
          </li>
        </ul>
      </nav>
      </div>
          <div className="border-b w-full border-gray-600 "></div>
          <div className="p-4">
            <nav>
              <ul >
                <li className="flex items-center text-lg ">
                  Support
                </li>
                <li className={`flex items-center mt-4 hover:text-white hover:cursor-pointer  ${selected === 'settings' ? 'bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] text-white rounded-xl px-[0.5rem] py-[0.15rem]' : ''}`} onClick={() => setSelected('settings')}>
                  <IoSettingsOutline className="mr-2 text-2xl" /> Settings
                </li>
                <li className={`flex items-center mt-4 hover:text-white hover:cursor-pointer  ${selected === 'help' ? 'bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] text-white rounded-xl px-[0.5rem] py-[0.15rem]' : ''}`} onClick={() => setSelected('help')}>
                  <IoHelpCircleOutline className="mr-2 text-2xl" /> Help!
                </li>
                <li className={`flex items-center mt-4 hover:text-white hover:cursor-pointer  ${selected === 'chat' ? 'bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] text-white rounded-xl px-[0.5rem] py-[0.15rem]' : ''}`} onClick={() => setSelected('chat')}>
                  <BiChat className="mr-2 text-2xl" /> Chat
                </li>
              </ul>
            </nav>
          </div>
          <div className="border-b w-full border-gray-600 "></div>
          <div className="p-4">
            <nav>
              <ul>
                <li className="flex items-center justify-between text-white text-xs">Meeteam 2024* <BiExit className="ml-2 text-2xl hover:cursor-pointer"/></li>
              </ul>
            </nav>
          </div>
    </div>
    
  );
};

export default Sidebar;