import React, { memo, ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

function Test() {
  const text = 'asdsd'
  return <input type="text" value={text} />;
}

export default memo(Test);
