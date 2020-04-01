import { style } from "typestyle";

export const menu = style({
  position: "absolute",
  height: "100%",
  zIndex: 2,
  width: "100vw",
  right: 0,
  background: "#20262B",
  opacity: 0.5,
  minWidth: "1000px",
  minHeight: "200vh"
});

export const menuTop = style({
  width: "224px",
  height: "60px",
  background: "#535374",
  boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.2)",
  position: "absolute",
  zIndex: 4
});

export const menuDown = style({
  width: "224px",
  zIndex: 3,
  position: "absolute",
  height: "100vh",
  minHeight:"200vh",
  background: " #404064",
  boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.3)"
});

export const itemIcon = style({
  position: "absolute",
  top: "18px",
  left: "24px"
});

