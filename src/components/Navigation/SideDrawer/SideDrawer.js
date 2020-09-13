import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {

    let attachedClasses = [Classes.SideDrawer, Classes.Close];

    if (props.open) {
        attachedClasses = [Classes.SideDrawer, Classes.Open];
    }

    return (

        <Aux>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>

            <div className={attachedClasses.join(' ')}>
                <Logo height="11%"></Logo>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>

    );

}

export default sideDrawer;