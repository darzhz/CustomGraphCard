import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GraphPieChart from "./GraphPieChart";
import { useState } from "react";
import GraphBarChart from "./GraphBarChart";

export default function GraphHolder() {
  interface ChartDataItem {
    name: string;
    value: number;
    fill: string;
  }
  const data: ChartDataItem[] = [
    { name: "Complete", value: 600, fill: "#82ca9d" },
    { name: "Incomplete", value: 300, fill: "#ff8042" },
  ];
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };
  const [chartType, setChartType] = useState<string>("donut");

  return (
    <>
      <Card className="w-[500px] flex flex-col ">
        <CardHeader className="flex flex-col items-start">
          <CardTitle className="self-start font-semibold py-2">A Custom Beautiful Graphs</CardTitle>
          <CardDescription>
            A quick look at your sales performance for the last quarter.
          </CardDescription>
        </CardHeader>
        <CardContent className="self-center w-[500px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className={`focus:outline-none border-slate-200 rounded-md cursor-pointer transition-colors duration-200 ease-in-out  hover:border-none hover:bg-blue-300 ${
                  isToggled ? "bg-green-300" : ""
                } `}
                onClick={handleToggle}
              >
                SLA
              </Button>
              <Button
                size="sm"
                className="outline-none focus:outline-none hover:border-none"
                onClick={() =>
                  setChartType(chartType === "donut" ? "bar" : "donut")
                }
              >
                {chartType === "donut" ? <PieChartIcon /> : <BarChartIcon />}
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">Last 3 months</div>
          </div>
          {chartType === "donut" ? (
            <GraphPieChart data={data} />
          ) : (
            <GraphBarChart data={data} />
          )}
        </CardContent>
        <CardFooter>
          <p className="text-slate-400 px-2">Some Info About The graph</p>
        </CardFooter>
      </Card>
    </>
  );
}
const BarChartIcon = ({ width = 24, height = 24, color = "Black" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="12" width="4" height="8" fill={color} />
      <rect x="10" y="8" width="4" height="12" fill={color} />
      <rect x="16" y="4" width="4" height="16" fill={color} />
    </svg>
  );
};

const PieChartIcon = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.53" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
};
