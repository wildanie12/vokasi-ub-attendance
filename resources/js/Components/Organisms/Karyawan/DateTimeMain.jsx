import React from "react";

const DateTimeMain = ({ className = "" }) => {
    return (
        <div
            className={`flex justify-center items-end font-poppins flex-col ${className}`}
        >
            <div className="text-7xl font-bold bg-gradient-to-bl from-primary-400 to-indigo-500 bg-clip-text text-transparent">
                09:31
            </div>
            <div className="text-primary text-2xl font-semibold">
                Senin, 03 Juli 2019
            </div>
        </div>
    );
};

export default DateTimeMain;
