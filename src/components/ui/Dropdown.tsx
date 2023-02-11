import React, { useState } from "react";

interface DropdownFilterProps {
    defaultOption: string
    styling:string
    options: Array<{ value: string, label: string }>;
    onchange: (value: string) => void;
}

const Dropdown: React.FC<DropdownFilterProps> = ({ options, onchange, defaultOption, styling }) => {
    const [selectedValue, setSelectedValue] = useState('')
    return (
        <>
            <select
                className={styling}
                value={selectedValue}
                onChange={(e) => {
                    setSelectedValue(e.target.value)
                    onchange(e.target.value)
                }}
            >
                <option>{defaultOption}</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </>

    )
}

export default Dropdown