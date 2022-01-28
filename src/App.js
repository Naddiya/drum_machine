import React, { useState } from 'react';
import './App.css';
import PadBoard from './PadBoard';
import Controls from './Controls';

const App = () => {

    const [bank, updateBank] = useState(false);
    const [power, updatePower] = useState(false);
    const [updateTrack, setUpdateTrack] = useState(false);
    const [currSound, setCurrSound] = useState();
    const [updateVolume, setUpdateVolume] = useState(false);
    const [currVolume, setCurrVolume] = useState(50);

    return (
        <div id="App">
            <div id="drum-machine">
                <PadBoard
                    bank={bank}
                    power={power}
                    setCurrSound={setCurrSound}
                    currVolume={currVolume}
                    updateTrack={updateTrack}
                    setUpdateTrack={setUpdateTrack}
                />
                <Controls
                    bank={bank}
                    updateBank={updateBank}
                    power={power}
                    updatePower={updatePower}
                    currSound={currSound}
                    updateTrack={updateTrack}
                    setUpdateTrack={setUpdateTrack}
                    currVolume={currVolume}
                    setCurrVolume={setCurrVolume}
                    setCurrSound={setCurrSound}
                    updateVolume={updateVolume}
                    setUpdateVolume={setUpdateVolume}
                />
            </div>
        </div>
    );
};

export default App;
