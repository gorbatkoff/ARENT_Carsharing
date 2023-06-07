import {memo} from "react";

import styles from "./AdCard.module.scss";
import classNames from "classnames";
import Text, {TextTheme} from "shared/ui/Text/Text";
import {Price, PriceSize} from "shared/ui/Price/Price";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {Icon} from "shared/ui/Icon/Icon";
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import Favorite from "shared/assets/images/favorite.svg";
import CarLogo from "shared/assets/images/Car.png"
import Owner from "shared/ui/OwnerType/Owner";
import Organization from "shared/ui/OwnerType/Organization";

interface AdCardProps {
    className?: string;
    title: string;
    modification: string;
    engine: string;
    description: string;
    date: string;
    price: string | number;
    owner: number;

}

export const AdCard = memo((props: AdCardProps) => {

    const {
        className,
        title,
        modification,
        engine,
        description,
        date,
        price,
        owner
    } = props;

    return (
        <div className={classNames(styles.AdCard, {}, [className])}>
            <AppLink to={'/advert/1/'}>
                <img src={CarLogo} alt=""/>
            </AppLink>

            <AppLink className={styles.content} to={'/advert/1/'}>
                <Text title={title} theme={TextTheme.PRIMARY}/>
                <Text description={modification}/>
                <Text description={engine} theme={TextTheme.BLACK} className={styles.engine}/>
                <Text description={description}/>
                <Text description={date} className={styles.date}/>
            </AppLink>
            <div className={styles.price}>
                <Price price={price} size={PriceSize.MEDIUM}/>
                <div className={styles.ownerType}>
                    {owner === 1 ? (<Owner />) : (<Organization />)}
                </div>
            </div>
            <div>
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={Favorite}/>
                </Button>
            </div>
        </div>
    );
});