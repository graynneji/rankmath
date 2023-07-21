import logo from "./logo.svg";
import "./App.css";
import React, { useState, useContext } from "react";
import { DropDownProvider } from "./context/dropDownContext";
import { NavProvider } from "./context/navContext";
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
import { CgEditFlipH } from "react-icons/cg";
import { SiBitcoinsv, SiDogecoin, SiCardano, SiLitecoin } from "react-icons/si";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { CiMenuKebab, CiSquareInfo, CiCircleRemove } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";
import { PiDotsThreeOutlineLight, PiShareDuotone } from "react-icons/pi";
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
import NavContext from "./context/navContext";
import DropDownContext from "./context/dropDownContext";
function App() {
  return (
    <>
      <NavProvider>
        <div className="container">
          <Header />
          <Body />
          <Menu />
        </div>
      </NavProvider>
    </>
  );
}

const Header = () => {
  const { navMenu, setNavMenu } = useContext(NavContext);

  const handleToggleMenu = () => {
    setNavMenu(!navMenu);
  };
  return (
    <>
      <nav className="nav-bar">
        <span className="btn-back">
          <IoIosArrowBack size={20} />
        </span>
        <h1 className="logo-name">Bitcoin Wallet</h1>
        <span className="btn-front" onClick={handleToggleMenu}>
          {navMenu ? (
            <PiDotsThreeOutlineLight size={20} />
          ) : (
            <CiMenuKebab size={20} />
          )}
        </span>
      </nav>
      {/* dot icon menu */}
      {navMenu && (
        <>
          <div className="overlay"></div>
          <div className="mobile-nav">
            <ul className="mobile-list">
              <li className="hc-border-bottom">
                <span>Edit</span>
                <CgEditFlipH size={20} />
              </li>
              <li className="hc-border-bottom">
                <span>Courier info</span>
                <CiSquareInfo size={20} />
              </li>
              <li className="hc-border-bottom">
                <span>Share</span>
                <PiShareDuotone size={20} />
              </li>
              <li className="hc-border-bottom">
                <span>Remove</span>
                <CiCircleRemove size={20} />
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

const Body = () => {
  return (
    <>
      <DropDownProvider>
        <Display
          coinName="Bitcoin"
          coinImage=""
          coinAmount="3.529020"
          coin="BTC"
          coinInUsd="19.153"
          valueRate="-2.23%"
        />

        {/* <Duration /> */}
        <Chart />
        <Purchase />
      </DropDownProvider>
    </>
  );
};

const Display = ({ coinName, coinAmount, coin, coinInUsd, valueRate }) => {
  const { isOpen, setIsOpen } = useContext(DropDownContext);
  const dropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="card-container">
        <div className="btc">
          {/* <div className="btc-icon-con"> */}
          <div>
            <SiBitcoinsv color="#f2a900" size={35} />
            {/* <ion-icon className="btc-icon" name="logo-bitcoin"></ion-icon> */}
          </div>
          <p className="coin-bitcoin">{coinName}</p>
        </div>
        <span className="coin-name">{coin}</span>
        <span className="coin-amount">{coinAmount} BTC</span>
        <p className="coin-in-usd">${coinInUsd} USD</p>
        <button className="value-rate">{valueRate}</button>
        <div className="arrow-down" onClick={dropDown}>
          {isOpen ? (
            <SlArrowUp color={"#777"} size={15} />
          ) : (
            <SlArrowDown color={"#777"} size={15} />
          )}
        </div>
      </div>
      {/* drop down */}
      <ul className={` ${isOpen ? "show-list" : "drop-down-list"}`}>
        <li className="alt-coin">
          <SiDogecoin color={"#e1b303"} size={15} />
          <p>Dogecoin</p>
          <span className="grid-coin" style={{ color: "#52b69a" }}>
            +2.60%
          </span>
        </li>
        <li className="alt-coin">
          <FaEthereum color={"#303030"} size={15} />
          <p>Ethereum</p>
          <span className="grid-coin" style={{ color: "#52b69a" }}>
            +0.14%
          </span>
        </li>
        <li className="alt-coin">
          <SiCardano color={"#2a71d0"} size={15} />
          <p>Cardano</p>
          <span className="grid-coin" style={{ color: "#e63946" }}>
            -4.01%
          </span>
        </li>
        <li className="alt-coin">
          <SiLitecoin color={"#00aeff"} size={15} />
          <p>Litecoin</p>
          <span className="grid-coin" style={{ color: "#52b69a" }}>
            +0.87%
          </span>
        </li>
      </ul>
    </>
  );
};

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
      <div className={`duration-container ${isOpen && "margin-top"}`}>
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
            keys={Math.random()}
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

const Purchase = () => {
  return (
    <>
      <div className="btc-container">
        <div className="buy-sel-btc">
          <BiSolidDollarCircle color={"#4895ef"} size={40} />
          <span className="buy-sell-details">Buy BTC</span>
        </div>
        <div className="buy-sel-btc">
          <BiSolidDollarCircle color={"#fb8500"} size={40} />
          <span className="buy-sell-details">Sell BTC</span>
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
            <BiSolidWallet color={"#6c757d"} size={25} />
          </div>
          <div>
            <BiSolidCompass color={"#adb5bd"} size={25} />
          </div>
          <div>
            <IoIosNotifications color={"#adb5bd"} size={25} />
          </div>
          <div>
            <IoMdSettings color={"#adb5bd"} size={25} />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
