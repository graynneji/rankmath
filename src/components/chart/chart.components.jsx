import React, { useContext, useState } from "react";
import { AreaChart, Tooltip, Area } from "recharts";
import "./chart.styles.css";
import DropDownContext from "../../context/dropDownContext";
import { VscCircleFilled } from "react-icons/vsc";
import { teniaryHandler } from "../../App";
const Chart = () => {
  const { isOpen, setIsOpen } = useContext(DropDownContext);
  const data = {
    day: [
      { timePeriod: "01:00", price: 4.54 },
      { timePeriod: "02:00", price: 3.12 },
      { timePeriod: "03:00", price: 4.98 },
      { timePeriod: "04:00", price: 5.4 },
      { timePeriod: "05:00", price: 6.857 },
    ],
    week: [
      { day: "Mon", price: 5.654 },
      { day: "Tue", price: 4.647 },
      { day: "Wed", price: 3.3847 },
      { day: "Thu", price: 4.3847 },
      { day: "Fri", price: 5.3847 },
      { day: "Sat", price: 6.857 },
    ],
    month: [
      { month: "Jan", price: 4.895 },
      { month: "Feb", price: 3.67 },
      { month: "Mar", price: 4.1825 },
      { month: "Apr", price: 5.862 },
      { month: "May", price: 6.857 },
    ],
    year: [
      { year: "2022", price: 3.67 },
      { year: "2021", price: 4.1825 },
      { year: "2020", price: 3.862 },
      { year: "2019", price: 6.857 },
    ],
  };
  const [calData, setCalData] = useState("week");

  const handleClick = (period) => {
    setCalData(period);
  };

  const timePeriods = ["day", "week", "month", "year"];
  return (
    <>
      <div
        className={`duration-container ${teniaryHandler(isOpen, "margin-top")}`}
      >
        {timePeriods.map((period) => (
          <div
            key={period}
            className={`btn ${period === calData && "active"}`}
            onClick={() => handleClick(period)}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </div>
        ))}
      </div>
      <div className="chart-container">
        <div className="min-max">
          <div className="min-max-grid">
            <VscCircleFilled color={"#e63946"} size={12} />
            <text x={100} y={300} fontSize={16} fill="#777">
              Lower: $4.895
            </text>
          </div>
          <div className="min-max-grid">
            <VscCircleFilled color={"#52b69a"} size={12} />
            <text x={50} y={160} fontSize={16} fill="#777">
              Higher: $6.857
            </text>
          </div>
        </div>
        <AreaChart
          width={350}
          height={200}
          data={data[calData]}
          margin={{ top: 10, right: 80, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f2a900" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#f2a900" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          {/* <XAxis dataKey="month" /> */}
          {/* <YAxis /> */}

          <Tooltip />
          {/* <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} /> */}
          {/* <Legend verticalAlign="top" height={36} /> */}
          <circle cx={40} cy={155} r={3.5} fill="#f2a900" />
          <text x={50} y={160} fontSize={16} fill="#777">
            1BTC = $5.483
          </text>
          <Area
            type="monotone"
            dataKey="price"
            stroke="#f2a900"
            fillOpacity={1}
            fill="url(#colorUv)"
            dot={(props) => {
              const { cx, cy, payload } = props;
              const priceValue = payload.price;
              const radius = 6;

              if (priceValue === 6.857) {
                return (
                  <>
                    {/* Outer Circle */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={radius + 3}
                      fill="#f2a900"
                      opacity={0.3}
                    />

                    {/* Inner Circle */}
                    <circle cx={cx} cy={cy} r={radius} fill="#f2a900" />
                  </>
                );
              }
              return null;
            }}
          />
          {/* <ReferenceDot x={4.895} y={6.857} r={6} fill="red" /> */}
          {/* <ReferenceDot x={data[lowestValueIndex].month} y={data[lowestValueIndex].price} r={6} fill="green" /> */}
        </AreaChart>
        {/* <LineChart className="line-chart" width={300} height={200} data={data}>
            <XAxis dataKey="month" />
            <Line type="monotone" dataKey="price" stroke="#827" />
  
            <YAxis dataKey="price" />
          </LineChart> */}
      </div>
    </>
  );
};

export default Chart;
