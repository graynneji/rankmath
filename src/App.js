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
import { BiSolidWallet, BiSolidCompass } from "react-icons/bi";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <h1 className="logo-name">Bitcoin Wallet</h1>
          <span className="btn-front">
            <ion-icon name="more"></ion-icon>
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
            <SiBitcoinsv color="#000" size={40} />
            {/* <ion-icon className="btc-icon" name="logo-bitcoin"></ion-icon> */}
          </div>
          <p className="coin-symbol">{coinName}</p>
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
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
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
            stroke="#8884d8"
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
                      fill="#8884d8"
                      opacity={0.3}
                    />

                    {/* Inner Circle */}
                    <circle cx={cx} cy={cy} r={radius} fill="#8884d8" />
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
          <svg
            className="buy-sell-btc"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 "
          >
            <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="buy-details">Buy BTC</span>
        </div>
        <div className="sell-btc">
          <svg
            className="buy-sell-btc"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
              clip-rule="evenodd"
            />
          </svg>
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
            <BiSolidWallet size={30} />
          </div>
          <div>
            <BiSolidCompass color={"#444"} size={30} />
          </div>
          <div>
            <ion-icon name="notifications"></ion-icon>
          </div>
          <div>
            <ion-icon name="settings"></ion-icon>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
