import {memo} from "react";
import styles from "./AdvertBlock.module.scss";
import classNames from "classnames";
import Text from "shared/ui/Text/Text";
import {Card} from "shared/ui/Card/Card";
import CarLogo from "shared/assets/images/Car.png";

interface RecentlyWatchProps {
    className?: string;
    title: string;
    arrayOfAdverts?: Array<any>
}

export const AdvertBlock = memo((props: RecentlyWatchProps) => {

    const {
        className,
        title
    } = props;

    const renderCards = (count: number) => {

        const card = (<Card
            title="BMW X5 2002"
            price={2500}
            imageUrl={CarLogo}
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
        <div className={classNames(styles.AdvertBlock, {}, [className])}>
            <Text title={title}/>
            <div className={styles.cardList}>
                {renderCards(4)}
            </div>
        </div>
    );
});