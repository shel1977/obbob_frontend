import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import ArrowLeft from 'shared/assets/icons/arrow-left.svg';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { Button, ButtonSIze, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import style from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={style.collapseBtn}
                size={ButtonSIze.M}
                theme={ButtonTheme.CLEAR}
                square
            >
                {collapsed
                    ? <ArrowRight />
                    : <ArrowLeft />}
            </Button>
            <div className={style.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={style.link}
                    to={RoutePath.main}
                >
                    <HomeIcon className={style.icon} />

                    <span>{t('main')}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={style.link}
                    to={RoutePath.about}
                >
                    <AboutIcon className={style.icon} />

                    <span>{t('about')}</span>
                </AppLink>
            </div>
            <div className={style.switcher}>
                <ThemeSwitcher />
                <LangSwitcher className={style.lang} />
            </div>
        </div>
    );
};
