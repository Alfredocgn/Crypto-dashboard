

import { chartData, chartOptions } from "../../data/LineChartData";
import Card from "../Card/Card";
import LineChart from "../LineChart/LineChart";
import Navbar from "../Navbar/Navbar";
import WalletActivity from "../WalletActivity/WalletActivity";
import BitcoinLogo from '../../assets/Bitcoin-Logo.png';
import EthereumLogo from '../../assets/Ethereum-Logo.png'
import LitecoinLogo from '../../assets/Litecoin-Logo.png'
import { smallChartBTCData, smallChartBTCOptions,smallChartETHData,smallChartETHOptions,smallChartLTCData,smallChartLTCOptions } from '../../data/LineChartData';

const Dashboard = () => {

  return (
    <div className="flex flex-col w-full    ">
      <Navbar/>
      <div className="flex flex-col p-4 md:p-6 gap-4 ">
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl text-gray-200">Total balance $183,936</h2>
          </div>
          <div className="flex gap-4 ">
            <Card imageSrc={BitcoinLogo} number={'1.9678'} chartData={smallChartBTCData} chartOptions={smallChartBTCOptions} currency={'BTC'} percentage={'+12.5%'} chartHeight={'6rem'} chartWidth={'10rem'} />
            <Card imageSrc={EthereumLogo} number={'22.234'} chartData={smallChartETHData} chartOptions={smallChartETHOptions} currency={'ETH'} percentage={'-5.23%'} chartHeight={'6rem'} chartWidth={'10rem'} />
            <Card imageSrc={LitecoinLogo} number={'380.234'} chartData={smallChartLTCData} chartOptions={smallChartLTCOptions} currency={'LTC'} percentage={'+39.69%'} chartHeight={'6rem'} chartWidth={'10rem'} />
          </div>
          <div className="flex items-center gap-2 justify-between">
            <LineChart height='20rem' width='55rem' data={chartData} options={chartOptions} /> 
            <WalletActivity />
          </div>

        </div>
      </div>
    </div>

  );
};

export default Dashboard;