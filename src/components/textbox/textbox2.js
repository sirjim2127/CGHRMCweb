import React from 'react';

export default function Textbox2({ value, placeholder, required, type, name, id, onChange = () => { } }) {
    return (


        <input
            placeholder={placeholder}
            className="border-gray-400 text-gray-700 outline-none sm:text-sm w-full font-bold"
            required={required}
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={e => onChange(e.target.value)}
        />

    );
}
