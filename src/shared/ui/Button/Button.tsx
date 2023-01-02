import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'invertedClear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSIze {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme,
    size?: ButtonSIze,
    square?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square = false,
        size,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [style[theme]]: true,
        [style.square]: square,
        [style[size]]: true,

    };

    return (
        <button
            type="button"
            className={classNames(style.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
