import {memo} from "react";
import styles from "./SearchFilters.module.scss";
import classNames from "classnames";
import Select, {SelectWidth} from "shared/ui/Select/Select";
import {marksList} from "../model/data/data";
import {Row} from "shared/ui/Row/Row";

interface SearchFiltersProps {
    className?: string
}

export const SearchFilters = memo((props: SearchFiltersProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.SearchFilters, {}, [className])}>
            <div className={styles.filterBlock}>
                <Select data={marksList} width={SelectWidth.BIG} label="Марка" placeholder="Марка"/>
                <Row>
                    <Select data={marksList} label="Кузов" placeholder="Кузов"/>
                    <Select data={marksList} label="КПП" placeholder="КПП"/>
                </Row>
                <Row>
                    <Select data={marksList} label="Год от" placeholder="Год от"/>
                    <Select data={marksList} label="До" placeholder="До"/>
                </Row>
            </div>

            <div className={styles.filterBlock}>
                <Select data={marksList} width={SelectWidth.BIG} label="Модель" placeholder="Модель"/>
                <Row>
                    <Select data={marksList} label="Двигатель" placeholder="Двигатель"/>
                    <Select data={marksList} label="Привод" placeholder="Привод"/>
                </Row>
                <Row>
                    <Select data={marksList} label="Дата аренды" placeholder="Дата аренды"/>
                    <Select data={marksList} label="По часам" placeholder="По часам"/>
                </Row>
            </div>

            <div className={styles.filterBlock}>
                <Select data={marksList} width={SelectWidth.BIG} label="Поколение" placeholder="Поколение"/>
                <Row>
                    <Select data={marksList} label="Объём от, л" placeholder="Объём от, л"/>
                    <Select data={marksList} label="До" placeholder="До"/>
                </Row>
                <Row>
                    <Select data={marksList} label="Цена от, ₽" placeholder="Цена от, ₽"/>
                    <Select data={marksList} label="До" placeholder="До"/>
                </Row>
            </div>

        </div>
    );
});