import { memo } from "react";

import styles from "./AdSearch.module.scss";
import classNames from "classnames";

import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Text, { TextTheme,TextSize } from "shared/ui/Text/Text";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Icon } from "shared/ui/Icon/Icon";
import { MarksTable } from "entities/MarksTable/ui/MarksTable";
import { Card } from "shared/ui/Card/Card";

import { brandList } from "../model/mocks/brandList";
import { advertiseCardList } from "../model/mocks/advertiseCardList";

interface AdSearchProps {
    className?: string
}

const renderAdvertises = () =>{
    return advertiseCardList.map((item,index)=>{
        return <div className={classNames(styles.advertiseCard)} key={index}>
            <Text description={"Реклама"} theme={TextTheme.DEFAULT} size={TextSize.S}/>
            <Card {...item} theme={TextTheme.DEFAULT} />
        </div>
    })
}

const renderBrands = () => {
    return brandList.map((item,index)=>{
        return <AppLink to={item.link} key={index}>
            <Icon Svg={item.icon}></Icon>
        </AppLink>
    })
}

export const AdSearch = memo((props: AdSearchProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.AdSearch, {}, [className])}>
            <div className={classNames(styles.firstColumn)}>
                <Text title="Поиск объявлений"/>
                <div className={styles.sortingButtons}>
                    <Button theme={ButtonTheme.INFO}>Эконом</Button>
                    <Button theme={ButtonTheme.INFO}>Комфорт</Button>
                    <Button theme={ButtonTheme.INFO}>Бизнес</Button>
                    <Button theme={ButtonTheme.INFO}>Премиум</Button>
                </div>

                <div className={classNames(styles.brandList)}>
                    {renderBrands()}
                </div>
                <MarksTable/>
                <Button
                    className={classNames(styles.showAdsButton)}
                    theme={ButtonTheme.PRIMARY}>
                        Показать 7 532 предложения
                </Button>

            </div>
            <div className={classNames(styles.secondColumn)}>
                {renderAdvertises()}
            </div>
        </div>
    );
});