import {memo} from "react";
import styles from "./HandBook.module.scss";
import classNames from "classnames";

interface HandBookProps {
    className?: string
}

export const HandBook = memo((props: HandBookProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.HandBook, {}, [className])}>
            HandBook
        </div>
    );
});