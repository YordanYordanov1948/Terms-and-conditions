import React from "react";

export default function Document(props, { disable }) {
  return (
    <div className="content">
      {props.content}
      <div className="title">{props.title}</div>
      <button type="button" property={disable}>
        I Agree
      </button>
    </div>
  );
}
