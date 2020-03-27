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
import Menu from '../components/menu';
import ProcessPage from '../components/Process';


interface IAuthProps {}

const Authorizated: React.FC<IAuthProps> = (props:any) => {
  const [isVisibleMenu, setState] = React.useState(false);

  return (
    <>
      <div className={appWrapper}>
        <div className={navLayer} onClick={() => setState(!isVisibleMenu) }>
          <NavIcon className={navIcon} color={isVisibleMenu ? 'white' : '#6879BB'}/>
          <p className={navTagP}>Меню</p>
          {isVisibleMenu ? <Menu /> : null}
          
        </div>
        <div className={workPlace}>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/process" component={ProcessPage} />
        </div>
      </div>
    </>
  );
};

export default Authorizated;
