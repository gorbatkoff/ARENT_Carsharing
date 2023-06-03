import {memo} from "react";
import styles from "./CommercialTransport.module.scss";
import classNames from "classnames";

interface CommercialTransportProps {
    className?: string
}

export const CommercialTransport = memo((props: CommercialTransportProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.CommercialTransport, {}, [className])}>
            CommercialTransport
        </div>
    );
});