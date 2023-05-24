import React from "react";
import * as style from "./styles";
import { useSelector, useDispatch } from "react-redux";

export default function StoreSkeleton(props) {
  const { storeName, focusStoreName } = props;

  const pageNumber = useSelector((state) => state?.mainCard?.pageNumber);

  return pageNumber == 1 ? (
    <div
      style={{
        position: "relative",
        scale: focusStoreName ? "2" : "1",
        transformOrigin: "0 0",
        transition: "scale 1s",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "4rem",
          left: "2.8rem",
          backgroundColor: "#241c39",
          width: "16.8rem",
        }}
      >
        <h4 style={{ margin: 0, padding: "1rem 0" }}>{storeName}</h4>
      </div>
      <img
        src="/assets/images/image.png"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  ) : (
    <div style={style?.industryImageContainer}>
      <img
        src="/assets/images/industryImage.png"
        style={style?.industryImage}
      />
    </div>
  );
}
