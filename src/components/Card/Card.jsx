/* eslint-disable react/prop-types */


import LineChart from '../LineChart/LineChart';


const Card = ({ imageSrc, number, chartData, chartOptions, currency, percentage,chartHeight,chartWidth }) => {
  return (
    <div className="flex border border-current rounded-2xl items-center p-2 gap-2 mb-4 bg-[#23253b] hover:bg-[#f2bf2d] hover:text-white">
      <img className='w-[3.5rem] h-[2rem] object-contain ' src={imageSrc} alt="Currency logo" />
      <div className='flex flex-col items-center'>
        <p className='p-2'>{number}</p>
        <div>
          <LineChart height={chartHeight} width={chartWidth} data={chartData} options={chartOptions}/>
        </div>
      </div>
      <div>
        <p>{currency}</p>
        <p>{percentage}</p>
      </div>
    </div>
  );
};

export default Card;