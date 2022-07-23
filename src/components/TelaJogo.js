import React from 'react';

import Cards from './Cards';
import BottomBar from './BottomBar';
import LogoJogo from './LogoJogo';

export default function TelaJogo() {
    const [numberAnswered, setNumberanswered] = React.useState(0);
    const [answered, setAnswered] = React.useState([]);

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

            <Cards increaseAnswered={increaseAnswered} addAnswer={addAnswer} />

            <BottomBar numberAnswered={numberAnswered} answered={answered} />
        </>
    );
}