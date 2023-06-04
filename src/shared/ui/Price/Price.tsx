import {memo} from "react";

import styles from "./Price.module.scss";
import classNames from "classnames";

interface PriceProps {
    className?: string;
    price: string | number;
}

export const Price = memo((props: PriceProps) => {

    const {className, price} = props;

    return (
        <div className={classNames(styles.Price, {}, [className])}>
            {price}₽
        </div>
    );
});