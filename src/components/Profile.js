import React from "react";
import {
  middleLine,
  middleLineTagH2,
  button,
  userLayer,
  divInputs,
  divLabels,
  userLayerLabels,
  desabledButton
} from "../styles/Profile.styles";
import MyButton from "./button";
import { reduxForm, Field, formValueSelector } from "redux-form";
import MyInput from "./MyInputs";
import { connect } from "react-redux";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  maxLength,
  minLength8,
  emailTest,
  checkRePassword,
  minLength
} from "../store/validation";
import loadDataProfile from "../quieres/loadDataProfile";
import PasswordInput from './inputPassword';

let Profile = props => {

  const [dataChanged, setChanged] = React.useState(false);
  const {data} = useQuery(loadDataProfile, {
    onCompleted() {
      props.initialize({
        name: data?.currentUser.firstName,
        secondName: data?.currentUser.secondName,
        email: data?.currentUser.email
      });
    }
  });

  return (
    <>
      <div className={middleLine}>
        <h2 className={middleLineTagH2}>{data?.currentUser.firstName} {data?.currentUser.secondName}. Редактирование</h2>
        <MyButton value="Сохранить" className={!dataChanged ? desabledButton : button} />
      </div>
      <div className={userLayer}>
        <form >
          <div className={divLabels}>
            <label className={userLayerLabels} htmlFor="name">
              Имя
            </label>
            <label className={userLayerLabels} htmlFor="secondName">
              Фамилия
            </label>
            <label className={userLayerLabels} htmlFor="email">
              Электронная почта
            </label>
            <label className={userLayerLabels} htmlFor="password">
              Новый пароль
            </label>
            <label className={userLayerLabels} htmlFor="reEnterPassword">
              Повторите пароль
            </label>
          </div>
          <div className={divInputs}>
            <Field
              id="name"
              name="name"
              type="text"
              component={MyInput}
              validate={[minLength, maxLength]}
              
            />
            <Field
              id="secondName"
              name="secondName"
              type="text"
              component={MyInput}
              validate={[minLength, maxLength]
              }
            />
            <Field
              id="email"
              name="email"
              type="text"
              component={MyInput}
              validate={[emailTest]}
            />
            <Field
              id="password"
              name="password"
              component={PasswordInput}
              validate={[minLength8, maxLength]}
            />
            <Field
              id="reEnterPassword"
              name="reEnterPassword"
              component={PasswordInput}
              validate={[checkRePassword]}
            />
          </div>
        </form>
      </div>
    </>
  );
};

Profile = reduxForm({
  form: "Profile"
})(Profile);
const selector = formValueSelector("Profile");
Profile = connect(state => {
  const name = selector(state, "name");
  const sname = selector(state, "secondName");
  const email = selector(state, "email");
  const password = selector(state, "password");
  return {
    name,
    sname,
    email,
    password
  };
})(Profile);

export default Profile;
