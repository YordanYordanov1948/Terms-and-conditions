import React, { useState } from "react";

export default function Document(props) {
  const [value, setValue] = useState("");

  return (
    <div className="content">
      {props.content}
      <div className="title">{props.title}</div>
      <button disabled={!value}>I Agree</button>{" "}
    </div>
  );
}
