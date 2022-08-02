import React from "react";

const TextAreaInput = ({
    className = "",
    placeholder = "Input your text here ...",
    rows = 2,
    onChangeInput,
    name = "",
}) => {
    return (
        <textarea
            placeholder={placeholder}
            className={`${className} font-poppins outline-none border border-gray-300 text-sm font-medium rounded-md p-2 bg-[#FBFBFB] text-gray-600 rounded-4 w-full`}
            rows={rows}
            onChange={onChangeInput}
            name={name}
        ></textarea>
    );
};

export default TextAreaInput;
