import "./purchase.styles.css";
import { BiSolidDollarCircle } from "react-icons/bi";
const Purchase = () => {
  return (
    <>
      <div className="btc-container">
        <div className="buy-sel-btc">
          <BiSolidDollarCircle color={"#2f7bf5"} size={40} />
          <span className="buy-sell-details">Buy BTC</span>
        </div>
        <div className="buy-sel-btc">
          <BiSolidDollarCircle color={"#f82b78"} size={40} />
          <span className="buy-sell-details">Sell BTC</span>
        </div>
      </div>
    </>
  );
};
export default Purchase;
