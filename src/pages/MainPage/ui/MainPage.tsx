import {memo} from "react";
import styles from "./MainPage.module.scss";
import classNames from "classnames";

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
            MainPage
        </div>
    );
};

export default memo(MainPage)