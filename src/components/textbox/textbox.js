import React from 'react';

export default function Textbox({ value, placeholder, required, type, name, id, onChange = () => { } }) {
    return (
        <div>
            <label className="sr-only" htmlFor={id}>{placeholder}</label>
            <input
                placeholder={placeholder}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-400 text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                required={required}
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}
