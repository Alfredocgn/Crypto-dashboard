
// eslint-disable-next-line no-unused-vars
import BitcoinLogo from '../../assets/Bitcoin-Black-logo.png';
import EthereumLogo from '../../assets/Ethereum.png'
import LitecoinLogo from '../../assets/Litecoin3.jpg'

const WalletActivity = () => {
  return (
    <div className="mt-6 bg-gray-800 p-6 rounded-2xl">
      <h3 className="text- mb-4 text-white">Wallet Activity</h3>
      <ul className='flex flex-col gap-4'>
        <li className="flex justify-between gap-6 text-xs text-white mb-4">
          <span>History</span>
          <span>See All</span>
        </li>
        <li className="flex  items-center gap-2 text-[0.50rem] mb-2">
          <img className='w-4 h-4' src={BitcoinLogo} alt="Bitcoin Logo" />
          <div className='flex gap-2 items-center'>
            <span className="mr-4">From BTC Wallet Binance</span>
            <span className="text-[#2b515a]">+$30,000</span>
            <span>08/05/2024</span>
          </div>
        </li>
        <li className="flex  items-center gap-2 text-[0.50rem] mb-2">
          <img className='w-4 h-4' src={EthereumLogo} alt="Ethereum Logo" />
          <div className='flex gap-4 items-center '>
            <span className="mr-4">To Ether Blockchain</span>
            <span className="text-[#9b3232]">-$5,23</span>
            <span>07/06/2024</span>
          </div> 
        </li>
        <li className="flex  items-center gap-2 text-[0.50rem] mb-2">
          <img className='w-4 h-4' src={LitecoinLogo} alt="Litecoin Logo" />
          <div className='flex gap-4 items-center n'>
            <span className="mr-4">From LiteCoin Wallet</span>
            <span className="text-[#2b515a]">+$1000</span>
            <span>07/03/2024</span>
          </div>
        </li>
        <li className="flex  items-center gap-2 text-[0.50rem] mb-2">
          <img className='w-4 h-4' src={BitcoinLogo} alt="Bitcoin Logo" />
          <div className='flex gap-6 items-center'>
            <span className="mr-4">From BTC Wallet </span>
            <span className="text-[#2b515a]">+$90</span>
            <span>06/10/2024</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WalletActivity;
