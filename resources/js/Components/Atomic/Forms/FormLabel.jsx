import React from "react";

import { FaAtom } from "react-icons/fa";

const FormLabel = ({
    icon = <FaAtom className="w-4 h-4 text-white" />,
    label = "Some label",
    className = "",
}) => {
    return (
        <div className={`${className} flex items-center space-x-2 select-none`}>
            {icon}
            <label className="uppercase text-sm text-gray-500 font-bold tracking-wider">
                {label}
            </label>
        </div>
    );
};

export default FormLabel;
