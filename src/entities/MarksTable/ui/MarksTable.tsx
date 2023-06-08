import {memo} from "react";

import styles from "./MarksTable.module.scss";
import classNames from "classnames";
import {AppLink} from "shared/ui/AppLink/AppLink";
import Text, {TextTheme} from "shared/ui/Text/Text";
import {arrayOfBrands} from "../model/mocks/brands";

interface BrandArrayElement {
    brand: string;
    adCount: number;
    link: string;
}

interface MarksTableProps {
    className?: string,
    brands?: Array<BrandArrayElement>
}

export const MarksTable = memo((props: MarksTableProps) => {

    const {
        className,
        brands = arrayOfBrands
    } = props;

    return (
        <div className={classNames(styles.MarksTable, {}, [className])}>
            {
                brands.map((brand, index) =>
                    <AppLink className={classNames(styles.brandItem)} key={index} to={brand.link}>
                        <div>{brand.brand}</div>
                        <Text description={brand.adCount} theme={TextTheme.DEFAULT}/>
                    </AppLink>
                )
            }
        </div>
    );
});