import React from "react";

const RadioInput = ({
    className = "",
    name,
    value,
    label,
    checked,
    onChangeInput,
    dark = false,
}) => {
    return (
        <div className="flex items-center space-x-2 select-none">
            <input
                className="hidden peer"
                type="radio"
                name={name}
                value={value}
                id={`radio-${name}-${value}`}
                defaultChecked={checked}
                onChange={onChangeInput}
            />
            <label
                htmlFor={`radio-${name}-${value}`}
                className="cursor-pointer peer-checked:inline-block hidden w-5 relative bg-white border border-gray-500 aspect-square rounded-md"
            >
                <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-7/12 rounded-sm bg-gray-500 aspect-square"></div>
            </label>
            <label
                htmlFor={`radio-${name}-${value}`}
                className="cursor-pointer peer-checked:hidden inline-block w-5 relative bg-white border border-gray-500 aspect-square rounded-md"
            ></label>
            <label
                className={`cursor-pointer font-poppins text-sm font-semibold ${
                    dark ? "text-white" : "text-gray-600"
                }`}
                htmlFor={`radio-${name}-${value}`}
            >
                {label}
            </label>
        </div>
    );
};
export default RadioInput;
