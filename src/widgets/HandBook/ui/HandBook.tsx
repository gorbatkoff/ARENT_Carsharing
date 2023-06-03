import { memo } from "react";
import styles from "./HandBook.module.scss";
import classNames from "classnames";
import { Container } from "shared/ui/Container/Container";
import Text from "shared/ui/Text/Text";
import TileArticle from "shared/ui/TileArticle/TileArticle";

interface HandBookProps {
  className?: string;
}

export const HandBook = memo((props: HandBookProps) => {
    const { className } = props;

    return (
        <div className={classNames(styles.HandBook, {}, [className])}>
            <Text title="Справочник" />
            <div className={classNames(styles.handBookList)}>
                <TileArticle className={styles.handBookListItem} urlLink="#">
          Как происходит сделка
                </TileArticle>
                <TileArticle className={styles.handBookListItem} urlLink="#">
          Как разместить свое объявление
                </TileArticle>
                <TileArticle className={styles.handBookListItem} urlLink="#">
          Проверяем авто по базам
                </TileArticle>
                <TileArticle className={styles.handBookListItem} urlLink="#">
          Коммерческий транспорт и процесс регистрации
                </TileArticle>
            </div>
        </div>
    );
});
