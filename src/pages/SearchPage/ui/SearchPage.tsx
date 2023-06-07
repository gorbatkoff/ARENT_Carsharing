import styles from "./SearchPage.module.scss";
import classNames from "classnames";
import {AdCard} from "entities/AdCard/ui/AdCard";
import {Container} from "shared/ui/Container/Container";
import Text from "shared/ui/Text/Text";

interface SearchPageProps {
    className?: string
}


const data = {
    title: "BMW X5 2002",
    modification: "xDrive M50d AT Base",
    engine: "3.0 л (231 л.с.), дизель, АКПП, 4WD",
    description: "Описание объявления (при наличии) Значимость этих проблем настолько",
    date: "Москва, Пражская 2 часа назад",
    price: 2500,
    owner: 2
}

const SearchPage = (props: SearchPageProps) => {

    const {className} = props;

    return (
        <Container className={classNames(styles.SearchPage, {}, [className])}>
            <div className={styles.content}>
                <Text title="Поиск объявлений в Москве"/>

                <AdCard {...data}/>
                <AdCard {...data}/>
                <AdCard {...data}/>
                <AdCard {...data}/>
                <AdCard {...data}/>
            </div>

            <div className={styles.clearBox}/>
        </Container>
    );
};

export default SearchPage;