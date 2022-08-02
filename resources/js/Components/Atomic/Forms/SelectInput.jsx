import React from "react";

const SelectInput = ({ className, options, handleOnChange, name }) => {
    const defaultValue =
        options && options.filter((option) => "selected" in option);
    return (
        <select
            className={`w-full p-4 outline-none rounded-lg shadow-xl bg-white text-gray-600 ${className}`}
            onChange={handleOnChange}
            name={name}
            defaultValue={defaultValue[0] && defaultValue[0].value}
        >
            {Array.isArray(options) &&
                options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.text}
                    </option>
                ))}
        </select>
    );
};

export default SelectInput;
