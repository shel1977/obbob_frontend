import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import style from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [className])}
        >
            <button type="button" onClick={onToggle}>open</button>
            <div className={style.switcher}>
                <ThemeSwitcher />
                <LangSwitcher className={style.lang} />
            </div>
        </div>
    );
};
