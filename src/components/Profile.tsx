import React from "react";
import {
  middleLine,
  middleLineTagH2,
  button,
  userLayer,
  divInputs,
  divLabels,
  userLayerLabels,
  userLayerInputs
} from "../styles/Profile.styles";
import MyButton from "../components/button";

interface IProfileProps {}

const Profile: React.FC<IProfileProps> = props => {
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
            <input id="name" type="text" className={userLayerInputs} />
            <input id="secondName" type="text" className={userLayerInputs} />
            <input id="email" type="text" className={userLayerInputs} />
            <input
              id="newPassword"
              type="password"
              className={userLayerInputs}
            />
            <input
              id="reEnterPassword"
              type="password"
              className={userLayerInputs}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
