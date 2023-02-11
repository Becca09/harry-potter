import React, { useState } from "react";

interface InputProps {
    placeholder: string;
    styling: string;
    onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange, styling }) => {
    const [value, setValue] = useState("");

    return (
        <>
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={placeholder}
                className={styling}
            />
        </>

    );
};

export default Input;
