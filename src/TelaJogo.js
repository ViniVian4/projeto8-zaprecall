import React from 'react';
import Cards from './Cards';

export default function TelaJogo() {

    return (
        <>
            <div class="logo-jogo">
                <img src="assets/logo-pequeno.png" />
                <h1>ZapRecall</h1>
            </div>

            <Cards />
        </>
    );
}