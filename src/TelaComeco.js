import React from 'react';

export default function TelaComeco() {
    const [comecar, setComecar] = React.useState(false);

    if (!comecar){
        return (
            <React.Fragment>
                <div class="logo-comeco">
                    <img src="assets/logo.png"/>
                    <h1>ZapRecall</h1>
                </div>
                <div class="botao-comecar" onClick={() => setComecar(true)}><p>Iniciar Recall!</p></div>
            </React.Fragment>
        );
    }else {
        return (
            <React.Fragment>
                abc
            </React.Fragment>
        )
    }     
}