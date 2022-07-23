import React from 'react';
import TelaComeco from './TelaComeco';
import TelaJogo from './TelaJogo';

import "./css/style.css";

export default function App() {
    const [tela, setTela] = React.useState(true);

    function mudaTela () {
        setTela(!tela);
    }

    return (
        <>
            {tela ? (
                <TelaComeco mudaTela={mudaTela} />
            ) : (
                <TelaJogo />
            )}
        </>
    ) 
}