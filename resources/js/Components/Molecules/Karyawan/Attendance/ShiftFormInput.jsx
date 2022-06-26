import React from "react";
import RadioInput from "../../../Atomic/Forms/RadioInput";

const ShiftFormInput = ({ className = "", shifts, onChangeShiftInput }) => {
    return (
        <div className={`${className} `}>
            <div className="flex flex-col space-y-2">
                {shifts.map((shift, index) => (
                    <RadioInput
                        onChangeInput={onChangeShiftInput}
                        label={shift.label}
                        name="shift"
                        checked={index == 0 && true}
                        value={shift.value}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShiftFormInput;
