import React, { memo, ReactNode, CSSProperties } from "react";
import styles from "./TileArticle.module.scss";
import classNames from "classnames";


interface TileArticleProps {
  children: ReactNode;
  url: string;
  width: string | number;
  height: string | number;
  imageUrl: string;
}

function TileArticle(props: TileArticleProps) {
  const { children, url, width, height, imageUrl } = props;

  const cls: CSSProperties = {
    width,
    height,
  };

  return (
    <div className={classNames(styles.TileArticle)}>
    <a className={classNames(styles.tileArticleImg)} style={cls} href={url}>
        <img  src={imageUrl}></img>  
    </a>
    <a className={classNames(styles.tileArticleTitle)}  href={url}>
        {children}
    </a>
    </div>
 
  );
}

export default memo(TileArticle);
