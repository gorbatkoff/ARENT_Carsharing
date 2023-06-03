import React, { memo, ReactNode, CSSProperties } from "react";
import styles from "./TileLink.module.scss";
import classNames from "classnames";

// export enum TileLinkTheme {
//   PRIMARY = "primary",
//   INFO = "info",
// }

// type Props = {
//   children: ReactNode;

// };
interface TileLinkProps {
  children: ReactNode;
  url: string;
  width: string | number;
  height: string | number;
  // imageUrl: string
}

function TileLink(props: TileLinkProps) {
  const { children, url, width, height } = props;

  const cls: CSSProperties = {
    width,
    height,
  };
  return (
    <div className={classNames(styles.TileLinkDiv)} >
      <a style={cls} className={classNames(styles.TileLink)} href={url}>
       <span className={classNames(styles.TileLinkTitle)}>{children}</span>
      </a>
    </div>
  );
  // return (
  //   <a className={classNames(styles.TileLink)} href={url} style={cls}>
  //     <div style={cls} className={classNames(styles.TileLinkDiv)}>{children}</div>
  //   </a>
  // );
}

export default memo(TileLink);
