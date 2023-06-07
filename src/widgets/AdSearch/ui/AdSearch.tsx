import {memo} from "react";

import styles from "./AdSearch.module.scss";
import classNames from "classnames";
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import Text,{TextTheme,TextSize} from "shared/ui/Text/Text";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Icon } from "shared/ui/Icon/Icon";

import VAZIcon from "shared/assets/images/VAZ.svg";
import ChevyIcon from "shared/assets/images/Chevy.svg";
import FordIcon from "shared/assets/images/Ford.svg";
import HyundaiIcon from "shared/assets/images/Hyundai.svg";
import KIAIcon from "shared/assets/images/KIA.svg";
import MercedesBenzIcon from "shared/assets/images/Mercedes-Benz.svg";
import NissanIcon from "shared/assets/images/Nissan.svg";
import RenaultIcon from "shared/assets/images/Renault.svg";
import ToyotaIcon from "shared/assets/images/Toyota.svg";
import VolkswagenIcon from "shared/assets/images/Volkswagen.svg";
import { MarksTable } from "entities/MarksTable/ui/MarksTable";
import { Card } from "shared/ui/Card/Card";



interface AdSearchProps {
    className?: string
}
const brandList = [
    {icon: VAZIcon,
        link: "/"},
    {icon: ChevyIcon,
        link: "/"},
    {icon: FordIcon,
        link: "/"},
    {icon: HyundaiIcon,
        link: "/"},
    {icon: KIAIcon,
        link: "/"},
    {icon: MercedesBenzIcon,
        link: "/"},
    {icon: NissanIcon,
        link: "/"},
    {icon: RenaultIcon,
        link: "/"},
    {icon:ToyotaIcon ,
        link: "/"},
    {icon:VolkswagenIcon ,
        link: "/"},
];

const advertiseCardList =[
    {
        title:"Заголовк рекламного объявления",
        imageUrl:"https://clck.ru/34be6a",
        description:"Подекст рекламного объявления с подробной информацией",
    },
    {
        title:"Заголовк рекламного объявления",
        imageUrl:"https://clck.ru/34be6a",
        description:"Подекст рекламного объявления с подробной информацией",
    }
]

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
                    {brandList.map((item,index)=>{
                        return <AppLink to={item.link} key={index}>
                            <Icon Svg={item.icon}></Icon>
                        </AppLink>
                    })}
                </div>
                <MarksTable/>
                <Button className={classNames(styles.showAdsButton)} theme={ButtonTheme.PRIMARY}>Показать 7 532 предложения </Button>
            </div>
            <div className={classNames(styles.secondColumn)}>
                {advertiseCardList.map((item,index)=>{
                    return <div className={classNames(styles.advertiseCard)} key={index}>
                        <Text description={"Реклама"} theme={TextTheme.DEFAULT} size={TextSize.S}/>
                        <Card {...item} theme={TextTheme.DEFAULT} />
                    </div>
                })}
            </div>
        </div>
    );
});