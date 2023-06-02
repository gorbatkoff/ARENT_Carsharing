import {memo} from "react";

import styles from "./MainPage.module.scss";
import classNames from "classnames";
import {Header} from "widgets/Header";

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
            <Header />
        </div>
    );
};

export default memo(MainPage)