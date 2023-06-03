import React, { memo, ReactNode, CSSProperties } from "react";
import styles from "./TileArticle.module.scss";
import classNames from "classnames";

interface TileArticleProps {
  className?: string;
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  urlLink: string;
  imageUrl?: string;
}

function TileArticle(props: TileArticleProps) {
  const { className, children, urlLink, width, height, imageUrl } = props;

  const cls = {
    width,
    height,
  };

  return (
    <div className={classNames(styles.TileArticle)}>
      <a
        className={classNames(className, styles.tileArticleImg)}
        style={cls}
        href={urlLink}
      >
        <img src={imageUrl}></img>
      </a>
      <a className={classNames(styles.tileArticleTitle)} href={urlLink}>
        {children}
      </a>
    </div>
  );
}

export default memo(TileArticle);
