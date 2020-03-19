import { style } from "typestyle";

export const appWrapper = style({
  height: "100vh",
  width: "100%",
  background: "#ebf2fb",
  minWidth: "785px"
});

export const navLayer = style({
  background: "#ffffff",
  boxShadow: "0px 1px 10px rgba(104, 121, 187, 0.1)",
  height: "60px",
  position: "relative"
});

export const navIcon = style({
  position: "absolute",
  left: "24px",
  top: "18px"
});

export const navTagP = style({
  position: "absolute",
  left: "60px",
  top: "20px",
  margin: "0",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "19px",
  color: "#6879bb"
});

export const workPlace = style({
  marginTop: "24px",
  marginLeft: "22px"
});
