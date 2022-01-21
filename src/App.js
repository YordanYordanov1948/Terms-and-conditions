import React, { useEffect } from "react";
import Document from "./Document";
import "./App.css";

function App({ title, content }) {
  useEffect(() => {
    fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <Document
            title={(title = "Terms and Conditions")}
            content={content}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
