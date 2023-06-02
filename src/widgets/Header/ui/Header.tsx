import {memo} from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";

import ChatIcon from "shared/assets/images/chat.svg";
import {Icon} from "shared/ui/Icon/Icon";

interface HeaderProps {
    className?: string
}

export const Header = memo((props: HeaderProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.Header, {}, [className])}>
            <div className={styles.Wrapper}>
                <Icon Svg={<ChatIcon />} />
            </div>
        </div>
    );
});