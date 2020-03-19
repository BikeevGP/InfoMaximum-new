import React from "react";
import {
  appWrapper,
  navLayer,
  navIcon,
  navTagP,
  workPlace
} from "../styles/Authorizated.styles";
import NavIcon from "../img/NavIcon";
import { Route } from "react-router-dom";
import Profile from "../components/Profile";

interface IAuthProps {}

const Authorizated: React.FC<IAuthProps> = props => {
  return (
    <>
      <div className={appWrapper}>
        <div className={navLayer}>
          <NavIcon className={navIcon} />
          <p className={navTagP}>Меню</p>
        </div>
        <div className={workPlace}>
          <Route exact path="/profile" component={Profile} />
        </div>
      </div>
    </>
  );
};

export default Authorizated;
