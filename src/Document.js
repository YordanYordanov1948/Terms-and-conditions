import React, { useState } from "react";

export default function Document(props) {
  const [disable, setDisable] = useState(false);

  return (
    <div className="content">
      {props.content}
      <button disabled={disable} onClick={() => setDisable(true)}>
        I Agree{" "}
      </button>
      <div className="title">Terms and Conditions{props.title}</div>
    </div>
  );
}
