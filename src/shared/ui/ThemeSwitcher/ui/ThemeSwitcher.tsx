import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import { Button, ButtonSIze, ButtonTheme } from 'shared/ui/Button/Button';
import style from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(style.themeSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            size={ButtonSIze.M}
            square
        >
            {
                theme === 'light'
                    ? <MoonIcon />
                    : <SunIcon />
            }
        </Button>
    );
};
