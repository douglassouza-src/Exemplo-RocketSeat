import React from "react";
import azionLogo from "../../assets/img/azion.svg";

function Header() {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="header-logo-azion" onClick={reloadPage}>
        <img src={azionLogo} alt="logo Azion" width="100" height="24" />
      </div>
    </div>
  );
}

export default Header;
