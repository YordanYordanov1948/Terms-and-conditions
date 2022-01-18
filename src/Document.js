import React from "react";

export default function Document(props) {
  return (
    <div className="content">
      {props.content}
      <div className="title">Terms and Conditions</div>
      <button type="button" disabled>
        I Agree
      </button>
    </div>
  );
}
