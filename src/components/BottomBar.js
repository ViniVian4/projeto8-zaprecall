import React from 'react';

import Msg from './Msg';

export default function BottomBar({ numberAnswered, answered, setRestart }) {
    function printAnswers() {        
        if (answered.length > 0)
            return (answered.map(answer => (
                <img src={answer} />
            )));
        else
            return;

    }

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
            {printAnswers()}
            {printRestartButton()}
        </div>
    )
}