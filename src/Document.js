import React from "react";

export default function Document(props) {
  return (
    <div className="content">
      {props.content}
      <div className="title">{props.title}</div>
      <button type="button">I Agree</button>
    </div>
  );
}
