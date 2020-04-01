import { style } from "typestyle";

export const profileButton = style({
  position: "absolute",
  right: "22px",
  top: "-50px",
  background: "#ffce0c",
  borderRadius: "4px",
  border: "0",
  padding: "7px 24px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "16px",
  alignItems: "center",
  textAlign: "center",
  color: "#333333",
  outline: "none",
  $nest: {
    "&:hover": {
      cursor: "pointer",
      background: "#FFD73B",
      boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.12)",
      outline: "none"
    },
    "&:active": {
      background: "#FFC40C",
      boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.12)",
      outline: "none"
    },
    "&:focus": {
      background: "#FFCE0C",
      border: "1px solid #FFFBEA",
      boxSizing: "border-box",
      boxShadow: "0px 1px 10px #FFD73B",
      outline: "none"
    }
  }
});

export const button = style({
  position: "absolute",
  right: "22px",
  top: "6px",
  background: "#ffce0c",
  borderRadius: "4px",
  border: "0",
  padding: "7px 24px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "16px",
  alignItems: "center",
  textAlign: "center",
  color: "#333333",
  outline: "none",
  $nest: {
    "&:hover": {
      cursor: "pointer",
      background: "#FFD73B",
      boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.12)",
      outline: "none"
    },
    "&:active": {
      background: "#FFC40C",
      boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.12)",
      outline: "none"
    },
    "&:focus": {
      background: "#FFCE0C",
      border: "1px solid #FFFBEA",
      boxSizing: "border-box",
      boxShadow: "0px 1px 10px #FFD73B",
      outline: "none"
    }
  }
});

export const desabledButton = style({
  position: "absolute",
  right: "22px",
  top: "-50px",
  background: "#FFCE0C",
  borderRadius: "4px",
  border: "0",
  padding: "7px 24px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "16px",
  alignItems: "center",
  textAlign: "center",
  color: "#333333",
  outline: "none",
  opacity: 0.5
});
