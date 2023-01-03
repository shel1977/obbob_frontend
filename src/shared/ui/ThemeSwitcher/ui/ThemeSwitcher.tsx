import { useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import { Button, ButtonSIze, ButtonTheme } from 'shared/ui/Button/Button';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={toggleTheme}
            size={ButtonSIze.M}
            square
        >
            {
                theme === 'app_light_theme'
                    ? <MoonIcon />
                    : <SunIcon />
            }
        </Button>
    );
};
