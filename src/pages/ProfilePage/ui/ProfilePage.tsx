import {memo} from "react";
import classNames from "classnames";

interface ProfilePageProps {
    className?: string
}

export const ProfilePage = memo((props: ProfilePageProps) => {

    const {className} = props;

    return (
        <div className={classNames("", {}, [className])}>
            ProfilePage
        </div>
    );
});