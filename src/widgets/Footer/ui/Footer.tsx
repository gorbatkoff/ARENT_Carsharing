import {memo} from "react";

import styles from "./Footer.module.scss";
import classNames from "classnames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {Icon} from "shared/ui/Icon/Icon";
import {Container} from "shared/ui/Container/Container";
import Logo from "shared/assets/images/ARENT-TITLE.svg"

interface FooterProps {
    className?: string
}

const arrayOfFooterLinks = [
    ["Легковой транспорт", "/"],
    ["Коммерческий транспорт", "/"],
    ["Мото", "/"],
    ["Электромобили", "/"],
    ["Водный транспорт", "/"],
    ["Реклама на сайте", "/"],
    ["Техподдержка", "/"],
    ["Подать объявление", "/"],
    ["Правовые вопросы", "/"],
    ["Безопасность", "/"]
]

const arrayOfUnderFooterLinks = [
    ["О проекте", "/"],
    ["Помощь", "/"],
    ["Правила", "/"],
    ["Пользовательское соглашение", "/"],
    ["Модели авто", "/"],
]

export const Footer = memo((props: FooterProps) => {

    const {className} = props;

    return (
        <Container>
            <div className={classNames(styles.Footer, {}, [className])}>
                <div className={styles.links}>
                    {arrayOfFooterLinks.map((link, index) => {
                        return <AppLink to={link[1]} key={index}>
                            {link[0]}
                        </AppLink>
                    })}
                </div>

                <hr/>

                <div>
                    <div>
                        <Icon Svg={Logo}/>
                    </div>

                    <div>
                        {arrayOfFooterLinks.map((link, index) => {
                            return <AppLink
                                to={link[1]}
                                key={index}
                                theme={AppLinkTheme.GRAY}
                            >
                                {link[0]}
                            </AppLink>
                        })}
                    </div>
                </div>

            </div>
        </Container>
    );
});