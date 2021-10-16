import React from "react";
import { BackTop } from "antd";

function BackToTop(props) {
  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "red",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };
  return (
    <BackTop>
      <div style={style}>
        <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
      </div>
    </BackTop>
  );
}

export default BackToTop;
