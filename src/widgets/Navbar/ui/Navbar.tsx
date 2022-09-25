import {classNames} from "shared/lib/classNames/classNames";
import style from "./Navbar.module.scss"
import React from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <ThemeSwitcher/>

            <div className={style.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={style.mainLink} to={'/'}>Home</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};

