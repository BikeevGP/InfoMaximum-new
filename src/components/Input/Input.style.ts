import { style } from "typestyle";

export const validationSpan = style({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    color: "#cc3300",
    paddingLeft:"10px"
  });
  
  export const inputs = style({
    display: "inline-block",
    marginTop:"11px",
    marginBottom: "2px",
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