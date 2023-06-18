import {CSSProperties, memo, ReactNode} from "react";

import styles from "./Row.module.scss";
import classNames from "classnames";

interface RowProps {
    className?: string;
    children: ReactNode;
}

export const Row = memo((props: RowProps) => {

    const {
        className,
        children,
    } = props;

    return (
        <div className={classNames(styles.Row, {}, [className])}>
            {children}
        </div>
    );
});