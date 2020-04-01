// Контейней Profile, используется в документе Authorized.tsx
// Используется в проекте для визуализации данных о пользователе

////// Подключения из node_modules
import React from "react";
import { reduxForm, Field, isDirty, isValid } from "redux-form";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";

////// Подключение стилей
import {
  middleLine,
  middleLineTagH2,
  userLayer,
  divInputs,
  divLabels,
  userLayerLabels
} from "./Profile.style";
import {
  profileButton,
  desabledButton
} from "../../components/Button/Button.style";

////// Подключение компонентов
import MyButton from "../../components/Button/Button";
import MyInput from "../../components/Input/MyInputs";
import PasswordInput from "../../components/InputPassword/InputPassword";

////// Подключение валидаций
import {
  maxLength,
  minLength8,
  emailTest,
  checkRePassword,
  minLength
} from "../../store/Validation";

////// Подключение запросов
import loadDataProfile from "../../quieres/LoadDataProfile";
import EditUser from "../../quieres/EditUser";

interface IProfileProps {}

const Profile: React.FC<IProfileProps> = (props: any) => {
  const { data, refetch } = useQuery(loadDataProfile, {
    onCompleted() {
      props.initialize({
        name: data?.currentUser.firstName,
        secondName: data?.currentUser.secondName,
        email: data?.currentUser.email
      });
    },
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true
  });
  const [startEditUser] = useMutation(EditUser, {
    onCompleted() {
      refetch();
    }
  });
  const { handleSubmit } = props;
  return (
    <>
      <div className={middleLine}>
        <h2 className={middleLineTagH2}>
          {data?.currentUser.firstName} {data?.currentUser.secondName}.
          Редактирование
        </h2>
      </div>
      <div className={userLayer}>
        <form
          onSubmit={handleSubmit((event: any) => {
            props.dirty &&
              startEditUser({
                variables: {
                  id: data.currentUser.id,
                  email: event.email,
                  firstName: event.name,
                  secondName: event.secondName,
                  password: event.password
                }
              });
          })}
        >
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
          <MyButton
            value="Сохранить"
            className={!props.dirty || !props.valid ? desabledButton : profileButton}
          />
        </form>
      </div>
    </>
  );
};

export default connect(state => {
  return { dirty: isDirty("Profile"), valid: isValid("Profile") };
})(
  reduxForm({
    form: "Profile"
  })(Profile)
);
