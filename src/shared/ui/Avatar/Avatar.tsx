import {CSSProperties, useMemo} from "react";
import styles from "./Avatar.module.scss";
import classNames from "classnames";

export enum AvatarType {
    SQUARE = 'square',
    CIRCLE = 'circle',
}

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    type?:AvatarType
}

export const Avatar = (props: AvatarProps) => {

    const {className, src, size, alt,type=AvatarType.CIRCLE} = props;
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
            className={classNames(styles.Avatar, {}, [styles[type]])}
        />
    );
}