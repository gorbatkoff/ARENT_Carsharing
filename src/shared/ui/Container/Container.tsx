import {ReactNode} from "react";

import styles from "./Container.module.scss";
import classNames from "classnames";

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

export const Container = (props: ContainerProps) => {

    const {
        className,
        children,
    } = props;

    return (
        <div className={classNames(styles.Container, {}, [className])}>
            {children}
        </div>
    );
};