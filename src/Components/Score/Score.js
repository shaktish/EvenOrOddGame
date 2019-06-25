import React from 'react';

const Score = (props) => {
    return (
        <div>
            <h4>Record : </h4>
            <p><strong>{props.remaining}</strong> remaining</p>
            <p><strong>{props.score}</strong> correct guesses</p>
        </div>
    )
}

export default Score