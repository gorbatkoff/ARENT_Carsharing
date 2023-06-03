import React, {ButtonHTMLAttributes, memo, ReactNode} from 'react';
import styles from './Button.module.scss';
import classNames from "classnames";

export enum ButtonTheme {
    PRIMARY = "primary",
    INFO = "info",
    CLEAR = "clear",
}

type ButtonProps = {
    className?: string
    theme?: ButtonTheme;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {

    const {
        className,
        children,
        theme = ButtonTheme.PRIMARY
    } = props;

    return (
        <button className={classNames(className, styles.Button, [styles[theme]])}>
            {children}
        </button>
    )
}

export default memo(Button)