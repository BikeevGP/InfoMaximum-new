import React from "react";
import {
  middleLine,
  middleLineTagH2,
  button,
  userLayer,
  divInputs,
  divLabels,
  userLayerLabels,
} from "../styles/Profile.styles";
import MyButton from "./button";
import { reduxForm } from 'redux-form';
import MyInput from './MyInputs';


let Profile = props => {
  return (
    <>
      <div className={middleLine}>
        <h2 className={middleLineTagH2}>Борис Годунов. Редактирование</h2>
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
            <label className={userLayerLabels} htmlFor="newPassword">
              Новый пароль
            </label>
            <label className={userLayerLabels} htmlFor="reEnterPassword">
              Повторите пароль
            </label>
          </div>
          <div className={divInputs}>
            <MyInput id="name" name="name" type="text"/>
            <MyInput id="secondName" name="secondName" type="text"/>
            <MyInput id="email" name="email" type="text"/>
            <MyInput id="newPassword" name="newPassword" type="password"/>
            <MyInput id="reEnterPassword" name="reEnterPassword" type="password"/>
          </div>
        </form>
      </div>
    </>
  );
};
Profile = reduxForm({form: "Profile"})(Profile);
export default Profile;
