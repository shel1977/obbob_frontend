import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import LangIcon from 'shared/assets/icons/language.svg';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import style from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames(style.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            <LangIcon height="24px" />
        </Button>

    );
}
