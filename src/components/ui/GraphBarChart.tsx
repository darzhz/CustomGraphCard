import { useCallback, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

interface ChartDataItem{
    name:string;
    value:number;
    fill:string;
  }
  interface GraphChartProps {
    data: ChartDataItem[];
  }

const GraphBarChart:React.FC<GraphChartProps> = ({data}) => {
  const [activeIndex, setActiveIndex] = useState<any>(null);

  const onBarEnter = useCallback(
    (_: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const onBarClick = useCallback(
    (data: any, index: any) => {
      alert(`You clicked on ${data.name}`);
      // You can handle other actions here, such as updating state, routing, etc.
    },
    []
  );

  const onBarLeave = useCallback(() => {
    setActiveIndex(null);
  }, []);

  return (
    <ResponsiveContainer height={400} >
      <BarChart
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="value"
          onMouseEnter={onBarEnter}
          onMouseLeave={onBarLeave}
          onClick={onBarClick}
        >
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphBarChart;
