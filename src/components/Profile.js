import React from "react";
import {
  middleLine,
  middleLineTagH2,
  profileButton,
  userLayer,
  divInputs,
  divLabels,
  userLayerLabels,
  desabledButton,
  
} from "../styles/Profile.styles";
import MyButton from "./button";
import { reduxForm, Field, formValueSelector, isDirty, isValid } from "redux-form";
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
import EditUser from '../quieres/editUser';

const Profile = props => {
  const {data} = useQuery(loadDataProfile, {
    onCompleted() {
      props.initialize({
        name: data?.currentUser.firstName,
        secondName: data?.currentUser.secondName,
        email: data?.currentUser.email
      });
    }
  });
  const [startEditUser] = useMutation(EditUser, {refetchQueries: [`loadData`]});
  const { handleSubmit } = props;
  return (
    <>
      <div className={middleLine}>
        <h2 className={middleLineTagH2}>{data?.currentUser.firstName} {data?.currentUser.secondName}. Редактирование</h2>
      </div>
      <div className={userLayer}>
        <form onSubmit={handleSubmit(event =>{
          startEditUser({variables:{
            id: data.currentUser.id,
            email: event.email,
            firstName: event.name,
            secondName: event.secondName,
            password: event.password
          }});
          console.log("event", event);
        })}>
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
          <MyButton value="Сохранить" className={!props.dirty ? desabledButton : profileButton}/>
        
        </form>
      </div>
    </>
  );
};




export default reduxForm({
  form: "Profile"
})(connect(state =>{return{    dirty: isDirty("Profile"),
valid: isValid("Profile")}})( Profile));
