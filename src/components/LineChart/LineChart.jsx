
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// eslint-disable-next-line react/prop-types
const LineChart = ({ data, options }) => {
  return (
    <div className=" w-[60rem] h-[20rem]">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;