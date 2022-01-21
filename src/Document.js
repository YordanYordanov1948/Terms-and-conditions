import React from "react";

export default function Document(props, { disabled }) {
  return (
    <div className="content">
      {props.content}
      <div className="title">{props.title}</div>
      <button disabled={disabled}>I Agree</button>
    </div>
  );
}
