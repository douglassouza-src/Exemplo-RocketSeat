import React from "react";
import "./index.css";
import Header from "./home/Header";
import Content from "./home/Content";
import Article from "./home/Article";
import Footer from "./home/Footer";

function App() {
  return (
    <section>
      <Header />
      <Content />
      <Article />
      <Footer />
    </section>
  );
}

export default App;
