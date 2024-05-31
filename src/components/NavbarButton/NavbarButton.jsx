/* eslint-disable react/prop-types */




export const NavbarButton = ({buttonName,selected,setSelected}) => {
  return (
    <button className={` px-[0.75rem] py-[0.15rem] rounded-full text-xs bg-[#151226]   ${selected === buttonName ? 'bg-gradient-to-br from-[#2d3cf0] to-[#127ff8] text-white rounded-xl px-[0.75rem] py-[0.15rem]' : ''}`} onClick={() => setSelected(buttonName)}>{buttonName}</button>
  )
}
