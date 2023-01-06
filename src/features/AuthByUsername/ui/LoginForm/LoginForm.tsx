import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername';
import { getLoginState } from '../../model/selector/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import style from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onCLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(style.loginForm, {}, [className])}>
            <Text title={t('Authorisation')} />
            {error && <Text text={t('Wrong name or password')} theme={TextTheme.WARNING} />}
            <Input
                type="text"
                className={style.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={style.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={style.loginBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCLoginClick}
                disabled={isLoading}

            >
                {t('Войти')}
            </Button>
        </div>
    );
});
