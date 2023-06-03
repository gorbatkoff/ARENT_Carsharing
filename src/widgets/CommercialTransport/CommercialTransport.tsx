import { memo } from "react";
import styles from "./CommercialTransport.module.scss";
import classNames from "classnames";
import Text from "shared/ui/Text/Text";
import TileLink from "shared/ui/TileLink/TileLink";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface CommercialTransportProps {
  className?: string;
}

export const CommercialTransport = memo((props: CommercialTransportProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.CommercialTransport, {}, [className])}>
      <Text title="Коммерческий транспорт" />
      <div className={classNames(styles.CommercialTransportList)}>
        <TileLink className={styles.transportListItem} urlLink="#">
          Легкие коммерческие
        </TileLink>
        <TileLink className={styles.transportListItem} urlLink="#">
          Грузовики
        </TileLink>
        <div className={classNames(styles.secondColumn)}>
          <TileLink className={styles.truckItem} urlLink="#">
            Седельные тягачи
          </TileLink>
          <Button theme={ButtonTheme.PRIMARY} className={styles.button}>
            Посмотреть все
          </Button>
        </div>
        <TileLink className={styles.transportListItem} urlLink="#">
          Строительная и дорожная
        </TileLink>
        <TileLink className={styles.transportListItem} urlLink="#">
          Погрузчики
        </TileLink>
      </div>
    </div>
  );
});
