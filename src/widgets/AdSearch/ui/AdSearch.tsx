import {memo} from "react";

import styles from "./AdSearch.module.scss";
import classNames from "classnames";
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import Text from "shared/ui/Text/Text";

interface AdSearchProps {
    className?: string
}


export const AdSearch = memo((props: AdSearchProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.AdSearch, {}, [className])}>
            <Text title="Поиск объявлений"/>
            <div className={styles.sortingButtons}>
                <Button theme={ButtonTheme.INFO}>Эконом</Button>
                <Button theme={ButtonTheme.INFO}>Комфорт</Button>
                <Button theme={ButtonTheme.INFO}>Бизнес</Button>
                <Button theme={ButtonTheme.INFO}>Премиум</Button>
            </div>
        </div>
    );
});