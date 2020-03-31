import React from "react";
import { inputs, validationSpan } from "../Input/Input.style";
import { inputPasswordLayer} from "./InputPassword.styles";
import {CloseEye, OpenEye} from '../../img/Eye/Eye';

interface IFieldProps {
  name: string;
  placeholder: string;
  id: string;
  meta: { touched: boolean; error: string; warning: string };
}

const PasswordInput: React.FC<IFieldProps> = (props: any) => {
  const [visiblePassword, setVisible] = React.useState(false);
  return (
    <div className={inputPasswordLayer}>
      <input
        {...props.input}
        id={props.id}
        name={props.name}
        className={inputs}
        type={!visiblePassword ? "password" : "text"}
        placeholder={props.placeholder}
        required
      />
      {!visiblePassword ? (
        <CloseEye
          
          onClick={() => setVisible(!visiblePassword)}
        />
      ) : (
        <OpenEye  onClick={() => setVisible(!visiblePassword)} />
      )}
      {props.meta.touched && props.meta.error && (
        <span className={validationSpan}>{props.meta.error}</span>
      )}
    </div>
  );
};

export default PasswordInput;
