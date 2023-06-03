import {memo} from "react";
import styles from "./Motorcycles.module.scss";
import classNames from "classnames";
import Text from "shared/ui/Text/Text";
import TileLink from "shared/ui/TileLink/TileLink";

interface MotorcyclesProps {
    className?: string;
}

export const Motorcycles = memo((props: MotorcyclesProps) => {
    const {className} = props;

    return (
        <div className={classNames(styles.Motorcycles, {}, [className])}>
            <Text title="Мотоциклы и мототехника"/>
            <div className={classNames(styles.motoList)}>
                <TileLink className={styles.motoListItem} urlLink="/moto">
                    Мотоциклы
                </TileLink>
                <TileLink className={styles.motoListItem} urlLink="/moto">
                    Скутеры
                </TileLink>
                <TileLink className={styles.motoListItem} urlLink="/moto">
                    Мотовездеходы
                </TileLink>
                <TileLink className={styles.motoListItem} urlLink="/moto">
                    Снегоходы
                </TileLink>
            </div>
        </div>
    );
});
