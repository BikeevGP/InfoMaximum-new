import React from "react";
import {
  middleLine,
  middleLineTagH2,
  button,
  userLayer,
  divInputs,
  divLabels,
  userLayerLabels
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

let Profile = props => {
  const { data } = useQuery(loadDataProfile, {
    onCompleted() {
      props.initialize({
        name: data?.currentUser.firstName,
        secondName: data?.currentUser.secondName,
        email: data?.currentUser.email
      });
    }
  });
  console.warn(data?.currentUser);
  return (
    <>
      <div className={middleLine}>
        <h2 className={middleLineTagH2}>{data?.currentUser.firstName} {data?.currentUser.secondName}. Редактирование</h2>
        <MyButton value="Сохранить" className={button} />
      </div>
      <div className={userLayer}>
        <form action="">
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
              validate={[minLength, maxLength]}
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
              type="password"
              component={MyInput}
              validate={[minLength8, maxLength]}
            />
            <Field
              id="reEnterPassword"
              name="reEnterPassword"
              type="password"
              component={MyInput}
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

export default Profile;
