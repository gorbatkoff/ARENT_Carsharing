import {memo} from "react";
import styles from "./Select.module.scss";
import classNames from "classnames";

interface SelectProps {
    className?: string
}

export const Select = memo((props: SelectProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.Select, {}, [className])}>
            Select
        </div>
    );
});