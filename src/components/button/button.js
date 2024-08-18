import React from 'react';

export default function Button({ children, type, onClick = () => { } }) {
    return (
        <div>
            <button
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}
