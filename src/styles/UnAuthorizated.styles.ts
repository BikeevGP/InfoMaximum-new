import { style } from "typestyle";

export const appWrapper = style({
  height: "100vh",
  width: "100%",
  minWidth: "426px",
  background: "linear-gradient(213.53deg, #6879BB 7.06%, #9300BB 95.23%)"
});

export const logo = style({
  position: "relative",
  marginLeft: "calc(50vw - 76px)",
  top: "32px",
  marginBottom: "60px"
});

export const formlayer = style({
  background: "white",
  width: "424px",
  margin: "0 auto",
  minHeight: "80vh",
  height:"81.5vh",
  borderRadius: "2px"
});

export const content = style({
  padding: "36px 48px 24px 48px"
});

export const button = style({
  display: "block",
  background: "#FFCE0C",
  borderRadius: "4px",
  border: "0",
  color: "#333333",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "16px",
  marginBottom: "18px",
  marginTop: "24px",
  width: "100%",
  height: "36px",
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

export const inputs = style({
  display: "block",
  marginBottom: "12px",
  width: "calc(100% - 22px)",
  height: "24px",
  padding: "5px 11px",
  border: "1px solid #D6DCE9",
  borderRadius: "4px",
  lineHeight: "24px",
  color: "#6879BB",
  $nest: {
    "&::placeholder": {
      color: "#CCCCCC"
    }
  }
});

export const linkClass = style({
  color: "#3167BA",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "19px",
  textDecoration: "none"
});

export const errorClass = style({
  marginTop: "24px",
  marginLeft: "-48px",
  marginRight: "-48px",
  backgroundColor: "#ffe9db",
  padding: "36px 48px 36px 120px",
  position: "relative",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "19px",
  color: "#333333"
});

export const imgErrorClass = style({
  position: "absolute",
  left: "48px",
  top: "24px",
  marginRight: "24px"
});
export const registrationTagP = style({
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "19px",
  textDecoration: "none"
});
export const registrationTagH2 = style({
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "18px",
  lineHeight: "25px",
  color: "#404064",
  margin: "0",
  marginBottom: "20px"
});
