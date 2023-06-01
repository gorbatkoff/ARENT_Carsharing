import React, { memo, ReactNode } from "react";


function Test() {
  return <input type="text" value={"push master"} />;
}

export default memo(Test);
