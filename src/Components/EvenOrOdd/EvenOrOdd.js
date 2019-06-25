import React from 'react';
import classes from './EvenOrOdd.module.css';

const EvenOrOdd = (props) => {
    return (
        <div>            
            <h3 >Will it be Even Or Odd</h3>
            <button 
                className={props.evenClass ? [classes.active, classes.btn].join(' ') : classes.btn} 
                onClick={props.evenToggler}
            >Even</button>
            <button 
                className={props.oddClass ? [classes.active, classes.btn].join(' ') : classes.btn}
                onClick={props.oddToggler}
            >Odd</button>            
        </div>
    );
}


export default EvenOrOdd;