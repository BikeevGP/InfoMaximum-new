import { style } from "typestyle";

export const ItemLayer = style({
  position: "relative",
  background: "#FFFFFF",
  boxShadow: " 0px 1px 1px rgba(0, 0, 0, 0.1)",
  borderRadius: "2px",
  marginRight: "22px",
  width: "calc(100% - 22px)",
  height: "252px",
  marginBottom: "12px"
});

export const topLine = style({
  height: "60px",
  borderBottom: "1px solid #D6DCE9",
  position: "relative"
});

export const h2Tag = style({
  margin: 0,
  position: "absolute",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "22px",
  lineHeight: "30px",
  color: "#6879BB",
  left: "24px",
  top: "12px"
});
export const bodyLayer = style({
  position: "relative"
});

export const countReplay = style({
  position: "absolute",
  height: "188px",
  width: "20%"
});

export const countReplayIcon = style({
  position: "absolute",
  top: "67px",
  left: "24px"
});

export const countReplayText = style({
  position: "absolute",
  margin: 0,
  top: "64px",
  left: "60px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "26px",
  lineHeight: "35px",
  color: "#535374"
});

export const countReplaySubText = style({
  position: "absolute",
  margin: 0,
  bottom: "74px",
  left: "60px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#999999"
});

export const statistics = style({
  height: "188px",
  width: "calc(35% + 42px)",
  position: "absolute",
  left: "20%"
});
export const averageExecutionTime = style({
  position: "absolute",
  top: "39px",
  width: "50%"
});
export const mainText = style({
  margin: 0,
  position: "absolute",
  top: "0px",
  left: "36px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "18px",
  lineHeight: "25px",
  color: "#535374"
});

export const subText = style({
  margin: 0,
  position: "absolute",
  left: "40px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#999999"
});

export const averageActiveTime = style({
  margin: 0,
  position: "absolute",
  bottom: "64px",
  width: "50%"
});


export const insideProcess = style({
    position: "absolute",
    left: "calc(50% + 42px)",
    top: "39px",
    width: "calc(50% - 42px)"
});

export const scenarios = style({
    margin: 0,
    position: "absolute",
    left: "calc(50% + 42px)",
    bottom: "64px",
    width: "calc(50% - 42px)"
});

export const metaData = style({
    position: "absolute",
    margin: 0,
    width: "210px",
    height: "98px",
    left: "calc(55% + 61px)",
    top: "45px"
});

export const allLine = style({
    marginBottom: "12px"
});
export const labelText = style({
    margin: 0,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#999999",
    display: "inline-block",
    width: "70px"
});

export const dateInLine = style({
    margin: 0,
    position: "relative",
    marginLeft: "20px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#333333",
    display: "inline"
});