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
          <IoIosArrowBack color="#AEB8C4" size={20} />
        </span>
        <h1 className="logo-name">Bitcoin Wallet</h1>
        <span className="btn-front" onClick={handleToggleMenu}>
          {navMenu ? (
            <BsThreeDots color="#fff" size={20} />
          ) : (
            <BsThreeDotsVertical color="#AEB8C4" size={20} />
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
                <span className="lists">Edit</span>
                <CgEditFlipH style={{ gridColumn: -1 }} size={20} />
              </li>
              <li className="hc-border-bottom">
                <div className="lists">Courier info</div>
                {/* <div className="p"> */}
                <CiSquareInfo style={{ gridColumn: -1 }} size={20} />
                {/* </div> */}
              </li>
              <li className="hc-border-bottom">
                <span className="lists">Share</span>
                <PiShareDuotone style={{ gridColumn: -1 }} size={20} />
              </li>
              <li className="hc-border-bottom" onClick={handleToggleMenu}>
                <span className="lists">Remove</span>
                <CiCircleRemove style={{ gridColumn: -1 }} size={20} />
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
