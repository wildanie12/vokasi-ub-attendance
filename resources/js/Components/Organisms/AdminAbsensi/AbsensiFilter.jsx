import React from "react";
import { FaClock, FaFileExcel, FaSignature } from "react-icons/fa";
import Input from "../../Atomic/Forms/Input";
import SelectInput from "../../Atomic/Forms/SelectInput";

const AbsensiFilter = ({ className, onExportClick, onShiftClick }) => {
    return (
        <div
            className={`${className} w-full bg-gradient-to-bl items-center justify-between flex md:space-x-4 lg:flex-nowrap from-primary-400 to-indigo-500 shadow-xl rounded-xl p-4 text-white`}
        >
            <div className="flex-grow grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <label
                        htmlFor="filter_name"
                        className="text-white space-x-2 mb-1 flex items-center font-bold font-poppins text-sm tracking-wide uppercase"
                    >
                        <FaSignature />
                        <div className="tracking-wide text-sm">Nama</div>
                    </label>
                    <Input
                        type="text"
                        className="p-2"
                        name="filter_nama"
                        placeholder="Cari berdasarkan nama..."
                    />
                </div>
                <div className="col-auto">
                    <label
                        htmlFor="filter_name"
                        className="text-white space-x-2 mb-1 flex items-center font-bold font-poppins text-sm tracking-wide uppercase"
                    >
                        <FaSignature />
                        <div className="tracking-wide text-sm">Sub Bagian</div>
                    </label>
                    <SelectInput
                        type="text"
                        className="p-2"
                        name="filter_sub_bagian_id"
                        options={[
                            { text: "Tukang kebon", value: "hello" },
                            { text: "Tukang coding", value: "hello" },
                            {
                                text: "Tukang anu",
                                value: "hello2",
                                selected: true,
                            },
                        ]}
                        placeholder="Cari berdasarkan nama..."
                    />
                </div>
                <div className="col-auto">
                    <label
                        htmlFor="filter_name"
                        className="text-white space-x-2 mb-1 flex items-center font-bold font-poppins text-sm tracking-wide uppercase"
                    >
                        <FaSignature />
                        <div className="tracking-wide text-sm">Tanggal</div>
                    </label>
                    <Input type="date" name="filter_tanggal" className="p-2" />
                </div>
            </div>
            <div className="col-auto flex space-x-2">
                <button
                    onClick={onShiftClick}
                    className="outline-none hover:shadow-xl hover:-translate-y-[2px] active:translate-y-[1px] transition-all duration-100 ease-out rounded-lg bg-gradient-to-bl from-error-600 to-orange-400 shadow-md flex items-center justify-center px-2 py-3"
                >
                    <FaClock className="text-white w-5 h-5" />
                    <div className="text-xs font-semibold tracking-wide ml-2 uppercase">
                        Lihat daftar shift
                    </div>
                </button>
                <button
                    onClick={onExportClick}
                    className="outline-none hover:shadow-xl hover:-translate-y-[2px] active:translate-y-[1px] transition-all duration-100 ease-out rounded-lg bg-success-900 shadow-md flex items-center justify-center px-2 py-3"
                >
                    <FaFileExcel className="text-white w-5 h-5" />
                    <div className="text-xs text-white font-semibold tracking-wide ml-2 uppercase">
                        Export
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AbsensiFilter;
