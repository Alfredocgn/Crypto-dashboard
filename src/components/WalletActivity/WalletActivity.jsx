
// eslint-disable-next-line no-unused-vars
import BitcoinLogo from '../../assets/Bitcoin-Black-logo.png';
import EthereumLogo from '../../assets/Ethereum-Logo.png'
import LitecoinLogo from '../../assets/Litecoin-Logo.png'

const WalletActivity = () => {
  return (
    <div className="mt-6 bg-[#22273c] p-6 rounded-2xl">
      <h3 className="text- mb-4 text-white">Wallet Activity</h3>
      <ul className='flex flex-col gap-4'>
        <li className="flex justify-between text-xs text-white mb-4">
          <span>History</span>
          <span>See All</span>
        </li>
        <li className="flex items-center gap-2 text-xs mb-2">
          <img className='w-4 h-4 object-contain' src={BitcoinLogo} alt="Bitcoin Logo" />
          <div className='flex justify-between w-full gap-2'>
            <span>From BTC Wallet Binance</span>
            <span className="text-[#2b515a]">+$30,000</span>
            <span>08/05/2024</span>
          </div>
        </li>
        <li className="flex items-center gap-2 text-xs mb-2">
          <img className='w-4 h-4 object-contain' src={EthereumLogo} alt="Ethereum Logo" />
          <div className='flex justify-between w-full gap-2'>
            <span>To Ether Blockchain</span>
            <span className="text-[#9b3232]">-$5.23</span>
            <span>07/26/2024</span>
          </div> 
        </li>
        <li className="flex items-center gap-2 text-xs mb-2">
          <img className='w-4 h-4 object-contain' src={LitecoinLogo} alt="Litecoin Logo" />
          <div className='flex justify-between w-full gap-2'>
            <span>From LiteCoin Wallet</span>
            <span className="text-[#2b515a]">+$1,000</span>
            <span>07/03/2024</span>
          </div>
        </li>
        <li className="flex items-center gap-2 text-xs mb-2">
          <img className='w-4 h-4 object-contain' src={BitcoinLogo} alt="Bitcoin Logo" />
          <div className='flex justify-between w-full gap-2'>
            <span>From BTC Wallet</span>
            <span className="text-[#2b515a]">+$90</span>
            <span>06/10/2024</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default WalletActivity;
