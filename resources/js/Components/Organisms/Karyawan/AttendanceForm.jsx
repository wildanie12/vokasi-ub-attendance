import React from "react";
import ShiftFormInput from "../../Molecules/Karyawan/Attendance/ShiftFormInput";
import TaskFormInput from "../../Molecules/Karyawan/Attendance/TaskFormInput";

const AttendanceForm = ({ className = "" }) => {
    const handleDeskripsiTugas = (e) => {
        console.log(e.target.value);
    };
    const handleShift = (e) => {
        console.log(e.target.name + " " + e.target.value);
    };

    const shifts = [
        {
            label: "Shift Pagi",
            value: "1",
        },
        {
            label: "Shift Siang",
            value: "2",
        },
        {
            label: "Shift Malam",
            value: "3",
        },
        {
            label: "WFA",
            value: "4",
        },
    ];
    return (
        <div
            className={`${className} flex flex-wrap px-8 lg:px-0 w-full lg:w-3/4 items-center justify-center space-x-4`}
        >
            <TaskFormInput
                className="w-full lg:w-1/3"
                onChangeTugasInput={handleDeskripsiTugas}
            />
            <ShiftFormInput
                className="w-full lg:w-auto"
                shifts={shifts}
                onChangeShiftInput={handleShift}
            />
        </div>
    );
};

export default AttendanceForm;
