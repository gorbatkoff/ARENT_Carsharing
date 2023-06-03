import {memo} from "react";
import styles from "./Motorcycles.module.scss";
import classNames from "classnames";

interface MotorcyclesProps {
    className?: string
}

export const Motorcycles = memo((props: MotorcyclesProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.Motorcycles, {}, [className])}>
            Motorcycles
        </div>
    );
});