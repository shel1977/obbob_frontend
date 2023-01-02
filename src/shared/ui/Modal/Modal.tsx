import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import style from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => () => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        clearTimeout(timeRef.current);
        window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [style.opened]: isOpen,
        [style.isClosing]: isClosing,
    };

    const { t } = useTranslation();
    return (
        <Portal>
            <div className={classNames(style.modal, mods, [className])}>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                <div className={style.overlay} onClick={closeHandler}>
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                    <div className={style.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
