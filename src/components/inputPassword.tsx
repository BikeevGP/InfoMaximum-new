import React from "react";
import {
  inputs,
  validationSpan,
  inputPasswordLayer,
  eye
} from "../styles/UnAuthorizated.styles";
import CloseEye from "../img/closeEye";
import OpenEye from "../img/openEye";

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
      />
      {!visiblePassword ? (
        <CloseEye
          className={eye}
          onClick={() => setVisible(!visiblePassword)}
        />
      ) : (
        <OpenEye className={eye} onClick={() => setVisible(!visiblePassword)} />
      )}
      {props.meta.touched && props.meta.error && (
        <span className={validationSpan}>{props.meta.error}</span>
      )}
    </div>
  );
};

export default PasswordInput;
