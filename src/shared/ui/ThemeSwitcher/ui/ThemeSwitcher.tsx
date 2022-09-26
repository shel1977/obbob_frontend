import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import style from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(style.themeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            <ThemeIcon height="20px" />
        </Button>
    );
};
