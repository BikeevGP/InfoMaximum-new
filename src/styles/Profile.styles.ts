import { style } from "typestyle";

export const middleLine = style({
  position: "relative",
  marginBottom: "12px",
  minWidth: "785px"
});

export const middleLineTagH2 = style({
  margin: "0",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "26px",
  lineHeight: "35px",
  alignItems: "center",
  color: "#404064",
  marginBottom: "12px",
  display: "inline-block"
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

export const userLayer = style({
  position: "relative",
  background: "#ffffff",
  boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
  borderRadius: "2px",
  marginRight: "22px",
  paddingLeft: "46px",
  paddingTop: "24px",
  paddingBottom: "36px",
  minWidth: "785px"
});
export const userLayerLabels = style({
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "19px",
  color: "#999999",
  display: "block",
  marginBottom: "30px"
});

export const userLayerInputs = style({
  height: "36px",
  width: "435px",
  marginRight: "24px",
  marginBottom: "12px",
  background: "#ffffff",
  border: "1px solid #d6dce9",
  boxSizing: "border-box",
  borderRadius: "4px",
  padding: "6px 12px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "19px",
  color: "#6879bb",
  display: "block"
});
export const divLabels = style({
  display: "inline-block",
  marginRight: "100px"
});

export const divInputs = style({
  display: "inline-block"
});
