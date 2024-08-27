import React from 'react';

export default function FillUp() {
    return (
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeIdMaJpP6EEFEA33KSDLRfq68Ogz5ZmT7TReNFmyubOwrkRw/viewform?embedded=true"
            className="w-full h-[80vh] border-0"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
            title="form"
        >
            Loading…
        </iframe>
    );
}
