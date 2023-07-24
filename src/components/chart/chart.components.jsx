import React, { useContext, useState } from "react";

import { AreaChart, Tooltip, Area, ResponsiveContainer } from "recharts";
import "./chart.styles.css";
import DropDownContext from "../../context/dropDownContext";
import { VscCircleFilled } from "react-icons/vsc";
import { teniaryHandler } from "../../App";
const Chart = () => {
  const { isOpen, setIsOpen } = useContext(DropDownContext);
  const data = {
    day: [
      { timePeriod: "01:00", price: 4.74 },
      { timePeriod: "02:00", price: 4.26 },
      { timePeriod: "03:00", price: 5.98 },
      { timePeriod: "04:00", price: 5.42 },
      { timePeriod: "05:00", price: 6.857 },
    ],
    week: [
      { day: "Mon", price: 4.454 },
      { day: "Tue", price: 4.047 },
      { day: "Wed", price: 4.9847 },
      { day: "Thu", price: 4.5847 },
      { day: "Fri", price: 5.5847 },
      { day: "Sat", price: 6.857 },
    ],
    month: [
      { month: "Jan", price: 4.895 },
      { month: "Feb", price: 4.47 },
      { month: "Mar", price: 5.5825 },
      { month: "Apr", price: 5.862 },
      { month: "May", price: 6.857 },
    ],
    year: [
      { year: "2022", price: 4.97 },
      { year: "2021", price: 4.6 },
      { year: "2020", price: 5.862 },
      { year: "2019", price: 5.457 },
      { year: "2018", price: 6.857 },
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
            <VscCircleFilled color={"#EF2755"} size={12} />
            <text x={100} y={300} fontSize={12} fill="#B5B7B8">
              Lower: $4.895
            </text>
          </div>
          <div className="min-max-grid">
            <VscCircleFilled color={"#1EBF6F"} size={12} />
            <text x={50} y={160} fontSize={12} fill="#B5B7B8">
              Higher: $6.857
            </text>
          </div>
        </div>
        <ResponsiveContainer width="107%" height={130}>
          <AreaChart
            width={370}
            height={120}
            data={data[calData]}
            margin={{ top: 10, right: 55, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFC843" stopOpacity={0.5} />
                {/* <stop offset="5%" stopColor="#FF8F17" stopOpacity={0.3} /> */}
                <stop offset="65%" stopColor="#FF8F17" stopOpacity={1} />
              </linearGradient>

              {/* gradien for circle */}
              <linearGradient id="circleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF921A" stopOpacity={1} />
                <stop offset="95%" stopColor="#FF921A" stopOpacity={0.3} />
              </linearGradient>
            </defs>

            <Tooltip />
            {/* <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} /> */}
            {/* <Legend verticalAlign="top" height={36} /> */}
            {/* Outer cirlce */}
            <circle cx={25} cy={110} r={5.2} fill={"#FF8F17"} opacity={0.3} />
            {/* Inner circle */}
            <circle cx={25} cy={110} r={3.5} fill="url(#circleGradient)" />

            <text
              x={40}
              y={114}
              fontWeight={600}
              fontSize={12.84}
              fill="#4C5968"
            >
              1BTC = $5.483
            </text>

            <Area
              type="monotone"
              dataKey="price"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              fillOpacity={0.1}
              // fill="#FFF7EE"
              fill="url(#lineGradient)"
              dot={(props) => {
                const { cx, cy, payload } = props;
                const priceValue = payload.price;
                const radius = 5;

                if (priceValue === 6.857) {
                  return (
                    <>
                      {/* Outer Circle */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={radius + 3}
                        fill="#FF8F17"
                        opacity={0.2}
                      />

                      {/* Inner Circle */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={radius}
                        fill="url(#circleGradient)"
                      />
                    </>
                  );
                }
                return null;
              }}
            />
            {/* <ReferenceDot x={4.895} y={6.857} r={6} fill="red" /> */}
            {/* <ReferenceDot x={data[lowestValueIndex].month} y={data[lowestValueIndex].price} r={6} fill="green" /> */}
          </AreaChart>
        </ResponsiveContainer>
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
