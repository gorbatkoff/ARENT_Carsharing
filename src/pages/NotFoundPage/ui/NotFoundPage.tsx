import {memo} from "react";

import styles from "./NotFoundPage.module.scss";
import classNames from "classnames";

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            <div>404 Page Not Found</div>
        </div>
    );
});