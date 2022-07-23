import React from 'react';

import "../css/style.css";

import logo from "../assets/logo.png";

export default function TelaComeco({mudaTela}) {
    return (
        <>
            <div class="logo-comeco">
                <img src={logo} />
                <h1>ZapRecall</h1>
            </div>
            <div class="botao-comecar" onClick={mudaTela}><p>Iniciar Recall!</p></div>
        </>
    );
}