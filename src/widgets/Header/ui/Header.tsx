import {memo} from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import BurgerMenu from "shared/assets/images/burger-menu-20-20.svg";
import ArentLogo from "shared/assets/images/ARENT-TITLE.svg";
import ArentTitle from "shared/assets/images/ARENT-LOGO.svg";
import {Icon} from "shared/ui/Icon/Icon";
import {Input} from "shared/ui/Input/Input";
import Button, {ButtonTheme} from "shared/ui/Button/Button";

interface HeaderProps {
    className?: string
}

export const Header = memo((props: HeaderProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.Header, {}, [className])}>
            <div className={styles.Wrapper}>

                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={BurgerMenu}/>
                </Button>

                <div className={styles.logo}>
                    <Icon Svg={ArentTitle}/>
                    <Icon Svg={ArentLogo}/>
                </div>

                <Input placeholder="Поиск объявлений" className={styles.Input}/>

                <Button theme={ButtonTheme.INFO} className={styles.Button}>
                    Войти
                </Button>

                <Button theme={ButtonTheme.PRIMARY} className={styles.Button}>
                    Разместить объявление
                </Button>
            </div>
        </div>
    );
});