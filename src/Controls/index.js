import React, { useState, useEffect } from 'react';

const Controls = ({
    bank,
    updateBank,
    power,
    updatePower,
    currSound,
    updateTrack,
    setUpdateTrack,
    setCurrVolume,
    setUpdateVolume,
    updateVolume
}) => {

    const [isActive, setIsActive] = useState(false);
    const [volume, setVolume] = useState();

    const displayInfo = () => {
        setIsActive(true);
    };

    const volumeControl = (e) => {
        if (power){
            setUpdateVolume(true);
            let value = e.target.value;
            setVolume(value);
            setCurrVolume(value);
            displayInfo();
        } 
    };


    // turn off display after one second
    useEffect(() => {
        const timer = setTimeout(() => {
            isActive === true && setIsActive(!isActive);
        }, 1000);
        return () => clearTimeout(timer);
    }, [isActive]);
    useEffect(() => {
        const timer = setTimeout(() => {
            updateTrack && setUpdateTrack(false);
        }, 1000);
        return () => clearTimeout(timer);

    }, [updateTrack, setUpdateTrack]);

    return (
        <div id="controls">
            <div className="power">
                <p className="power-label">Power</p>
                <label className="switch">
                    <input
                        type="checkbox"
                        onClick={() => updatePower(!power)}
                        defaultChecked={false}
                    >
                    </input>
                    <span className="slider"></span>
                </label>
            </div>
            <div id="display" className="sound-title" >
                {updateVolume && isActive ? `Volume : ${volume}` : updateTrack && currSound }
            </div>
            <div className="volume">
                <input
                    type="range"
                    onChange={volumeControl}
                >

                </input>
            </div>
            <div className="bank">
                <p className="bank-label">Bank</p>
                <label className="switch">
                    <input
                        type="checkbox"
                        onClick={() => updateBank(!bank)}>
                    </input>
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    );
};

export default Controls;