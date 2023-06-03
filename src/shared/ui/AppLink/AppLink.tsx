import {memo, ReactNode} from "react";

import styles from "./AppLink.module.scss";
import classNames from "classnames";
import {Link, LinkProps} from "react-router-dom"

export enum AppLinkTheme {
    // Белая, чёрная, серая
    WHITE = "white",
    BLACK = "black",
    GRAY = "gray",
}

type AppLinkProps = {
    className?: string;
    to: string;
    theme?: AppLinkTheme;
    children: ReactNode;
} & LinkProps

export const AppLink = memo((props: AppLinkProps) => {

    const {
        className,
        to,
        theme = AppLinkTheme.BLACK,
        children
    } = props;

    return (
        <Link
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            to={to}
        >
            {children}
        </Link>
    );
});