import React, {
    InputHTMLAttributes, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    type?: string
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(style.Input, {}, [className])}>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>

    );
});
