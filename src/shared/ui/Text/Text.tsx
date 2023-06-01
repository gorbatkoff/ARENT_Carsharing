import {memo, ReactNode} from "react";

import styles from "./Text.module.scss";
import classNames from "classnames";

interface TextProps {
    className?: string,
    children: ReactNode,
}

export const Text = memo(({className, children}: TextProps) => {

    return (
        <p className={classNames(styles.Text, {}, [className])}>
            {children}
        </p>
    );
});