import React, { useContext } from "react";
import NavContext from "../../context/navContext";
import "./header.styles.css";
import { IoIosArrowBack } from "react-icons/io";
import { PiShareDuotone } from "react-icons/pi";
import { CiSquareInfo, CiCircleRemove } from "react-icons/ci";
import { CgEditFlipH } from "react-icons/cg";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import { teniaryHandler } from "../../App";
const Header = () => {
  const { navMenu, setNavMenu } = useContext(NavContext);

  const handleToggleMenu = () => {
    setNavMenu(!navMenu);
  };
  return (
    <>
      <nav className="nav-bar">
        <span className="btn-back">
          <IoIosArrowBack color="#999" size={20} />
        </span>
        <h1 className="logo-name">Bitcoin Wallet</h1>
        <span className="btn-front" onClick={handleToggleMenu}>
          {navMenu ? (
            <BsThreeDots color="#999" size={20} />
          ) : (
            <BsThreeDotsVertical color="#999" size={20} />
          )}
        </span>
      </nav>
      {/* dot icon menu */}
      {navMenu && (
        <>
          <div
            className={`overlay ${teniaryHandler(navMenu, "fade-in")}`}
          ></div>
          <div
            className={`mobile-nav ${teniaryHandler(navMenu, "fade-in-left")}`}
          >
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

export default Header;
