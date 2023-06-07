import {memo} from "react";

import styles from "./MarksTable.module.scss";
import classNames from "classnames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import Text,{TextTheme} from "shared/ui/Text/Text";

interface MarksTableProps {
    className?: string
}
const arrayOfBrands = [
    { brand:'AUDI',
        adCount:152, link:"/"},
    {brand:'BMW',
        adCount:152, link:"/"},
    {brand:'Changan',
        adCount:152, link:"/"},
    {brand:'Chery',
        adCount:152, link:"/"},
    {brand:'Chevrolet',
        adCount:152, link:"/"},
    {brand:'Citroen',
        adCount:152, link:"/"},
    { brand:'Daewoo',
        adCount:152, link:"/"},
    {brand:'Ford',
        adCount:152, link:"/"},
    {brand:'Geely',
        adCount:152, link:"/"},
    {brand:'Haval',
        adCount:152, link:"/"},
    {brand:'Honda',
        adCount:152, link:"/"},
    {brand:'Hyundai',
        adCount:152, link:"/"},
    {brand:'Infinity',
        adCount:152, link:"/"},
    {brand:'Kia',
        adCount:152, link:"/"},
    {brand:'Land Rover',
        adCount:152, link:"/"},
    {brand:'Lexus',
        adCount:152, link:"/"},
    {brand:'Mazda',
        adCount:152, link:"/"},
    {brand:'Mercedes-Benz',
        adCount:152, link:"/"},
    {brand:'Mitsubishi',
        adCount:152, link:"/"},
    {brand:'Nissan',
        adCount:152, link:"/"},
    {brand:'Opel',
        adCount:152, link:"/"},
    {brand:'Peugeot',
        adCount:152, link:"/"},
    {brand:'Porsche',
        adCount:152, link:"/"},
    {brand:'Renault',
        adCount:152, link:"/"},
    {brand:'Skoda',
        adCount:152, link:"/"},
    {brand:'Subaru',
        adCount:152, link:"/"},
    {brand:'Suzuki',
        adCount:152, link:"/"},
    {brand:'Toyota',
        adCount:152, link:"/"},
    {brand:'Tesla',
        adCount:152, link:"/"},
    {brand:'Volkswagen',
        adCount:152, link:"/"},
    {brand:'Volvo',
        adCount:152, link:"/"},
    {brand:'ВАЗ (LADA)',
        adCount:152, link:"/"},
    {brand:'ГАЗ',
        adCount:152, link:"/"},
    { brand:'УАЗ',
        adCount:152, link:"/"},
];

export const MarksTable = memo((props: MarksTableProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.MarksTable, {}, [className])}>
            {
                arrayOfBrands.map((brand, index) =>
                    <div className={classNames(styles.brandItem)} key={index}>
                        <AppLink to={brand.link}>{brand.brand}</AppLink>
                        <Text description={brand.adCount} theme={TextTheme.DEFAULT}/>
                    </div>
                )
            }
        </div>
    );
});