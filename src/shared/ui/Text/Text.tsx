import React from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
    DEFAULT = "default",
    BLACK = "black",
}

export enum TextAlign {
    RIGHT = "right",
    CENTER = "center",
    LEFT = "left",
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: string;
    align?: string;
    size?: string;
}

export default function Text(props: TextProps) {
    const {
        className,
        title,
        description,
        theme = TextTheme.DEFAULT,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const addition = [className, styles[theme], styles[align], styles[size]];

    return (
        <div className={classNames('', {}, [...addition])}>
            {title && <h4 className={styles.title}>{title}</h4>}
            {description && <p className={styles.description}>{description}</p>}
        </div>
    );
}

