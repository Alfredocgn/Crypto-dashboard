
// eslint-disable-next-line no-unused-vars
import BitcoinLogo from '../../assets/Bitcoin-Black-logo.png';
import EthereumLogo from '../../assets/Ethereum-Logo.png'
import LitecoinLogo from '../../assets/Litecoin-Logo.png'
import { WalletItem } from '../WalletItem/WalletItem';

const WalletActivity = () => {
  return (
    <div className="mt-6 bg-[#22273c] p-6 rounded-2xl">
      <h3 className="text- mb-4 text-white">Wallet Activity</h3>
      <ul className='flex flex-col gap-4'>
        <li className="flex justify-between text-xs text-white mb-4">
          <span>History</span>
          <span>See All</span>
        </li>
        <WalletItem icon={BitcoinLogo} title='From BTC Wallet Binance' profit='+$30,000' date='08/05/2024' />
        <WalletItem icon={EthereumLogo} title='To Ether Blockchain' profit='-5.93' date='08/05/2024' />
        <WalletItem icon={LitecoinLogo} title='From LiteCoin Wallet' profit='+$1,000' date='07/03/2024' />
        <WalletItem icon={BitcoinLogo} title='From BTC Wallet' profit='+$90' date='06/10/2024' />
      </ul>
    </div>
  );
};
export default WalletActivity;
