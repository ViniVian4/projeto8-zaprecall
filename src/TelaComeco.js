import React from 'react'

export default function TelaComeco({mudaTela}) {
    return (
        <>
            <div class="logo-comeco">
                <img src="assets/logo.png" />
                <h1>ZapRecall</h1>
            </div>
            <div class="botao-comecar" onClick={mudaTela}><p>Iniciar Recall!</p></div>
        </>
    );
}