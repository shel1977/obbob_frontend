import {classNames} from "shared/lib/classNames/classNames";
import style from "./Sidebar.module.scss"
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(style.sidebar, {[style.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>open</button>
            <div className={style.switcher}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

