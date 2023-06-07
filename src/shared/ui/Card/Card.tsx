import {memo} from "react";

import styles from "./Card.module.scss";
import classNames from "classnames";
import Text, {TextSize, TextTheme} from "shared/ui/Text/Text";
import {Price} from "shared/ui/Price/Price";

interface CardProps {
    className?: string;
    imageUrl?: string;
    title?: string;
    price?: number | string;
    description?: string;
    postscription?: string;
    theme?: TextTheme;
}

export const Card = memo((props: CardProps) => {

    const {
        className,
        title,
        description,
        price,
        imageUrl,
        postscription,
        theme = TextTheme.PRIMARY
    } = props;

    return (
        <div className={classNames(styles.Card, {}, [className])}>
            <div className={styles.imgWrapper}>
                {imageUrl ? <img src={imageUrl} alt={title}/> : null}
            </div>
            {title && <Text title={title} theme={theme} size={TextSize.S}/>}
            {price && <Price price={price}/>}
            {description && <Text description={description} theme={TextTheme.DEFAULT}/>}
            {postscription && <Text description={postscription} theme={TextTheme.DEFAULT}/>}
        </div>
    );
});