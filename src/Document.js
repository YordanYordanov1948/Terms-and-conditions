import React from "react";

export default function Document(props) {
  return (
    <div className="content">
      {props.title}
      {props.content}
    </div>
  );
}
