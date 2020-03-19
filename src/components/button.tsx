import React from "react";

interface IButtonProps {
  value: string;
  className: string;
}
const MyButton: React.FC<IButtonProps> = props => {
  return <button className={props.className}>{props?.value}</button>;
};
export default MyButton;
