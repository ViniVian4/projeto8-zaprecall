import React from "react";

export default function RestartButton({numberAnswered, setRestart}) {

    if (numberAnswered === 4)
        return (
            <div class="restart-container"><div class="restart-button" onClick={() => (setRestart(true))}><p>REINICIAR RECALL</p></div></div>
        )
    else
        return (<></>)
}