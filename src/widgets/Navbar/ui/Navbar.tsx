import { memo } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import { Container } from "shared/ui/Container/Container";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

const arrayOfNavBarLinks = [
    ["Легковые", "/"],
    ["Коммерческие", "/"],
    ["Мото", "/"],
    ["Электромобили", "/"],
    ["Водный транспорт", "/"],
];

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;

    return (
        <div className={classNames(className, styles.NavigationBar)}>
            <Container className={styles.container}>
                {arrayOfNavBarLinks.map((link, index) => {
                    return (
                        <AppLink to={link[1]} key={index} theme={AppLinkTheme.WHITE}>
                            {link[0]}
                        </AppLink>
                    );
                })}
            </Container>
        </div>
    );
});
