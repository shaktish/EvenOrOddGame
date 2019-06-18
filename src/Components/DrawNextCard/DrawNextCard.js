import React from 'react'; 
import {connect} from 'react-redux';

class DrawNextCard extends React.Component {    
    render(){
        return (
            <div>
                <button>Draw the next card</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, '\n STATE FROM DRAWNEXTCARD');
    return state;
}

const connectorComponent = connect(mapStateToProps);

export default connectorComponent(DrawNextCard);