import { memo } from "react";
import styles from "./MainPage.module.scss";
import classNames from "classnames";
import TileLink from "shared/ui/TileLink/TileLink";

interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.MainPage, {}, [className])}>
      <TileLink height={"237px"} width={"330px"} url={"https://google.com"}>
        Грузовики
      </TileLink>
      <TileLink height={"237px"} width={"330px"} url={"https://google.com"}>
        Легкие коммерческие
      </TileLink>
      <TileLink height={"237px"} width={"330px"} url={"https://google.com"}>
        Строительная и дорожная
      </TileLink>
    </div>
  );
};

export default memo(MainPage);
