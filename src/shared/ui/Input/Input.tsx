import React, { memo, ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

function Test() {
  return <input type="text" value={"new text"} />;
}

export default memo(Test);
