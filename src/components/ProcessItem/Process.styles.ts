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

export const statistics = style({
  height: "188px",
  width: "calc(35% + 42px)",
  position: "absolute",
  left: "20%"
});

export const averageExecutionTime = style({
  position: "absolute",
  top: "39px",
  height: "30px",
  width: "50%"
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

export const onMapProcess = style({
  margin:0,
  top:"23px",
  position:"absolute",
  right:"48px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#6879BB",
  cursor:"pointer"
});

export const forBorder = style({
  position:"absolute",
  top:"60px",
  border: "0.5px solid #D6DCE9",
  width: "calc(100% - 24px)"
});
