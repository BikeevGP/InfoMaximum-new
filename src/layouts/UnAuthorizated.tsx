import React from "react";
import { Route } from "react-router-dom";
import Logotype from "../img/Logotype";
import AuthorizationBody from "../components/Authorization";
import RegistrationBody from "../components/Registration";
import {
  appWrapper,
  logo,
  formlayer,
  content
} from "../styles/UnAuthorizated.styles";

interface IUnAuthProps {}
const UnAuthorizatedLayout: React.FC<IUnAuthProps> = () => {
  return (
    <div className={appWrapper}>
      <div className={logo}>
        <Logotype />
      </div>
      <div className={formlayer}>
        <div className={content}>
          <Route exact path="/" component={AuthorizationBody} />
          <Route exact path="/registration" component={RegistrationBody} />
        </div>
      </div>
    </div>
  );
};
export default UnAuthorizatedLayout;
