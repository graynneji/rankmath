import "./menu.styles.css";
import { BiSolidWallet, BiSolidCompass } from "react-icons/bi";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
const Menu = () => {
  return (
    <>
      <div>
        <div className="menu">
          <div>
            <BiSolidWallet color={"#4C5968"} size={25} />
          </div>
          <div>
            <BiSolidCompass color={"#AEB8C4"} size={25} />
          </div>
          <div>
            <IoIosNotifications color={"#AEB8C4"} size={25} />
          </div>
          <div>
            <IoMdSettings color={"#AEB8C4"} size={25} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
