import { classNames } from 'shared/lib/classNames/classNames';
import './LoaderCircle.scss';

interface LoaderCircleProps {
    className?: string
}

export const LoaderCircle = ({ className }: LoaderCircleProps) => (
    <div
        className={classNames(
            'lds-ring',
            {},
            [className],
        )}
    >
        <div />
        <div />
        <div />
        <div />
    </div>
);
