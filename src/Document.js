import React, { useState } from "react";

export default function Document(props) {
  const [disabled, setDisable] = useState(false);

  return (
    <div className="content">
      {props.content}
      <div className="title">{props.title}</div>
      <button disabled={disabled} onClick={() => setDisable(true)}>
        I Agree
      </button>
    </div>
  );
}
