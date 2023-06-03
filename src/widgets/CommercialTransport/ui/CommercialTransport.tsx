import {memo} from "react";
import styles from "./CommercialTransport.module.scss";
import classNames from "classnames";
import Text from "shared/ui/Text/Text";
import TileLink from "shared/ui/TileLink/TileLink";
import Button from "shared/ui/Button/Button";

interface CommercialTransportProps {
    className?: string;
}

export const CommercialTransport = memo((props: CommercialTransportProps) => {
    const {className} = props;

    return (
        <div className={classNames(styles.CommercialTransport, {}, [className])}>

            <Text title="Коммерческий транспорт"/>

            <div className={classNames(styles.CommercialTransportList)}>

                <TileLink className={styles.transportListItem} urlLink="/commercial">
                    Легкие коммерческие
                </TileLink>

                <TileLink className={styles.transportListItem} urlLink="/commercial">
                    Грузовики
                </TileLink>

                <div className={classNames(styles.secondColumn)}>
                    <TileLink className={styles.truckItem} urlLink="/commercial">
                        Седельные тягачи
                    </TileLink>
                    <Button className={styles.button}>
                        Посмотреть все
                    </Button>
                </div>

                <TileLink className={styles.transportListItem} urlLink="/commercial">
                    Строительная и дорожная
                </TileLink>

                <TileLink className={styles.transportListItem} urlLink="/commercial">
                    Погрузчики
                </TileLink>
            </div>
        </div>
    );
});
