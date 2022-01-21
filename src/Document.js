import React, { useState } from "react";

export default function Document(props) {
  const [disable, setDisable] = useState(false);
  return (
    <div className="content">
      {props.content}
      <div className="title">{props.title}</div>
      <button disabled={disable} onClick={() => setDisable(true)}>
        I Agree
      </button>
    </div>
  );
}
