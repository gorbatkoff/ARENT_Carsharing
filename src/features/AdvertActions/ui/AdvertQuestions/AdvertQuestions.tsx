import {memo} from "react";

import styles from "./AdvertQuestions.module.scss";
import classNames from "classnames";
import Button, {ButtonTheme} from "shared/ui/Button/Button";

interface AdvertQuestionsProps {
    className?: string
}

export const AdvertQuestions = memo((props: AdvertQuestionsProps) => {

    const {className} = props;

    return (
        <div className={classNames(styles.AdvertQuestions, {}, [className])}>
            <Button theme={ButtonTheme.INVERTED}>Объявление атктуально?</Button>
            <Button theme={ButtonTheme.INVERTED}>Где можно посмотреть?</Button>
            <Button theme={ButtonTheme.INVERTED}>В выходные аренда возможна?</Button>
        </div>
    );
});