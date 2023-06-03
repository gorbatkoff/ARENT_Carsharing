import React, {InputHTMLAttributes, memo} from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

// Новые тип, в котором исключены свойства value, onChange и readonly;
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">

interface InputProps extends HTMLInputProps {
    className?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
    theme?: InputTheme;
}

export enum InputTheme {
    LIGHT = "light",
    DARK = "dark",
}

export const Input = memo((props: InputProps) => {

    const {
        className,
        placeholder,
        value,
        onChange,
        type = "text",
        readonly,
        theme = InputTheme.DARK,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    return (
        <div className={classNames(styles.InputWrapper, {}, [className, styles[theme]])}>
            <input
                className={styles.Input}
                value={value}
                type={type}
                placeholder={placeholder}
                readOnly={readonly}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});