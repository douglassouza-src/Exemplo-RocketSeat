import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import FeedIcon from "@mui/icons-material/Feed";
import Twitter from "@mui/icons-material/Twitter";

const SocialMedia = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div className="social-wrap">
      <button
        onClick={() => openLink("https://www.azion.com")}
        title="Visitar o site"
      >
        <LanguageIcon style={{ fontSize: "15px" }} />
      </button>
      <button
        onClick={() => openLink("https://www.azion.com/pt-br/contate-vendas/")}
        title="Contrate nossos serviços"
      >
        <AddShoppingCartIcon style={{ fontSize: "15px" }} />
      </button>
      <button
        onClick={() => openLink("https://www.youtube.com/aziontech")}
        title="Visitar o YouTube"
      >
        <YouTubeIcon style={{ fontSize: "15px" }} />
      </button>
      <button
        onClick={() => openLink("https://www.instagram.com/aziontech")}
        title="Visitar o Instagram"
      >
        <InstagramIcon style={{ fontSize: "15px" }} />
      </button>
      <button
        onClick={() => openLink("https://www.facebook.com/aziontech")}
        title="Visitar o Facebook"
      >
        <FacebookIcon style={{ fontSize: "15px" }} />
      </button>
      <button
        onClick={() => openLink("https://twitter.com/aziontech")}
        title="Visitar o Twitter"
      >
        <Twitter style={{ fontSize: "15px" }} />
      </button>
      <button
        onClick={() => openLink("https://github.com/aziontech")}
        title="Visitar o GitHub"
      >
        <GitHubIcon style={{ fontSize: "15px" }} />
      </button>
      <button
        onClick={() => openLink("https://www.azion.com/pt-br/blog/")}
        title="Visitar nosso Blog"
      >
        <FeedIcon style={{ fontSize: "15px" }} />
      </button>
    </div>
  );
};

export default SocialMedia;
