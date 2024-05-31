/* eslint-disable react/prop-types */

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
const LineChart = ({ data, options, size }) => {

  const sizes = {
    small: {width:'10rem',height:'6rem'},
    big:{width:'55rem',height:'20rem'}
  }

  const {width,height} = sizes[size] || size.small

  return (
    <div  style={{ width, height }} >
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;