import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import FeedIcon from "@mui/icons-material/Feed";
import Twitter from "@mui/icons-material/Twitter";

const Footer = () => {
  const buttonStyle = {
    cursor: "pointer",
    margin: "2px",
    backgroundColor: "#f2581b",
    borderColor: "#6f3721",
    borderRadius: "5px",
  };

  const openLink = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div className="footer-wrap">
      <button
        style={buttonStyle}
        onClick={() => openLink("https://seusite.com")}
        title="Visitar o site"
      >
        <LanguageIcon />
      </button>

      <button
        style={buttonStyle}
        onClick={() => openLink("https://facebook.com/seufacebook")}
        title="Visitar o Facebook"
      >
        <FacebookIcon />
      </button>

      <button
        style={buttonStyle}
        onClick={() => openLink("https://suaurldecarrinho.com")}
        title="Ver carrinho de compras"
      >
        <AddShoppingCartIcon />
      </button>

      <button
        style={buttonStyle}
        onClick={() => openLink("https://instagram.com/seuinstagram")}
        title="Visitar o Instagram"
      >
        <InstagramIcon />
      </button>

      <button
        style={buttonStyle}
        onClick={() => openLink("https://youtube.com/seucanal")}
        title="Visitar o YouTube"
      >
        <YouTubeIcon />
      </button>

      <button
        style={buttonStyle}
        onClick={() => openLink("https://github.com/seugithub")}
        title="Visitar o GitHub"
      >
        <GitHubIcon />
      </button>

      <button
        style={buttonStyle}
        onClick={() => openLink("https://seufeed.com")}
        title="Ver feed"
      >
        <FeedIcon />
      </button>

      <button
        style={buttonStyle}
        onClick={() => openLink("https://twitter.com/seutwitter")}
        title="Visitar o Twitter"
      >
        <Twitter />
      </button>
    </div>
  );
};

export default Footer;
