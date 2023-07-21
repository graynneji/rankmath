import "./menu.styles.css";
import { BiSolidWallet, BiSolidCompass } from "react-icons/bi";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
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

export default Menu;
