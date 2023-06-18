import {memo, ReactNode} from "react";
import classNames from "classnames";

interface RowProps {
    className?: string;
    children: ReactNode;
    count?: number;
    elementWidth?: number | string;
    gap?: number | string
}

export const Column = memo((props: RowProps) => {

    const {
        className,
        children,
        count,
        elementWidth,
        gap
    } = props;

    const styles = {
        display: 'grid',
        gridTemplateColumns: `repeat(${count}, ${elementWidth})`,
        gap
    }

    return (
        <div style={styles} className={classNames('', {}, [className])}>
            {children}
        </div>
    );
});