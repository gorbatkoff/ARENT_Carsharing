import styles from "./AdvertViewPage.module.scss";
import classNames from "classnames";
import {Container} from "shared/ui/Container/Container";
import {AdvertActions, AdvertQuestions} from "features/AdvertActions";
import Text, {TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Picture, PictureSize} from "shared/ui/Picture/Picture";
import {Row} from "shared/ui/Row/Row";
import {Column} from "shared/ui/Column/Column";
import Group, {GroupTheme} from "shared/ui/Group/Group";
import {AdvertBlock} from "widgets/AdvertBlock";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Price, PriceSize} from "shared/ui/Price/Price";
import Button from "shared/ui/Button/Button";
import {AdvertContact} from "features/AdvertContact";

interface AdvertViewPageProps {
    className?: string
}

const AdvertViewPage = (props: AdvertViewPageProps) => {

    const {className} = props;

    return (
        <>
            <Container className={classNames(styles.AdvertViewPage, {}, [className])}>
                <div>
                    <Text title="BMW X5 48i II (E70)" description="Опубликовано Вчера в 12:21"/>

                    <AdvertActions/>

                    <Picture size={PictureSize.BIG}/>

                    <Column
                        className={styles.subPictures}
                        count={5}
                        elementWidth="110px"
                        gap="10px"
                    >
                        <Picture size={PictureSize.SMALL}/>
                        <Picture size={PictureSize.SMALL}/>
                        <Picture size={PictureSize.SMALL}/>
                        <Picture size={PictureSize.SMALL}/>
                        <Picture size={PictureSize.SMALL}/>
                    </Column>

                    <Text title="Характеристики" className={styles.header}/>

                    <Row className={styles.characteristics}>
                        <div>
                            <Group groupKey="Год выпуска" groupValue="2002"/>
                            <Group groupKey="Поколение" groupValue="E53 (1999—2003)"/>
                            <Group groupKey="Двигатель" groupValue="4.8 л / 355 л.с. / Бензин"/>
                            <Group groupKey="Коробка" groupValue="Автоматическая2"/>
                            <Group groupKey="Пробег" groupValue="214 000 км"/>
                            <Group groupKey="Цвет" groupValue="Белый"/>
                        </div>
                        <div>
                            <Group groupKey="Привод" groupValue="Полный"/>
                            <Group groupKey="Руль" groupValue="Левый"/>
                            <Group groupKey="Таможня" groupValue="Растаможен"/>
                            <Group theme={GroupTheme.PRIMARY} groupKey="VIN" groupValue="WBA**************"/>
                            <Group theme={GroupTheme.PRIMARY} groupKey="Госномер" groupValue="******|122"/>
                            <Group theme={GroupTheme.PRIMARY} groupKey="ПТС" groupValue="77 ** ******"/>
                        </div>
                    </Row>

                    <Text title="Описание" className={styles.header}/>

                    <Text
                        className={styles.description}
                        theme={TextTheme.BLACK}
                        align={TextAlign.JUSTIFY}
                        description="Значимость этих проблем настолько очевидна, что новая модель
                   организационной деятельности позволяет оценить значение
                   направлений прогрессивного развития. Задача организации, в
                   особенности же консультация с профессионалами из IT представляет
                   собой интересный эксперимент проверки системы масштабного
                   изменения ряда параметров. Дорогие друзья, выбранный нами
                   инновационный путь требует определения и уточнения
                   соответствующих условий активизации?"
                    />

                    <Text title="Дополнительные опции" className={styles.header}/>

                    <Text
                        description="Комфорт"
                        theme={TextTheme.BLACK}
                        className={styles.subDescription}
                    />

                    <div className={styles.container}>
                        <Group groupKey="Кондиционер" groupValue="Система выбора режима движения"/>
                        <Group groupKey="Круиз-контроль" groupValue="Система помощи при парковке"/>
                        <Group groupKey="Мультифункциональное рулевое колесо" groupValue="Система доступа без ключа"/>
                        <Group groupKey="Регулировка руля" groupValue="Электроскладывание зеркал"/>
                        <Group groupKey="Бортовой компьютер" groupValue="Электропривод зеркал"/>
                        <Group groupKey="Усилитель руля"/>
                    </div>

                    <Text
                        description="Безопасность"
                        theme={TextTheme.BLACK}
                        className={styles.subDescription}
                    />

                    <div className={styles.container}>
                        <Group groupKey="Подушки безопасности" groupValue="Система стабилизации ESP"/>
                        <Group groupKey="Вспомогательные системы" groupValue="Антиблокировочная система ABS"/>
                        <Group groupKey="Система крепления Isofix"/>
                    </div>

                    <Text
                        description="Мультимедиа"
                        theme={TextTheme.BLACK}
                        className={styles.subDescription}
                    />

                    <div className={styles.container}>
                        <Group groupKey="Аудиосистема" groupValue="Bluetooth"/>
                        <Group groupKey="Мультимедиа с ЖК-экраном" groupValue="USB"/>
                        <Group groupKey="Навигационная система" groupValue="AUX"/>
                        <Group groupKey="Розетка 12V"/>
                    </div>

                    <Text title="Спросите у продавца" className={styles.header}/>

                    <AdvertQuestions/>

                </div>

                <div>
                    <AdvertContact/>
                </div>

                <div className={styles.clearBox}/>

            </Container>

            <Container>
                <AdvertBlock title="Похожие объявления"/>
                <AdvertBlock title="Спец предложения"/>
            </Container>
        </>

    );
};

export default AdvertViewPage