import { style } from "typestyle";

export const menu = style({
  position: "absolute",
  height: "100vh",
  zIndex: 2,
  width: "100vw",
  right: 0,
  background: "#20262B",
  opacity: 0.5,
  minWidth: "785px"
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
  background: " #404064",
  boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.3)"
});

export const itemMenu = style({
  position: "relative",
  width: "100%",
  height: "60px",
  cursor: "pointer",
  $nest: {
    "&:first-child": {
      marginTop: "60px"
    }
  }
});

export const itemIcon = style({
  position: "absolute",
  top: "18px",
  left: "24px"
});
export const itemTagP = style({
  position: "absolute",
  left: "60px",
  top: "8px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: " 14px",
  lineHeight: "19px",
  color: "#FFFFFF"
});
