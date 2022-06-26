import React from "react";

const TextAreaInput = ({
    className = "",
    placeholder = "Input your text here ...",
    rows = 2,
    onChangeInput,
}) => {
    return (
        <textarea
            placeholder={placeholder}
            className={`${className} font-poppins outline-none border border-gray-300 text-sm font-medium rounded-md p-2 bg-[#FBFBFB] text-gray-600 rounded-4 shadow-md shadow-gray-50 w-full`}
            rows={rows}
            onChange={onChangeInput}
        ></textarea>
    );
};

export default TextAreaInput;
