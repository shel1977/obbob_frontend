import { classNames } from 'shared/lib/classNames/classNames';
import { LoaderCircle } from 'shared/ui/LoaderCircle/LoaderCircle';
import style from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(style.pageLoader, {}, [className])}>
        <LoaderCircle />
    </div>
);
