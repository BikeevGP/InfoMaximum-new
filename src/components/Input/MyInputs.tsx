import React from "react";
import { inputs, validationSpan } from "./Input.style";

interface IFieldProps {
  name: string;
  placeholder: string;
  type: string;
  id: string;
  meta: { touched: boolean; error: string; warning: string };
}

const MyInput: React.FC<IFieldProps> = (props: any) => {
  return (
    <>
      <input
        {...props.input}
        id={props.id}
        name={props.name}
        required
        className={inputs}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.meta.touched &&
        props.meta.error && (
          <span className={validationSpan}>{props.meta.error}</span>
        )}
    </>
  );
};
export default MyInput;
