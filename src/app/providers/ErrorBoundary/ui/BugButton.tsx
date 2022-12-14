import { useTranslation } from 'react-i18next';
import { Button, ButtonSIze, ButtonTheme } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// test component

export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const { t } = useTranslation();
    return (
        <Button
            onClick={onThrow}
            theme={ButtonTheme.CLEAR}
        >
            {t('throw error')}
        </Button>
    );
};
