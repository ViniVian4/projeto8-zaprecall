import React from 'react';

import Cards from './Cards';
import BottomBar from './BottomBar';
import LogoJogo from './LogoJogo';

export default function TelaJogo({mudaTela}) {
    const [numberAnswered, setNumberanswered] = React.useState(0);
    const [answered, setAnswered] = React.useState([]);

    const [restart, setRestart] = React.useState(false);

    if (restart) {
        mudaTela();
        setNumberanswered(0);
        setAnswered([]);
        setRestart(false);
    }

    function increaseAnswered() {
        let r = numberAnswered + 1
        setNumberanswered(r);
    }

    function addAnswer(answer) {
        setAnswered([...answered, answer])
    }

    return (
        <>
            <LogoJogo />

            <Cards increaseAnswered={increaseAnswered} addAnswer={addAnswer} restart={restart} />

            <BottomBar numberAnswered={numberAnswered} answered={answered} setRestart={setRestart} />
        </>
    );
}