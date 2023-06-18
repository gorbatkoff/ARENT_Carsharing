import {memo} from "react";
import styles from "./AdvertActions.module.scss";
import classNames from "classnames";
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import Favorite from "shared/assets/images/favorite.svg";

interface AdvertActionsProps {
    className?: string
}

export const AdvertActions = memo((props: AdvertActionsProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.AdvertActions, {}, [className])}>
            <Button theme={ButtonTheme.WHITE_SECONDARY} icon={Favorite}>Добавить в избранное</Button>
            <Button theme={ButtonTheme.WHITE_SECONDARY}>Пожаловаться</Button>
        </div>
    );
});