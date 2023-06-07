import {memo} from "react";

import styles from "./MarksTable.module.scss";
import classNames from "classnames";

interface MarksTableProps {
    className?: string
}

export const MarksTable = memo((props: MarksTableProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.MarksTable, {}, [className])}>
            MarksTable
        </div>
    );
});