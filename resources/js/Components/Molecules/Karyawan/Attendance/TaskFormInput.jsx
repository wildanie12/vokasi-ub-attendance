import React from "react";
import { FaTasks } from "react-icons/fa";
import FormLabel from "../../../Atomic/Forms/FormLabel";
import TextAreaInput from "../../../Atomic/Forms/TextAreaInput";

const TaskFormInput = ({ className = "", onChangeTugasInput }) => {
    return (
        <div className={className}>
            <FormLabel
                label="Deskripsi Tugas"
                icon={<FaTasks className="text-gray-600" />}
                className="mb-1 w-full"
            />
            <TextAreaInput rows={4} onChangeInput={onChangeTugasInput} />
        </div>
    );
};

export default TaskFormInput;
