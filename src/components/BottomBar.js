import React from 'react';

import wrong from "../assets/Wrong.svg";
import party from "../assets/party.png";
import sad from "../assets/sad.png"

export default function BottomBar({ numberAnswered, answered }) {
    function printAnswers() {
        if (answered.length > 0)
            return (answered.map(answer => (
                <img src={answer} />
            )));
        else
            return;

    }

    function printMsg() {
        if (numberAnswered === 4) {
            let win = true;
            for (let i = 0; i < answered.length; i++)
                if (wrong === answered[i])
                    win = false;


            if (win)
                return (
                    <>
                        <div class="header-msg">
                            <img align="left" src={party} />
                            <p>Parabéns!</p>
                        </div>
                        <div class="msg">
                            <p>Você não esqueceu de nenhum flashcard!</p>
                        </div>
                    </>
                )
            else
                return (
                    <>
                        <div class="header-msg">
                            <img align="left" src={sad} />
                            <p>Putz...</p>
                        </div>
                        <div class="msg">
                            <p>Ainda faltam alguns...
                                Mas não desanime!</p>
                        </div>
                    </>
                )
        }
        else
            return;

    }

    return (
        <div class="bottom-bar">
            {printMsg()}
            <div class="quantity-answered">
                <p>{numberAnswered}/4 CONCLUÍDOS</p>
            </div>
            {printAnswers()}
        </div>
    )
}