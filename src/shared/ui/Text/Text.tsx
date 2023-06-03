import React, { memo, ReactNode, CSSProperties } from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
  TITLE = "title_theme",
  DEFAULT = "default",
}

export enum TextAlign {
  RIGHT = "right",
  CENTER = "center",
  LEFT = "left",
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface TextProps {
  className?: string;
  title?: string;
  description?: string;
  theme?: string;
  align?: string;
  size?: string;
}

export default function Text(props: TextProps) {
  const {
    className,
    title,
    description,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const addition = [className, styles[theme], styles[align],styles[size]];

  return (
    <div className={classNames(styles.Text, {}, [...addition])}>
      {title && <h4 className={styles.title}>{title}</h4>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

