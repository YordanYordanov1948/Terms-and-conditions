import React, { useState, useRef } from "react";

export default function Document(props) {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    console.log(goingUp, currentScrollY);
  };

  return (
    <div
      className="content"
      onScroll={onScroll}
      style={{ height: 300, overflowY: "scroll" }}
    >
      {props.content}
      <div className="title">{props.title}</div>
      <button disabled={!goingUp}>I Agree</button>{" "}
    </div>
  );
}
