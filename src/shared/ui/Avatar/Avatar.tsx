import {CSSProperties, useMemo} from "react";
import styles from "./Avatar.module.scss";
import classNames from "classnames";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({className, src, size, alt}: AvatarProps) => {

    const inlineStyles = useMemo<CSSProperties>(() => {
        return {
            width: size || 60,
            height: size || 60,
        }
    }, [size])

    return (
        <img
            src={src}
            alt={alt}
            style={inlineStyles}
            className={classNames(styles.Avatar, {}, [])}
        />
    );
}