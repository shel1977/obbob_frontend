import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                theme={ButtonTheme.BACKGROUND}
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('+')}
            </Button>
            <Button
                theme={ButtonTheme.BACKGROUND}
                onClick={decrement}
                data-testid="decrement-btn"
            >
                {t('-')}
            </Button>
        </div>
    );
};
