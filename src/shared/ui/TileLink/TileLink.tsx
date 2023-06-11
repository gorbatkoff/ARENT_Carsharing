import React, { memo, ReactNode, CSSProperties } from "react";
import styles from "./TileLink.module.scss";
import classNames from "classnames";
import {AppLink} from "shared/ui/AppLink/AppLink"

interface TileLinkProps {
  id?: string;
  className?: string;
  children: ReactNode;
  urlLink: string;
  width?: string | number;
  height?: string | number;
}

function TileLink(props: TileLinkProps) {
    const { className, children, urlLink, width, height } = props;

    const cls: CSSProperties = {
        width,
        height,
    };

    return (
        <AppLink
            className={classNames(className, styles.TileLink)}
            style={cls}
            to={urlLink}
        >
            <span className={classNames(styles.tileLinkTitle)}>{children}</span>
        </AppLink>
    );
}

export default memo(TileLink);
