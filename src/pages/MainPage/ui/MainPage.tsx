import {memo} from 'react'
import styles from './MainPage.module.scss'
import classNames from 'classnames'
import {Container} from 'shared/ui/Container/Container'
import Text from 'shared/ui/Text/Text'
import {CommercialTransport} from 'widgets/CommercialTransport'
import {Motorcycles} from 'widgets/Motorcycles'
import {HandBook} from 'widgets/HandBook'
import {AdvertBlock} from "widgets/AdvertBlock";
import {AdSearch} from "widgets/AdSearch/ui/AdSearch";

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {

    const {className} = props

    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
            <Container>
                <Text
                    title="Легковые автомобили в Москве"
                    description="7 532 предложения"
                />
            </Container>

            <Container>
                <AdSearch/>
                {/* Нужно получать список просмотренных объявлений выше*/}
                <AdvertBlock title="Просмотренные объявления"/>
                {/* и отрисовывать по условию */}
                <CommercialTransport/>
                <Motorcycles/>
                <HandBook/>
            </Container>
        </div>
    )

}

export default memo(MainPage)
