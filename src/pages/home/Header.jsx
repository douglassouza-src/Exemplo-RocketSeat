import React from "react";
import azionLogo from "../../assets/img/azion.svg";
import rocketseatLogo from "../../utils/rocketseatLogo";

function Header() {
  return (
    <div className="header">
      <div className="header-logo-azion">
        <img src={azionLogo} alt="logo Azion" width="100" height="24" />
      </div>
      <div className="header-logo-rocketseat">
        <img
          src={rocketseatLogo.rocketseatLogoUrl}
          alt="logo Rocketseat"
          height="45"
        />
      </div>
    </div>
  );
}
//

export default Header;