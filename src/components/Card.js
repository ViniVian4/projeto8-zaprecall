import React from 'react';

import play from "../assets/play.svg";
import setinha from "../assets/setinha.png";
import right from "../assets/right.svg";
import question from "../assets/question.svg";
import wrong from "../assets/Wrong.svg";

export default function Card({ card, index, increaseAnswered, addAnswer, restart }) {
    const { pergunta, resposta } = card;

    const [isHidden, setIshidden] = React.useState(true);
    const [isQuestion, setIsquestion] = React.useState(true);
    const [icon, setIcon] = React.useState(play);
    const [pClass, setPclass] = React.useState("");

    if (restart) {
        setIshidden(true);
        setIsquestion(true);
        setIcon(play);
        setPclass("");
    }

    function showCard() {
        if (icon === play)
            setIshidden(false);
    }

    function showAnswer() {
        setIsquestion(false);
    }

    function setAnswer(answer) {
        if (answer === "Não lembrei"){
            setPclass("answered red");
            setIcon(wrong);
            setIshidden(true);
            increaseAnswered();
            addAnswer(wrong);
        }
        else if (answer === "Zap"){
            setPclass("answered green");
            setIcon(right);
            setIshidden(true);
            increaseAnswered();
            addAnswer(right);
        } 
        else if (answer === "Quase não lembrei") {
            setPclass("answered orange");
            setIcon(question);
            setIshidden(true);
            increaseAnswered();
            addAnswer(question);
        }
    }

    return (
        <>
            {isHidden ? (
                <div class="botao-card" onClick={showCard}>
                    <p class={pClass}>Pergunta {index + 1}</p>
                    <img src={icon} />
                </div>
            ) : (isQuestion ? (
                    <div class="card">
                        <p>{pergunta}</p>
                        <img src={setinha} onClick={showAnswer} />
                    </div>
                ) : (
                    <div class="card">
                        <p>{resposta}</p>
                        <div class="buttons">
                            <div class="button background-red" onClick={() => (setAnswer("Não lembrei"))}><p>Não lembrei</p></div>
                            <div class="button background-orange" onClick={() => (setAnswer("Quase não lembrei"))}><p>Quase não lembrei</p></div>
                            <div class="button background-green" onClick={() => (setAnswer("Zap"))}><p>Zap!</p></div>
                        </div>
                    </div>
                )                
            )}
        </>
    )
}