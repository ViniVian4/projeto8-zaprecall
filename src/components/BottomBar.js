import React from 'react';
import Answers from './Answers';

import Msg from './Msg';
import RestartButton from './RestartButton';

export default function BottomBar({ numberAnswered, answered, setRestart }) {
    function printRestartButton() {
        if (numberAnswered === 4)
            return (
                <div class="restart-container"><div class="restart-button" onClick={() => (setRestart(true))}><p>REINICIAR RECALL</p></div></div>
            )
    }

    return (
        <div class="bottom-bar">
            <Msg numberAnswered={numberAnswered} answered={answered} />
            <div class="quantity-answered">
                <p>{numberAnswered}/4 CONCLUÍDOS</p>
            </div>
            <Answers answered={answered} />
            <RestartButton numberAnswered={numberAnswered} setRestart={setRestart} />
        </div>
    )
}