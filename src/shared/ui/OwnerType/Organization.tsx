import React from 'react'
import styles from "./OwnerType.module.scss";
import classNames from "classnames";
import {Icon} from "shared/ui/Icon/Icon";
import Type from "shared/assets/images/organization.svg";

function Organization() {
    return (
        <div className={classNames(styles.union, {}, [styles.organization])}>
            <Icon Svg={Type}/>
            <p>Юр.Лицо</p>
        </div>
    )
}

export default Organization