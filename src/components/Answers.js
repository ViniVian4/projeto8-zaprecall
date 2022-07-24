import React from 'react';

export default function Answers({answered}) {
    if (answered.length > 0)
            return (answered.map(answer => (
                <img src={answer} />
            )));
        else
            return (
                <></>
            )
}