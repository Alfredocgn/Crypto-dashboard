
import BitcoinLogo from '../../assets/Bitcoin-Logo.png';


const Card = () => {


  return (
    <div className="flex border border-current rounded-full items-center p-4 gap-2 bg-[#23253b] hover:bg-[#f2bf2d] hover:text-white">
      <img className='w-[3.5rem] h-[2rem]' src={BitcoinLogo} alt="Bitcoin logo" />
      <div>
        1.9678
        <div>
          Chart
        </div>
      </div>
      <div>
        <p>BTC</p>
        <p>+12.5%</p>
      </div>
    </div>
  );
};

export default Card;