import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CIRCLE = 'circleButton'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(style.button, {}, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
