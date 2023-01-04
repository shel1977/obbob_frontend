import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import style from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(style.loginForm, {}, [className])}>
            <Input type="text" className={style.input} />
            <Input type="text" className={style.input} />
            <Button
                className={style.loginBtn}
                theme={ButtonTheme.CLEAR}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
