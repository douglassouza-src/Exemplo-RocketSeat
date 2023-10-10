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
  const openLink = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div className="footer-wrap">
      <button
        onClick={() => openLink("https://www.azion.com")}
        title="Visitar o site"
      >
        <LanguageIcon />
      </button>
      <button
        onClick={() => openLink("https://www.azion.com/pt-br/contate-vendas/")}
        title="Contrate nossos serviços"
      >
        <AddShoppingCartIcon />
      </button>
      <button
        onClick={() => openLink("https://www.youtube.com/aziontech")}
        title="Visitar o YouTube"
      >
        <YouTubeIcon />
      </button>
      <button
        onClick={() => openLink("https://www.instagram.com/aziontech")}
        title="Visitar o Instagram"
      >
        <InstagramIcon />
      </button>
      <button
        onClick={() => openLink("https://www.facebook.com/aziontech")}
        title="Visitar o Facebook"
      >
        <FacebookIcon />
      </button>
      <button
        onClick={() => openLink("https://twitter.com/aziontech")}
        title="Visitar o Twitter"
      >
        <Twitter />
      </button>
      <button
        onClick={() => openLink("https://github.com/aziontech")}
        title="Visitar o GitHub"
      >
        <GitHubIcon />
      </button>
      <button
        onClick={() => openLink("https://www.azion.com/pt-br/blog/")}
        title="Visitar nosso Blog"
      >
        <FeedIcon />
      </button>
    </div>
  );
};

export default Footer;
