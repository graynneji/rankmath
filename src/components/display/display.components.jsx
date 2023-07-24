import "./display.styles.css";
import React, { useContext } from "react";
import DropDownContext from "../../context/dropDownContext";
import { SiBitcoinsv, SiDogecoin, SiCardano, SiLitecoin } from "react-icons/si";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FaEthereum } from "react-icons/fa";
import { teniaryHandler } from "../../App";
const Display = ({ coinName, coinAmount, coin, coinInUsd, valueRate }) => {
  const { isOpen, setIsOpen } = useContext(DropDownContext);
  const dropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="card-container">
        <div className="btc">
          <div>
            <SiBitcoinsv color="#FFB032" size={35} />
          </div>
          <p className="coin-bitcoin">{coinName}</p>
        </div>
        <span className="coin-name">{coin}</span>
        <span className="coin-amount">{coinAmount} BTC</span>
        <p className="coin-in-usd">${coinInUsd} USD</p>
        <button className="value-rate">{valueRate}</button>
        <div className="arrow-down" onClick={dropDown}>
          {isOpen ? (
            <SlArrowUp color={"#777"} size={17} />
          ) : (
            <SlArrowDown color={"#777"} size={17} />
          )}
        </div>
      </div>
      {/* drop down */}
      <ul
        className={`show-list ${teniaryHandler(
          isOpen,
          "slide-down",
          "slide-up"
        )}`}
      >
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
export default Display;
