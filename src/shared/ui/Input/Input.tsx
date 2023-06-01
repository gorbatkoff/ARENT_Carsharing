import React, { memo, ReactNode } from "react";

function Test() {
  return <input type="text" value={"new text"} />;
}

export default memo(Test);
