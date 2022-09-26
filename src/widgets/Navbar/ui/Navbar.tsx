import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <div className={style.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={style.mainLink} to="/">{t('main')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('about')}</AppLink>
            </div>
        </div>
    );
};
