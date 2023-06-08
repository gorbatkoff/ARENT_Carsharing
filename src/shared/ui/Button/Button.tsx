import React, {ButtonHTMLAttributes, memo, ReactNode} from 'react';
import styles from './Button.module.scss';
import classNames from "classnames";
import { Icon } from '../Icon/Icon';

export enum ButtonTheme {
    PRIMARY = "primary",
    INFO = "info",
    CLEAR = "clear",
}

type ButtonProps = {
    className?: string;
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    theme?: ButtonTheme;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {

    const {
        className,
        icon,
        children,
        theme = ButtonTheme.PRIMARY
    } = props;

    return (
        <button className={classNames(className, styles.Button, [styles[theme]])}>
            {icon && <Icon Svg={icon}/>}
            {children}
        </button>
    )
}

export default memo(Button)