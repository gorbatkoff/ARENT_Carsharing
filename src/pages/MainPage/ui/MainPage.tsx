import {memo} from "react";
import styles from "./MainPage.module.scss";
import classNames from "classnames";
import {Container} from "shared/ui/Container/Container";
import Text from "shared/ui/Text/Text";
interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const {className} = props;

    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
            <Container>
                <Text
                    title="Легковые автомобили в Москве"
                    description="7 532 предложения"
                />
            </Container>

        </div>
    );
};

export default memo(MainPage);
