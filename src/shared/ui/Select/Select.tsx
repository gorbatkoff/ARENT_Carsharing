import React, {CSSProperties} from 'react';
import Select, {OnChangeValue} from 'react-select';
import style from "./Select.module.scss"

const groupStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: "200px",
};

const groupBadgeStyles: CSSProperties = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 8,
    fontWeight: 'normal',
    lineHeight: '1',
    padding: '0.17em 0.5em',
    textAlign: 'center',
};

interface Type {
    label: string,
    options: Array<any>
}

const formatGroupLabel = (data: Type) => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const handleChange = (e: OnChangeValue<unknown, false>) => {
    console.log(e);
}

interface Props {
    placeholder?: string,
    data: Array<any>,
    label?: string,
    width?: SelectWidth,
}

export enum SelectWidth {
    "STANDARD" = "fit-content",
    "BIG" = "100%"
}

export default (props: Props) => {

    const {
        placeholder,
        label,
        width = SelectWidth.STANDARD,
        data
    } = props;


    const styles = {
        padding: "5px",
        color: "#7E8497",
        backgroundColor: "#E8EDF5",
        borderRadius: "7px",
        width,
        border: "none",
        overflow: "hidden"
    }

    const groupedOptions: Array<any> = [
        {
            label,
            options: data,
        },
    ];

    return (
        <Select
            placeholder={placeholder || "Выберите..."}
            // defaultValue={colourOptions[1]}
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
            onChange={e => handleChange(e)}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    ...styles,
                }),
            }}
            className={style.Select}
        />
    );
}
