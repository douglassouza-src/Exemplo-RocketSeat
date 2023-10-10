import React from "react";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import StorageIcon from "@mui/icons-material/Storage";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import HubIcon from "@mui/icons-material/Hub";

function Article() {
  return (
    <div className="article">
      <a
        href="https://www.azion.com/en/documentation/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="article-card-icon">
          <BookmarksIcon className="CardIcon" style={{ fontSize: "30px" }} />
        </div>
        <h4>FUNDAMENTOS</h4>
        <p>
          Besides providing structure, it allows interactions to occur with the.
        </p>
      </a>
      <a href="https://medium.com/aziontech" target="_blank" rel="noreferrer">
        <div className="article-card-icon">
          <StorageIcon className="CardIcon" style={{ fontSize: "30px" }} />
        </div>
        <h4>APLICAÇÕES</h4>
        <p>
          Dive deep into our platform's use cases on Medium and join a
          community.
        </p>
      </a>
      <a href="https://twitter.com/aziontech" target="_blank" rel="noreferrer">
        <div className="article-card-icon">
          <DocumentScannerIcon
            className="CardIcon"
            style={{ fontSize: "30px" }}
          />
        </div>
        <h4>DESAFIOS</h4>
        <p>
          Explore our features in-depth and find out what's new on our platform.
        </p>
      </a>
      <a href="https://discord.gg/Yp9N7RMVZy" target="_blank" rel="noreferrer">
        <div className="article-card-icon">
          <HubIcon className="CardIcon" style={{ fontSize: "30px" }} />
        </div>
        <h4>TECNOLOGIAS</h4>
        <p>A space for developers to connect, get involved and collaborate.</p>
      </a>
    </div>
  );
}

export default Article;
