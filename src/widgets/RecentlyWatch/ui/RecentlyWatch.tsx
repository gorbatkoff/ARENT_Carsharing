import {memo} from "react";
import styles from "./RecentlyWatch.module.scss";
import classNames from "classnames";
import Text from "shared/ui/Text/Text";
import {Card} from "shared/ui/Card/Card";

interface RecentlyWatchProps {
    className?: string
}

export const RecentlyWatch = memo((props: RecentlyWatchProps) => {

    const {className} = props;

    const renderCards = (count: number) => {

        const card = (<Card
            title="BMW X5 2002"
            price={2500}
            imageUrl="https://clck.ru/34be6a"
            description="Москва, Пражская"
            postscription={"8 часов назад"}
        />)

        const output = new Array(count);

        for (let i = 0; i < count; i++) {
            output.push(card);
        }

        return output.map(item => item)
    }

    return (
        <div className={classNames(styles.RecentlyWatch, {}, [className])}>
            <Text title="Просмотренные объявления"/>
            <div className={styles.cardList}>
                {renderCards(4)}
            </div>
        </div>
    );
});