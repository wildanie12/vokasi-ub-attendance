import React from "react";
import { FaHandPointer } from "react-icons/fa";

const CheckButton = ({ type = "out" }) => {
    let className = "";
    let label = "";
    let disabled = false;
    if (type == "in-disabled" || type == "out-disabled") disabled = true;
    switch (type) {
        case "out":
            className = "bg-gradient-to-bl from-error-600 to-orange-400";
            label = "Check-Out";
            break;
        case "in":
            className = "bg-gradient-to-bl from-primary-400 to-indigo-500";
            label = "Check-In";
            break;
        case "in-disabled":
            className = "bg-gradient-to-bl from-gray-500 to-gray-700";
            label = "Check-In";
            break;
        case "out-disabled":
            className = "bg-gradient-to-bl from-gray-500 to-gray-700";
            label = "Check-Out";
            break;
    }
    return (
        <div
            className={`cursor-pointer hover:scale-105 shadow-lg hover:shadow-2xl active:shadow-lg active:scale-95 transition-all duration-200 ease-out w-36 h-36 aspect-square rounded-full ${className} flex flex-col items-center justify-center space-y-2`}
        >
            <FaHandPointer
                className={`w-16 h-16 ${
                    disabled ? "text-gray-300" : "text-white"
                }`}
            />
            <div
                className={`font-poppins text-md font-bold ${
                    disabled ? "text-gray-300" : "text-white"
                }`}
            >
                {label}
            </div>
        </div>
    );
};

export default CheckButton;
