import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import style from './PageError.module.scss';
import 'app/styles/index.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(style.pageError, {}, [className])}>
            <p>{t('something wrong')}</p>
            <Button
                onClick={reloadPage}
                theme={ThemeButton.CIRCLE}
            >
                {t('refresh page')}
            </Button>
        </div>
    );
};