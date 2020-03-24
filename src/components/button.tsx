import React from "react";

interface IButtonProps {
  value: string;
  className: string;
  onClick?: React.MouseEventHandler;
}
const MyButton: React.FC<IButtonProps> = props => {
  return <button className={props.className} onClick={props.onClick}>{props?.value}</button>;
};
export default MyButton;
