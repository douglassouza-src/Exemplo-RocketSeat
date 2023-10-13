import React, { useState } from "react";
import "./index.css";
import Header from "./home/Header";
import Content from "./home/Content";
import Article from "./home/Article";
import Footer from "./home/Footer";
import Modal from "./home/Modal";
import {
  AlternateContent1,
  AlternateContent2,
  AlternateContent3,
  AlternateContent4,
} from "./home/ArticleContent";
import FooterCopyright from "./home/FooterCopyright";

function App() {
  const [showAlternateContent, setShowAlternateContent] = useState([
    false,
    false,
    false,
    false,
  ]);

  const toggleAlternateContent = (index) => {
    const newShowAlternateContent = [...showAlternateContent];
    newShowAlternateContent[index] = !showAlternateContent[index];
    setShowAlternateContent(newShowAlternateContent);
  };

  return (
    <section>
      <Header />
      <Content />
      <Article onCardClick={(index) => toggleAlternateContent(index)} />
      {showAlternateContent[0] && <AlternateContent1 />}
      {showAlternateContent[1] && <AlternateContent2 />}
      {showAlternateContent[2] && <AlternateContent3 />}
      {showAlternateContent[3] && <AlternateContent4 />}
      <Modal />
      <Footer />
      <FooterCopyright />
    </section>
  );
}

export default App;
