import React from 'react';
import Cards from './Cards';

import logop from "./assets/logo-pequeno.png";

export default function TelaJogo() {
    const [numberAnswered, setAnswered] = React.useState(0);

    function increaseAnswered() {
        let r = numberAnswered + 1
        setAnswered(r);
    }

    return (
        <>
            <div class="logo-jogo">
                <img src={logop} />
                <h1>ZapRecall</h1>
            </div>

            <Cards increaseAnswered={increaseAnswered} />
        </>
    );
}