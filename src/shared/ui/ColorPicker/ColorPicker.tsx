import React, {CSSProperties, memo} from "react";
import styles from "./ColorPicker.module.scss";
import classNames from "classnames";



interface ColorPickerProps {
	className?: string,
	colorName?:string,
	colorHex?:string,
	onClickFunc?:  React.MouseEventHandler<HTMLButtonElement>,
}


export const ColorPicker = memo((props:ColorPickerProps)=>{
    const {className,
        colorName="white",
        colorHex="#FFFFFF",
        onClickFunc,
    } = props;

    const inlineStyles :CSSProperties= {
        "backgroundColor": colorHex,
        // "border": "1px solid" + colorHex,
    }

    return (
        <button className={classNames(className,styles.ColorPicker)} style={inlineStyles} >
        </button>
    );
})