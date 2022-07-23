import React from 'react';

import "../css/style.css";

import logo from "../assets/logo.png";
import LogoComeco from './LogoComeco';

export default function TelaComeco({mudaTela}) {
    return (
        <>
            <LogoComeco />
            <div class="botao-comecar" onClick={mudaTela}><p>Iniciar Recall!</p></div>
        </>
    );
}