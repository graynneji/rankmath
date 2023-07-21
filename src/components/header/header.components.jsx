import React, { useContext } from "react";
import NavContext from "../../context/navContext";
import "./header.styles.css";
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsThreeOutlineLight, PiShareDuotone } from "react-icons/pi";
import { CiMenuKebab, CiSquareInfo, CiCircleRemove } from "react-icons/ci";
import { CgEditFlipH } from "react-icons/cg";
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

export default Header;
