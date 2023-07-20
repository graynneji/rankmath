import logo from "./logo.svg";
import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  AreaChart,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
  ReferenceDot,
} from "recharts";
import { SiBitcoinsv } from "react-icons/si";
import { CiMenuKebab } from "react-icons/ci";
import {
  IoIosArrowBack,
  IoIosNotifications,
  IoMdSettings,
} from "react-icons/io";
import {
  BiSolidWallet,
  BiSolidCompass,
  BiSolidDollarCircle,
} from "react-icons/bi";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Body />
        <Menu />
      </div>
    </>
  );
}

const Header = () => {
  return (
    <>
      <div>
        <nav className="nav-bar">
          <span className="btn-back">
            <IoIosArrowBack size={20} />
          </span>
          <h1 className="logo-name">Bitcoin Wallet</h1>
          <span className="btn-front">
            <CiMenuKebab size={20} />
          </span>
        </nav>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div>
        <Display
          coinName="Bitcoin"
          coinImage=""
          coinAmount="3.529020"
          coin="BTC"
          coinInUsd="19.153 USD"
          valueRate="-2.23%"
        />
      </div>
      <Duration />
      <Chart />
      <Purchase />
    </>
  );
};

const Display = ({ coinName, coinAmount, coin, coinInUsd, valueRate }) => {
  return (
    <>
      <div className="card-container">
        <div className="btc">
          {/* <div className="btc-icon-con"> */}
          <div>
            <SiBitcoinsv color="#f2a900" size={40} />
            {/* <ion-icon className="btc-icon" name="logo-bitcoin"></ion-icon> */}
          </div>
          <p className="coin-bitcoin">{coinName}</p>
        </div>
        <span className="coin-name">{coin}</span>
        <span className="coin-amount">{coinAmount} BTC</span>
        <p className="coin-in-usd">${coinInUsd} USD</p>
        <button className="value-rate">{valueRate}</button>
        <div className="arrow-down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 20"
            fill="currentColor"
            class="w-50 h-50"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

const Duration = () => {
  return (
    <>
      <div className="duration-container">
        <span>Day</span>
        <span>Week</span>
        <span>Month</span>
        <span>Year</span>
      </div>
    </>
  );
};

const Chart = () => {
  const data = [
    { month: "Jan", price: 4.895 },
    { month: "Jan", price: 3.67 },
    { month: "Jan", price: 5.1825 },
    { month: "Jan", price: 5.862 },
    { month: "Jan", price: 6.857 },
  ];

  return (
    <>
      <div className="chart-container">
        <AreaChart
          width={350}
          height={200}
          data={data}
          margin={{ top: 10, right: 30, left: -20, bottom: 0 }}
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
          <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} />
          <Legend verticalAlign="top" height={36} />
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
          <ReferenceDot x={4.895} y={6.857} r={6} fill="red" />
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

const Purchase = () => {
  return (
    <>
      <div className="btc-container">
        <div className="buy-btc">
          <BiSolidDollarCircle color={"#4895ef"} size={40} />
          <span className="buy-details">Buy BTC</span>
        </div>
        <div className="sell-btc">
          <BiSolidDollarCircle color={"#fb8500"} size={40} />
          <span className="sell-details">Sell BTC</span>
        </div>
      </div>
    </>
  );
};
const Menu = () => {
  return (
    <>
      <div>
        <div className="menu">
          <div>
            <BiSolidWallet size={25} />
          </div>
          <div>
            <BiSolidCompass color={"#999"} size={25} />
          </div>
          <div>
            <IoIosNotifications color={"#999"} size={25} />
          </div>
          <div>
            <IoMdSettings color={"#999"} size={25} />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
