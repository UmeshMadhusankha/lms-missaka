import React from 'react';

const GreenClass = () => {
    return (
        <div style={{
            height: '55vh',
            width: '100%',
            background: '#a8ffb0',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#222',
            fontSize: '1.2rem'
        }}>
            <h3>Green Class</h3>
            <p>This is the GreenClass module.</p>
        </div>
    );
};

export default GreenClass;