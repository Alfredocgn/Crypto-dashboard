/* eslint-disable react/prop-types */




export const WalletItem = ({icon,title,profit,date}) => {

  const profitColor = profit.startsWith('+') ? 'text-green-500' : 'text-red-500'; 

  return (
    <li className="flex items-center gap-2 text-xs mb-2">
    <img className='w-4 h-4 object-contain' src={icon} alt="Crypto Logo" />
    <div className='flex justify-between w-full gap-2'>
      <span>{title}</span>
      <span className={profitColor}>{profit}</span>
      <span>{date}</span>
    </div>
  </li>
  )
}

