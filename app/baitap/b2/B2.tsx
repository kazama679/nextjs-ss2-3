import { faClock, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function B2() {
    return (
        <div className="p-4">
            <div className="text-sm font-semibold mb-2">Input Label</div>
            <div className="flex items-center border border-blue-600 rounded px-3 py-2 w-2/6">
                <FontAwesomeIcon icon={faClock} className="text-gray-500 w-4 mr-2" />
                <input
                    className="outline-none flex-grow text-black"
                    type="text"
                    placeholder=""
                />
                <FontAwesomeIcon icon={faAngleUp} className="text-gray-500 w-4 ml-2" />
            </div>

            <div className="mt-2 border border-gray-300 rounded px-3 py-2 w-2/6 bg-white shadow-md">
                {["Label", "Label", "Label", "Label"].map((label, index) => (
                    <div className="flex justify-between items-center mb-2" key={index}>
                        <div>{label}</div>
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                    </div>
                ))}

                <div className="flex justify-between mt-4">
                    <button className="flex justify-center items-center border border-blue-600 rounded px-4 py-2 w-5/12 text-blue-600 hover:bg-blue-50">
                        Clear
                    </button>
                    <button className="flex justify-center items-center bg-blue-600 text-white rounded px-4 py-2 w-5/12 hover:bg-blue-700">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
