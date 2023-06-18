import {memo} from "react";
import styles from "./AdvertContact.module.scss";
import classNames from "classnames";
import {Price, PriceSize} from "shared/ui/Price/Price";
import Button from "shared/ui/Button/Button";
import Text, {TextTheme} from "shared/ui/Text/Text";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Row} from "shared/ui/Row/Row";

interface AdvertContactProps {
    className?: string
}

export const AdvertContact = (props: AdvertContactProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.AdvertContact, {}, [className])}>
            <Price price={2500} size={PriceSize.LARGE}/>

            <div className={styles.buttons}>
                <Button>
                    Написать продавцу
                </Button>

                <Button>
                    Забронировать
                </Button>
            </div>

            <Row className={styles.author}>
                <div>
                    <Text description="Александр" theme={TextTheme.BLACK}/>
                    <Text description="Успешных сделок: 23" theme={TextTheme.PRIMARY}/>
                    <Text description="Объявлений: 35" theme={TextTheme.PRIMARY}/>
                </div>

                <Avatar src="https://i.pinimg.com/736x/7a/ec/6c/7aec6c4c8ca14b312e94b05134b234e5.jpg"/>
            </Row>
        </div>
    );
};