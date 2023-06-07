import { memo } from "react";

import styles from "./MarksTable.module.scss";
import classNames from "classnames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import Text, { TextTheme } from "shared/ui/Text/Text";
import { arrayOfBrands } from "../model/mocks/brands";

interface MarksTableProps {
    className?: string
}

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