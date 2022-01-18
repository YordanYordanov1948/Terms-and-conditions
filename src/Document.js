import React, { useState } from "react";

export default function Document(props) {
  const [disable, setDisable] = useState(false);

  return (
    <div className="content">
      {props.content}
      <button type="button" disabled>
        I Agree
      </button>

      <div className="title">Terms and Conditions</div>
    </div>
  );
}
