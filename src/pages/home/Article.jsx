import React from "react";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import StorageIcon from "@mui/icons-material/Storage";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import HubIcon from "@mui/icons-material/Hub";

function Article({ onCardClick }) {
  return (
    <div className="article">
      <div className="article-card" onClick={() => onCardClick(0)}>
        <div className="article-card-icon">
          <BookmarksIcon className="CardIcon" style={{ fontSize: "30px" }} />
        </div>
        <h4>1 | FUNDAMENTOS</h4>
        <p>A Edge Computing é uma abordagem tecnológica...</p>
      </div>
      <div className="article-card" onClick={() => onCardClick(1)}>
        <div className="article-card-icon">
          <StorageIcon className="CardIcon" style={{ fontSize: "30px" }} />
        </div>
        <h4>2 | BENEFÍCIOS</h4>
        <p>...que oferece diversos benefícios técnicos e práticos...</p>
      </div>
      <div className="article-card" onClick={() => onCardClick(2)}>
        <div className="article-card-icon">
          <DocumentScannerIcon
            className="CardIcon"
            style={{ fontSize: "30px" }}
          />
        </div>
        <h4>3 | APLICAÇÕES</h4>
        <p>...permitindo o controle de máquinas e sistemas em tempo real...</p>
      </div>
      <div className="article-card" onClick={() => onCardClick(3)}>
        <div className="article-card-icon">
          <HubIcon className="CardIcon" style={{ fontSize: "30px" }} />
        </div>
        <h4>4 | O FUTURO</h4>
        <p>
          ...aproveitando ao máximo os benefícios dessa revolução tecnológica!
        </p>
      </div>
    </div>
  );
}

export default Article;
