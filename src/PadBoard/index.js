import React, { useEffect, useState } from "react";
import { bankOne, bankTwo } from "../Data";


const PadBoard = ({
    bank,
    power,
    setCurrSound,
    currVolume,
    setUpdateTrack,
    updateTrack,
}) => {

    const [isActive, setIsActive] = useState(false);
    const [trackUrl, setTrackUrl] = useState(null);
    const [currBank, setCurrBank] = useState(bankOne);

    useEffect(() => {
        bank === true ? setCurrBank(bankTwo) : setCurrBank(bankOne);
    }, [bank]);

    const playSound = (e) => {
        if (power === true) {
            const sound = e.target.id;
            setIsActive(!isActive);
            setCurrSound(sound);
            setTrackUrl((currBank.find(s => s.id === sound)).url);
            setUpdateTrack(true);
        }
    };


    useEffect(() => {
        if (updateTrack) {
            const audio = new Audio(trackUrl);
            audio.volume = currVolume*0.01
            audio.play(trackUrl);
        }
    }, [trackUrl, updateTrack, isActive, currVolume]);
    
    
    return (
        <div id="pad-board">
            {currBank.map(pad =>
                <div
                className="drum-pad"
                id={pad.id}
                key={pad.keyCode}
                onClick={playSound}
                >
                    <audio
                        className="clip"
                        id={pad.keyTrigger}
                        src={pad.url}
                    >
                    </audio>
                    {pad.keyTrigger}
                </div>
            )}
        </div>
    );
};

export default PadBoard;