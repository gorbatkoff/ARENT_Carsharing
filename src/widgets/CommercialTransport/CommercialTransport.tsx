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
        {/* <div className={classNames(styles.firstColumn)}> */}
          <TileLink className={styles.transportListItem} url="#">
            Легкие коммерческие
          </TileLink>
          <TileLink className={styles.transportListItem} url="#">
            Грузовики
          </TileLink>
          <div className={classNames(styles.secondColumn)}>
          <TileLink className={styles.truckItem} url="#">
            Седельные тягачи
          </TileLink>
          <Button theme={ButtonTheme.PRIMARY} className={styles.button}>
            Посмотреть все
          </Button>
        </div>
          <TileLink className={styles.transportListItem} url="#">
            Строительная и дорожная
          </TileLink>
          <TileLink className={styles.transportListItem} url="#">
            Погрузчики
          </TileLink>
          
        {/* </div> */}
        
      </div>
    </div>
  );
});
