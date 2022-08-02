import React from "react";

const Input = ({
    className = false,
    type = "text",
    name,
    onChangeHandler,
    placeholder,
    ...attr
}) => {
    return (
        <input
            type={type}
            name={name}
            id={name}
            onChange={onChangeHandler}
            placeholder={placeholder}
            className={`w-full placeholder:font-poppins placeholder:text-gray-400 placeholder:text-sm text-gray-600 text-sm rounded-lg outline-none shadow-lg ${
                className ? className : "px-3 py-2"
            }`}
            {...attr}
        />
    );
};

export default Input;
