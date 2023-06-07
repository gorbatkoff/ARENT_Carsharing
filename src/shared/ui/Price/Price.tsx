import {memo} from "react";

import styles from "./Price.module.scss";
import classNames from "classnames";

export enum PriceSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

interface PriceProps {
    className?: string;
    price: string | number;
    size?: PriceSize
}

export const Price = memo((props: PriceProps) => {

    const {
        className,
        price,
        size = PriceSize.SMALL
    } = props;

    return (
        <div className={classNames(styles.Price, {}, [className, styles[size]])}>
            {price}₽{size === PriceSize.SMALL ? null : <span className={styles.hour}>/час</span>}
        </div>
    );
});