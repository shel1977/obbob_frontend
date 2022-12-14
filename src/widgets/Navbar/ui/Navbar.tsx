import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import style from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const onCLoseleModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(style.navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={style.links}
                    onClick={onLogOut}
                >
                    {t('Выйти')}
                </Button>
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCLoseleModal}
                />
                <div className={style.links} />
            </div>
        );
    }
    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={style.links}
                onClick={onOpenModal}
            >
                {t('Sign In')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCLoseleModal}
            />
            <div className={style.links} />
        </div>
    );
};
