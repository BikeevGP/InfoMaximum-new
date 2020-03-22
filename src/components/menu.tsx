import React from 'react';
import {menuTop, menuDown,menu, procesetImg, itemMenu, itemIcon, itemTagP} from '../styles/Menu.styles';
import Proceset from '../img/proceset';
import UserIcon from '../img/usericon';
import Process from '../img/Process';



const Menu = () =>{

    return(
        <>
        <div className={menuTop}>
           <Proceset className={procesetImg}/>
        </div>
        <div className={menuDown}>
            <div className={itemMenu}>
                <UserIcon className={itemIcon} />
                <p className={itemTagP}>UserName</p>
            </div>
            <div className={itemMenu}>
                <Process className={itemIcon}/>
                <p className={itemTagP}>Список процессов</p>
            </div>
        </div>
        <div className={menu}>
            
        </div>
        </>
    );
}

export default Menu;