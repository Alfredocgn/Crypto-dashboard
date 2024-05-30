

import { chartData, chartOptions } from "../../data/LineChartData";
import Card from "../Card/Card";
import LineChart from "../LineChart/LineChart";
import Navbar from "../Navbar/Navbar";
import WalletActivity from "../WalletActivity/WalletActivity";

const Dashboard = () => {

  return (
    <div className="flex flex-col w-full   m-4  ">
      <Navbar/>
      <div className="flex flex-col p-4 md:p-6 gap-4 ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl text-gray-200">Total balance $183,936</h2>
        </div>
        <Card/>
        <div className="flex items-center justify-between">
          <LineChart data={chartData} options={chartOptions} /> 
          <WalletActivity />
        </div>
      </div>
    </div>

  );
};

export default Dashboard;