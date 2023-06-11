import React from 'react'
import styles from "./OwnerType.module.scss";
import classNames from "classnames";
import {Icon} from "shared/ui/Icon/Icon"
import Type from "shared/assets/images/owner.svg"

function Owner() {
    return (
        <div className={classNames(styles.union, {}, [styles.owner])}>
            <Icon Svg={Type}/>
            <p>Собственник</p>
        </div>
    )
}

export default Owner