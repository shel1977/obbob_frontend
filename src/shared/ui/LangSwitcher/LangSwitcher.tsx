import { useTranslation } from 'react-i18next';
import React from 'react';
import LangIcon from 'shared/assets/icons/language.svg';

import { Button, ButtonSIze, ButtonTheme } from 'shared/ui/Button/Button';

export function LangSwitcher() {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={toggle}
            size={ButtonSIze.M}
            square
        >
            <LangIcon />
        </Button>

    );
}
