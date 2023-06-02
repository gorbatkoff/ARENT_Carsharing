import {memo} from "react";

import styles from "./Header.module.scss";
import classNames from "classnames";

interface HeaderProps {
    className?: string
}

export const Header = memo((props: HeaderProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.Header, {}, [className])}>
            Header
        </div>
    );
});