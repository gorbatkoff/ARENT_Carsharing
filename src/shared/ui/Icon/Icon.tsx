import React, {memo} from "react";
import styles from "./Icon.module.scss";
import classNames from "classnames";

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo(({className, Svg}: IconProps) => {

    return (
        <Svg className={classNames(styles.Icon, {}, [className])}>
            Icon
        </Svg>
    );
});