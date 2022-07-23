import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  ArcElement,
  Tooltip
);

type Props = {
  data: [string, number][];
  className: string;
}

const ArtistPie = (props: Props) => {
  const entries = props.data.slice(0, 25);

  const plotData = {
    labels: entries.map(entry => entry[0]),
    datasets: [{
      data: entries.map(entry => entry[1]),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }]
  };
  return (
    <div className={props.className}>
      {plotData && <Doughnut data={plotData}></Doughnut>}
    </div>
  )
}

export default ArtistPie