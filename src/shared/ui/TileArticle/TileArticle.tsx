import React, {memo, ReactNode} from "react";
import styles from "./TileArticle.module.scss";
import classNames from "classnames";
import {AppLink} from "shared/ui/AppLink/AppLink";

interface TileArticleProps {
    className?: string;
    children: ReactNode;
    width?: string | number;
    height?: string | number;
    urlLink: string;
    imageUrl?: string;
}

function TileArticle(props: TileArticleProps) {
    const {className, children, urlLink, width, height, imageUrl} = props;

    const cls = {
        width,
        height,
    };

    return (
        <div className={classNames(styles.TileArticle)}>
            <AppLink
                className={classNames(className, styles.tileArticleImg)}
                style={cls}
                to={urlLink}
            >
                <img src={imageUrl}/>
            </AppLink>
            <a className={classNames(styles.tileArticleTitle)} href={urlLink}>
                {children}
            </a>
        </div>
    );
}

export default memo(TileArticle);
