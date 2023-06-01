import React, {memo, ReactNode} from 'react';
import styles from './Button.module.scss';
import classNames from "classnames";

export enum ButtonTheme {
    PRIMARY = "primary",
    INFO = "info"
}

type Props = {
    theme?: ButtonTheme;
    children: ReactNode;
}

function Button(props: Props) {

    const {
        children,
        theme = ButtonTheme.PRIMARY
    } = props;

    return (
        <button className={classNames(styles.Button, [styles[theme]])}>
            {children}
        </button>
    )
}

export default memo(Button)