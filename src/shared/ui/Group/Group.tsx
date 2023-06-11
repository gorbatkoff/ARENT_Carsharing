import React, {memo} from "react";
import styles from "./Group.module.scss";
import classNames from "classnames";

export enum GroupTheme {
    PRIMARY = "primary",
    ERROR = "error",
    DEFAULT = "default",
    BLACK = "black",
}

export enum GroupAlign {
    LEFT = "left",
	RIGHT = "right",
	CENTER = "center",
}


interface GroupProps {
	className?: string,
	groupKey: string,
	groupValue?: string | number,
	theme?: string,
	align?: string,
}

export const Group = memo((props: GroupProps)=>{
    const {className,
        groupKey,
        groupValue,
        theme=GroupTheme.PRIMARY,
        align=GroupAlign.LEFT
    } = props;

    const addition = [className, styles[theme], styles[align]];

    return (
        <div className={classNames(className,styles.Group,[...addition])}>
            <div className={classNames(styles.key)}>{groupKey}</div>
            <div className={classNames(styles.value)}>{groupValue}</div>
        </div>
    )
});