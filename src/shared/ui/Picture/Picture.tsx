import {memo} from "react";
import styles from "./Picture.module.scss";
import classNames from "classnames";
import Car from "shared/assets/images/Car.png"


export enum PictureSize {
    BIG = "big",
    MEDIUM = "medium",
    SMALL = "small"
}

interface PictureProps {
    className?: string
    url?: string
    size?: PictureSize
}

export const Picture = memo((props: PictureProps) => {

    const {
        className,
        url,
        size = PictureSize.MEDIUM
    } = props;

    return (
        <div className={classNames(styles.Picture, {}, [className, styles[size]])}>
            <img src={url || Car} alt="" className={styles.image}/>
        </div>
    );
});