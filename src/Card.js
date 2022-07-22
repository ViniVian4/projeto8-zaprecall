import React from 'react';

export default function Card({card, index}) {
    return (
        <>
            <div class="pergunta">
                <p>Pergunta {index+1}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </>
    )
}