import React, { useState, useEffect } from "react";

export default function Document({ title, content }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);
  return (
    <div className="content">
      <div className="title">Terms and Conditions</div>
      <button type="button" disabled onClick={setOffset}>
        I Agree
      </button>
      {title}
      {content}
    </div>
  );
}
