import React from 'react';

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-animation">
                <div className="cube cube1"></div>
                <div className="cube cube2"></div>
                <div className="cube cube3"></div>
                <div className="cube cube4"></div>
            </div>
            <p>Loading...</p>
        </div>
    );
};

export default Loading;
