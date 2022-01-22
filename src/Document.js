import React, { useState } from "react";

export default function Document(props) {
  const [value, setDisable] = useState(false);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setDisable(true);
    }
  };

  return (
    <div className="content" onClick={handleScroll}>
      {props.content}
      <div className="title">{props.title}</div>
      <button disabled={!value}>I Agree</button>{" "}
    </div>
  );
}
