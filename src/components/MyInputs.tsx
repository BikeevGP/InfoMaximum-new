import React from 'react';
import { Field } from "redux-form";
import {inputs} from '../styles/UnAuthorizated.styles';

interface IFieldProps {
  name: string;
  placeholder: string;
  type: string;
  id: string
}

const MyInput: React.FC<IFieldProps> = (props: any) => {
  return <Field id={props.id} name={props.name} component="input" className={inputs} type={props.type} placeholder={props.placeholder} />;
};
export default MyInput;