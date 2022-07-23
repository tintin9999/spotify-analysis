import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);

type Props = {
  data: {
    [k: number | string]: number
  }
  sort?: boolean;
  className: string;
}


const YearGraph = (props: Props) => {
  const keys = Object.keys(props.data);
  if (props.sort) {
    keys.sort();
  }
  const plotData = {
    labels: keys,
    datasets: [{
      data: keys.map(k => props.data[k]),
      backgroundColor: '#1db954'
    }]
  };

  return (
    <div className={props.className}>
      {plotData && <Bar data={plotData}></Bar>}
    </div>
  )
}

export default YearGraph