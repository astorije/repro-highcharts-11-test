import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  accessibility: { enabled: false },
  chart: {
    type: "spline",
  },
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

export function App() {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
