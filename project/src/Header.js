//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart, FaGlobeEurope } from "react-icons/fa";
import { AiFillPieChart } from 'react-icons/ai';

import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p><FaGlobeEurope />{menuCollapse ? "Logo" : "Logo Brand"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<AiFillPieChart />}>
                Dashbaord
              </MenuItem>
              <MenuItem icon={<FiHome />}>Tactics Vault</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Teams</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Schedule Generator</MenuItem>
              <MenuItem icon={<BiCog />}>Weekly Traning Plan</MenuItem>
              <MenuItem icon={<BiCog />}>Team Metrics</MenuItem>
              <MenuItem icon={<BiCog />}>Customizations Phalu</MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
