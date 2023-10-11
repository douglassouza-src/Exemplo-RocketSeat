import React from "react";
import "./index.css";
import Header from "./home/Header";
import Content from "./home/Content";
import Article from "./home/Article";
import Footer from "./home/Footer";
import Modal from "./home/Modal";

function App() {
  return (
    <section>
      <Header />
      <Content />
      <Article />
      <Modal />
      <Footer />
    </section>
  );
}

export default App;
